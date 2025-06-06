import Headline from './sections/Headline'
import LatestBlog from './sections/LatestBlog'
import LatestPost from './sections/LatestPost'
import LatestVideo from './sections/LatestVideo'

import PageSectionLayout from '@/components/layouts/PageSectionLayout'

const Media = () => {
  return (
    <PageSectionLayout>
      <div className="space-y-16">
        <Headline />
        <LatestBlog />
        <LatestPost />
        <LatestVideo />
      </div>
    </PageSectionLayout>
  )
}

export default Media
