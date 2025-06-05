'use client'

// import type { UseChatHelpers } from '@ai-sdk/react'
import { memo, useEffect, useRef, useState } from 'react'

import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'

import { cn } from '@/lib/utils'

const MultimodalInput = ({ className }: { className?: string }) => {
  const textareaRef = useRef<HTMLTextAreaElement>(null)
  const [input, setInput] = useState('')

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

  const handleInput = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInput(event.target.value)
    adjustHeight()
  }

  return (
    <div className="relative flex w-full flex-col gap-4 px-4">
      <Textarea
        data-testid="multimodal-input"
        ref={textareaRef}
        placeholder="Send a message..."
        value={input}
        onChange={handleInput}
        className={cn(
          'bg-muted max-h-[calc(75dvh)] min-h-[24px] resize-none overflow-hidden rounded-2xl pb-10 !text-base dark:border-zinc-700',
          className
        )}
        rows={2}
        autoFocus
      />

      <div className="absolute right-0 bottom-0 flex w-fit flex-row justify-end px-6 py-2">
        {true ? <StopButton stop={stop} /> : <SendButton input={input} />}
      </div>
    </div>
  )
}

export default memo(MultimodalInput)

function PureStopButton({
  stop
  // setMessages
}: {
  stop: () => void
  // setMessages: UseChatHelpers['setMessages']
}) {
  return (
    <Button
      data-testid="stop-button"
      className="h-fit rounded-full border p-1.5 dark:border-zinc-600"
      onClick={event => {
        event.preventDefault()
        stop()
        // setMessages(messages => messages)
      }}
    >
      {/* <StopIcon size={14} /> */}
      <div className="h-3.5 w-3.5"></div>
    </Button>
  )
}

const StopButton = memo(PureStopButton)

function PureSendButton({
  // submitForm,
  input
  // uploadQueue
}: {
  // submitForm: () => void
  input: string
  // uploadQueue: Array<string>
}) {
  return (
    <Button
      data-testid="send-button"
      className="h-fit rounded-full border p-1.5 dark:border-zinc-600"
      onClick={event => {
        event.preventDefault()
        // submitForm()
      }}
      disabled={input.length === 0}
    >
      {/* <ArrowUpIcon size={14} /> */}
      <div className="h-3.5 w-3.5"></div>
    </Button>
  )
}

const SendButton = memo(PureSendButton, (prevProps, nextProps) => {
  // if (prevProps.uploadQueue.length !== nextProps.uploadQueue.length) return false
  if (prevProps.input !== nextProps.input) return false
  return true
})
