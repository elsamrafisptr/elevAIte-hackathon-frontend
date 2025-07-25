'use client'

import type { ChatRequestOptions, CreateMessage, Message } from 'ai'
import { motion } from 'framer-motion'
import { ArrowUpIcon, StopCircle } from 'lucide-react'
import type React from 'react'
import {
  type Dispatch,
  type SetStateAction,
  useCallback,
  useEffect,
  useRef
} from 'react'
import { toast } from 'sonner'
import { useLocalStorage, useWindowSize } from 'usehooks-ts'

import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'

import { cn, sanitizeUIMessages } from '@/lib/utils'

const suggestedActions = [
  {
    title: 'Bagaimana perasaan dan keadaan kamu',
    label: 'buat hari ini?',
    action: 'Bagaimana perasaan dan keadaan kamu buat hari ini?'
  },
  {
    title: 'Aku mau minta bantuan',
    label: 'cara menjadi versi terbaik diriku?',
    action: 'Aku mau minta bantuan cara menjadi versi terbaik diriku?'
  }
]

export function MultimodalInput({
  input,
  setInput,
  isLoading,
  stop,
  messages,
  setMessages,
  append,
  handleSubmit,
  className
}: {
  chatId: string
  input: string
  setInput: (value: string) => void
  isLoading: boolean
  stop: () => void
  messages: Array<Message>
  setMessages: Dispatch<SetStateAction<Array<Message>>>
  append: (
    message: Message | CreateMessage,
    chatRequestOptions?: ChatRequestOptions
  ) => Promise<string | null | undefined>
  handleSubmit: (
    event?: {
      preventDefault?: () => void
    },
    chatRequestOptions?: ChatRequestOptions
  ) => void
  className?: string
}) {
  const textareaRef = useRef<HTMLTextAreaElement>(null)
  const { width } = useWindowSize()

  useEffect(() => {
    if (textareaRef.current) {
      adjustHeight()
    }
  }, [])

  const adjustHeight = () => {
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto'
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight + 2}px`
    }
  }

  const [localStorageInput, setLocalStorageInput] = useLocalStorage('input', '')

  useEffect(() => {
    if (textareaRef.current) {
      const domValue = textareaRef.current.value
      const finalValue = domValue || localStorageInput || ''
      setInput(finalValue)
      adjustHeight()
    }
  }, [localStorageInput, setInput])

  useEffect(() => {
    setLocalStorageInput(input)
  }, [input, setLocalStorageInput])

  const handleInput = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInput(event.target.value)
    adjustHeight()
  }

  const submitForm = useCallback(() => {
    handleSubmit(undefined, {})
    setLocalStorageInput('')

    if (width && width > 768) {
      textareaRef.current?.focus()
    }
  }, [handleSubmit, setLocalStorageInput, width])

  return (
    <div className="relative mb-8 flex w-full flex-col gap-4">
      {messages.length === 0 && (
        <div className="grid w-full gap-2 sm:grid-cols-2">
          {suggestedActions.map((suggestedAction, index) => (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ delay: 0.05 * index }}
              key={`suggested-action-${suggestedAction.title}-${index}`}
              className={index > 1 ? 'hidden sm:block' : 'block'}
            >
              <Button
                variant="ghost"
                onClick={async () => {
                  append({
                    role: 'user',
                    content: suggestedAction.action
                  })
                }}
                className="h-auto w-full flex-1 cursor-pointer items-start justify-start gap-1 rounded-xl border px-4 py-3.5 text-left text-sm sm:flex-col"
              >
                <span className="font-medium">{suggestedAction.title}</span>
                <span className="text-muted-foreground">{suggestedAction.label}</span>
              </Button>
            </motion.div>
          ))}
        </div>
      )}

      <Textarea
        ref={textareaRef}
        placeholder="Send a message..."
        value={input}
        onChange={handleInput}
        className={cn(
          'bg-muted max-h-[calc(75dvh)] min-h-[24px] resize-none overflow-hidden rounded-xl pr-16 !text-base',
          className
        )}
        rows={3}
        autoFocus
        onKeyDown={event => {
          if (event.key === 'Enter' && !event.shiftKey) {
            event.preventDefault()

            if (isLoading) {
              toast.error('Please wait for the model to finish its response!')
            } else {
              submitForm()
            }
          }
        }}
      />

      {isLoading ? (
        <Button
          className="absolute right-2 bottom-1 m-0.5 h-fit rounded-full border p-1.5 hover:cursor-pointer dark:border-zinc-600"
          onClick={event => {
            event.preventDefault()
            stop()
            setMessages(messages => sanitizeUIMessages(messages))
          }}
        >
          <StopCircle size={14} />
        </Button>
      ) : (
        <Button
          className="absolute right-2 bottom-1 m-0.5 h-fit rounded-full border p-1.5 hover:cursor-pointer disabled:cursor-not-allowed dark:border-zinc-600"
          onClick={event => {
            event.preventDefault()
            submitForm()
          }}
          disabled={input.length === 0}
        >
          <ArrowUpIcon size={14} />
        </Button>
      )}
    </div>
  )
}
