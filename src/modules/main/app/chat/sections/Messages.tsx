import { cn } from '@/utils'

const Messages = () => {
  return (
    <div className="group/message mx-auto w-full max-w-3xl px-4">
      <div
        className={cn(
          'flex w-full gap-4 group-data-[role=user]/message:ml-auto group-data-[role=user]/message:max-w-2xl'
        )}
      ></div>
    </div>
  )
}

export default Messages
