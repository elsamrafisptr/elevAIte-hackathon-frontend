'use client'

import { Check } from 'lucide-react'

import { cn } from '@/lib/utils'

interface ProgressIndicatorProps {
  currentStep: number
  totalSteps: number
  steps: Array<{
    id: number
    title: string
    description: string
  }>
}

export function ProgressIndicator({
  currentStep,
  totalSteps,
  steps
}: ProgressIndicatorProps) {
  return (
    <div className="mb-8 w-full">
      {/* Progress Bar */}
      <div className="relative mb-6">
        <div className="flex items-center justify-between">
          {steps.map((step, index) => {
            const isCompleted = step.id < currentStep
            const isActive = step.id === currentStep

            return (
              <div key={step.id} className="relative flex flex-col items-center">
                {/* Step Circle */}
                <div
                  className={cn(
                    'z-10 flex h-10 w-10 items-center justify-center rounded-full text-sm font-semibold transition-all duration-300',
                    isCompleted && 'bg-green-600 text-white',
                    isActive && 'bg-blue-600 text-white ring-4 ring-blue-100',
                    !isCompleted && !isActive && 'bg-gray-200 text-gray-600'
                  )}
                  aria-label={`Step ${step.id}: ${step.title}`}
                >
                  {isCompleted ? <Check className="h-5 w-5" /> : step.id}
                </div>

                {/* Step Label */}
                <div className="mt-2 max-w-24 text-center">
                  <p
                    className={cn(
                      'text-xs font-medium',
                      isActive && 'text-blue-600',
                      isCompleted && 'text-green-600',
                      !isCompleted && !isActive && 'text-gray-500'
                    )}
                  >
                    {step.title}
                  </p>
                </div>

                {/* Connecting Line */}
                {index < steps.length - 1 && (
                  <div
                    className={cn(
                      'absolute top-5 left-10 h-0.5 transition-all duration-300',
                      'w-[calc(100vw/4-2.5rem)] max-w-32',
                      isCompleted ? 'bg-green-600' : 'bg-gray-200'
                    )}
                    style={{
                      width: `calc(${100 / (steps.length - 1)}vw - 2.5rem)`,
                      maxWidth: '8rem'
                    }}
                  />
                )}
              </div>
            )
          })}
        </div>
      </div>

      {/* Progress Percentage */}
      <div className="h-2 w-full rounded-full bg-gray-200">
        <div
          className="h-2 rounded-full bg-blue-600 transition-all duration-500 ease-out"
          style={{ width: `${(currentStep / totalSteps) * 100}%` }}
          role="progressbar"
          aria-valuenow={currentStep}
          aria-valuemin={1}
          aria-valuemax={totalSteps}
          aria-label={`Progress: Step ${currentStep} of ${totalSteps}`}
        />
      </div>
    </div>
  )
}
