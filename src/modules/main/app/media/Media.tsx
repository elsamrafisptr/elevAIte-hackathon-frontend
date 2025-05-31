import Headline from './sections/Headline'
import LatestBlog from './sections/LatestBlog'
import LatestPost from './sections/LatestPost'
import LatestVideo from './sections/LatestVideo'

const Media = () => {
  return (
    <section className="flex min-h-screen w-full flex-col gap-0 bg-slate-50">
      <Headline />
      <LatestPost />
      <LatestBlog />
      <LatestVideo />
    </section>
  )
}

export default Media
