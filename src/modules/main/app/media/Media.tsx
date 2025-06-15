'use client'

import { motion } from 'motion/react'

import Headline from './sections/Headline'
import LatestBlog from './sections/LatestBlog'
import LatestPost from './sections/LatestPost'

import PageSectionLayout from '@/components/layouts/PageSectionLayout'

const Media = () => {
  const isMaintenance: Readonly<boolean> = true

  return (
    <PageSectionLayout>
      {isMaintenance && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-20 flex flex-col items-center justify-center bg-black/20 backdrop-blur-xs"
          aria-hidden="true"
        >
          <div className="flex w-fit flex-col items-center gap-2 rounded-lg bg-white p-6">
            <h1 className="text-center text-sm font-semibold">
              ⚠️ Maaf Halaman Masih Dalam Perbaikan ⚠️
            </h1>
            <p className="max-w-sm text-center text-sm">
              Mohon tunggu beberapa saat atau coba untuk mengakses halaman lainnya
              terlebih dahulu
            </p>
          </div>
        </motion.div>
      )}

      <div className="space-y-16">
        <Headline />
        <LatestBlog />
        <LatestPost />
      </div>
    </PageSectionLayout>
  )
}

export default Media
