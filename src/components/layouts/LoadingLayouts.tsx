import { Shield } from 'lucide-react'

const LoadingLayouts = () => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-slate-50 p-4">
      <section className="w-full max-w-md space-y-6 text-center">
        <div className="flex justify-center">
          <div className="rounded-full bg-white p-4 shadow-md/5">
            <Shield className="h-16 w-16 text-blue-600" />
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <h1 className="text-2xl font-bold text-slate-900">
            Loading your recovery journey...
          </h1>
          <p className="text-sm text-gray-500">
            &quot;Every moment of patience brings you closer to lasting change.&quot;
          </p>
        </div>

        <div className="mt-8 flex justify-center">
          <div className="flex space-x-2">
            <div
              className="h-3 w-3 animate-bounce rounded-full bg-slate-400"
              style={{ animationDelay: '0ms' }}
            ></div>
            <div
              className="h-3 w-3 animate-bounce rounded-full bg-slate-400"
              style={{ animationDelay: '150ms' }}
            ></div>
            <div
              className="h-3 w-3 animate-bounce rounded-full bg-slate-400"
              style={{ animationDelay: '300ms' }}
            ></div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default LoadingLayouts
