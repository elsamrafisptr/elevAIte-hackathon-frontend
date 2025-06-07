import { Message } from 'ai'
import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export const getBaseUrl = () => {
  if (process.env.NEXT_PUBLIC_APP_URL) {
    return process.env.NEXT_PUBLIC_APP_URL
  }

  if (
    process.env.VERCEL_ENV === 'production' &&
    process.env.VERCEL_PROJECT_PRODUCTION_URL
  ) {
    return `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
  }

  if (process.env.VERCEL_URL) {
    return `https://${process.env.VERCEL_URL}`
  }

  return 'http://localhost:3000'
}

export const getLocalStorage = (key: string) => {
  if (typeof window !== 'undefined') {
    return JSON.parse(localStorage.getItem(key) || '[]')
  }
  return []
}

export const sanitizeText = (text: string) => {
  return text.replace('<has_function_call>', '')
}

export const cn = (...inputs: ClassValue[]) => {
  return twMerge(clsx(inputs))
}

export function sanitizeUIMessages(messages: Array<Message>): Array<Message> {
  const messagesBySanitizedToolInvocations = messages.map(message => {
    if (message.role !== 'assistant') return message

    if (!message.toolInvocations) return message

    const toolResultIds: Array<string> = []

    for (const toolInvocation of message.toolInvocations) {
      if (toolInvocation.state === 'result') {
        toolResultIds.push(toolInvocation.toolCallId)
      }
    }

    const sanitizedToolInvocations = message.toolInvocations.filter(
      toolInvocation =>
        toolInvocation.state === 'result' ||
        toolResultIds.includes(toolInvocation.toolCallId)
    )

    return {
      ...message,
      toolInvocations: sanitizedToolInvocations
    }
  })

  return messagesBySanitizedToolInvocations.filter(
    message =>
      message.content.length > 0 ||
      (message.toolInvocations && message.toolInvocations.length > 0)
  )
}
