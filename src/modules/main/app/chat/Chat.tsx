'use client'

import Link from 'next/link'

import { useChat } from '@ai-sdk/react'
import { motion } from 'framer-motion'
import { MessageCircleIcon } from 'lucide-react'
import { toast } from 'sonner'

import { PreviewMessage, ThinkingMessage } from './sections/Messages'
import { MultimodalInput } from './sections/MultimodalInput'

import { useScrollToBottom } from '@/hooks/use-scroll-to-bottom'

export default function Chat() {
  const chatId = '001'

  const {
    messages,
    setMessages,
    handleSubmit,
    input,
    setInput,
    append,
    isLoading,
    stop
  } = useChat({
    maxSteps: 4,
    onError: error => {
      if (error.message.includes('Too many requests')) {
        toast.error('You are sending too many messages. Please try again later.')
      }
    }
  })

  const [messagesContainerRef, messagesEndRef] = useScrollToBottom<HTMLDivElement>()

  return (
    <div className="bg-background flex h-[calc(100dvh-52px)] min-w-0 flex-col">
      <div
        ref={messagesContainerRef}
        className="flex min-w-0 flex-1 flex-col gap-6 overflow-y-scroll pt-4"
      >
        {messages.length === 0 && (
          <motion.div
            key="overview"
            className="mx-auto max-w-3xl md:mt-20"
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ delay: 0.5 }}
          >
            <div className="flex max-w-xl flex-col gap-8 rounded-xl p-6 text-center leading-relaxed">
              <p className="flex flex-row items-center justify-center gap-4">
                <MessageCircleIcon size={32} />
              </p>
              <p>
                This is an{' '}
                <Link
                  className="font-medium underline underline-offset-4"
                  href="https://github.com/vercel-labs/ai-sdk-preview-python-streaming"
                  target="_blank"
                >
                  open source
                </Link>{' '}
                template that demonstrates the usage of{' '}
                <Link
                  className="font-medium underline underline-offset-4"
                  href="https://sdk.vercel.ai/docs/ai-sdk-ui/stream-protocol#data-stream-protocol"
                  target="_blank"
                >
                  Data Stream Protocol
                </Link>{' '}
                to stream chat completions from a Python function (
                <Link
                  className="font-medium underline underline-offset-4"
                  href="https://fastapi.tiangolo.com"
                  target="_blank"
                >
                  FastAPI
                </Link>
                ) along with the
                <code className="bg-muted rounded-md px-1 py-0.5">useChat</code> hook on
                the client to create a seamless chat experience.
              </p>
              <p>
                You can learn more about the AI SDK by visiting the{' '}
                <Link
                  className="font-medium underline underline-offset-4"
                  href="https://sdk.vercel.ai/docs"
                  target="_blank"
                >
                  docs
                </Link>
                .
              </p>
            </div>
          </motion.div>
        )}

        {messages.map((message, index) => (
          <PreviewMessage
            key={message.id}
            chatId={chatId}
            message={message}
            isLoading={isLoading && messages.length - 1 === index}
          />
        ))}

        {isLoading &&
          messages.length > 0 &&
          messages[messages.length - 1]?.role === 'user' && <ThinkingMessage />}

        <div ref={messagesEndRef} className="min-h-[24px] min-w-[24px] shrink-0" />
      </div>

      <form className="bg-background mx-auto flex w-full gap-2 px-4 pb-4 md:max-w-3xl md:pb-6">
        <MultimodalInput
          chatId={chatId}
          input={input}
          setInput={setInput}
          handleSubmit={handleSubmit}
          isLoading={isLoading}
          stop={stop}
          messages={messages}
          setMessages={setMessages}
          append={append}
        />
      </form>
    </div>
  )
}
