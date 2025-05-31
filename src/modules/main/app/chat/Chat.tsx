import Artifact from './sections/Artifact'
import Header from './sections/Header'
import Messages from './sections/Messages'
import MultimodalInput from './sections/MultimodalInput'

const Chat = () => {
  return (
    <section className="flex min-h-dvh w-full flex-col gap-0 bg-slate-50">
      <Header />
      <Messages />
      <MultimodalInput />
      <Artifact />
    </section>
  )
}

export default Chat
