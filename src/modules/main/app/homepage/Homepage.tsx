'use client'

import Features from './sections/Features'
import Headline from './sections/Headline'
import LatestMedia from './sections/LatestMedia'
import Statistic from './sections/Statistic'

import PageSectionLayout from '@/components/layouts/PageSectionLayout'

export default function Homepage() {
  return (
    <PageSectionLayout>
      <div className="space-y-8">
        <Headline />
        <Statistic />
        <Features />
        <LatestMedia />
      </div>
    </PageSectionLayout>
  )
}
