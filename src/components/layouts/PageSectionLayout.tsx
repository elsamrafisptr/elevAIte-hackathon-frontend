import { ReactNode } from 'react'

const PageSectionLayout = ({ children }: { children: ReactNode }) => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      {children}
      <div className="flex items-center justify-center pt-8 pb-28">Back to the top</div>
    </section>
  )
}

export default PageSectionLayout
