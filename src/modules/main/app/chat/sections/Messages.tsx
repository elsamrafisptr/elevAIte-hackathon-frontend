'use client'

import type { Message } from 'ai'
import { motion } from 'framer-motion'
import { SparklesIcon } from 'lucide-react'

import { cn } from '@/lib/utils'

export const PreviewMessage = ({
  message
}: {
  chatId: string
  message: Message
  isLoading: boolean
}) => {
  return (
    <motion.div
      className="group/message mx-auto w-full max-w-3xl px-4"
      initial={{ y: 5, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      data-role={message.role}
    >
      <div
        className={cn(
          'group-data-[role=user]/message:bg-primary group-data-[role=user]/message:text-primary-foreground flex w-full gap-4 rounded-xl group-data-[role=user]/message:ml-auto group-data-[role=user]/message:w-fit group-data-[role=user]/message:max-w-2xl group-data-[role=user]/message:px-3 group-data-[role=user]/message:py-2'
        )}
      >
        {message.role === 'assistant' && (
          <div className="ring-border flex size-8 shrink-0 items-center justify-center rounded-full ring-1">
            <SparklesIcon size={14} />
          </div>
        )}

        <div className="flex w-full flex-col gap-2">
          {/* {message.content && (
            <div className="flex flex-col gap-4">
              <Markdown>{message.content as string}</Markdown>
            </div>
          )} */}

          {/* {message.toolInvocations && message.toolInvocations.length > 0 && (
            <div className="flex flex-col gap-4">
              {message.toolInvocations.map(toolInvocation => {
                const { toolName, toolCallId, state } = toolInvocation

                if (state === 'result') {
                  const { result } = toolInvocation

                  return (
                    <div key={toolCallId}>
                      {toolName === 'get_current_weather' ? (
                        <Weather weatherAtLocation={result} />
                      ) : (
                        <pre>{JSON.stringify(result, null, 2)}</pre>
                      )}
                    </div>
                  )
                }
                return (
                  <div
                    key={toolCallId}
                    className={cn({
                      skeleton: ['get_current_weather'].includes(toolName)
                    })}
                  >
                    {toolName === 'get_current_weather' ? <Weather /> : null}
                  </div>
                )
              })}
            </div>
          )} */}

          {/* {message.experimental_attachments && (
            <div className="flex flex-row gap-2">
              {message.experimental_attachments.map(attachment => (
                <PreviewAttachment key={attachment.url} attachment={attachment} />
              ))}
            </div>
          )} */}
        </div>
      </div>
    </motion.div>
  )
}

export const ThinkingMessage = () => {
  const role = 'assistant'

  return (
    <motion.div
      className="group/message mx-auto w-full max-w-3xl px-4"
      initial={{ y: 5, opacity: 0 }}
      animate={{ y: 0, opacity: 1, transition: { delay: 1 } }}
      data-role={role}
    >
      <div
        className={cn(
          'flex w-full gap-4 rounded-xl group-data-[role=user]/message:ml-auto group-data-[role=user]/message:w-fit group-data-[role=user]/message:max-w-2xl group-data-[role=user]/message:px-3 group-data-[role=user]/message:py-2',
          {
            'group-data-[role=user]/message:bg-muted': true
          }
        )}
      >
        <div className="ring-border flex size-8 shrink-0 items-center justify-center rounded-full ring-1">
          <SparklesIcon size={14} />
        </div>

        <div className="flex w-full flex-col gap-2">
          <div className="text-muted-foreground flex flex-col gap-4">Thinking...</div>
        </div>
      </div>
    </motion.div>
  )
}
