import Features from './sections/Features'
import Headline from './sections/Headline'
import LatestMedia from './sections/LatestMedia'
import Statistic from './sections/Statistic'

const Homepage = () => {
  return (
    <section className="flex min-h-screen w-full flex-col gap-0 bg-slate-50">
      <Headline />
      <Statistic />
      <Features />
      <LatestMedia />
    </section>
  )
}

export default Homepage
