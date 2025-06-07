'use client'

import { useOnboarding } from '@/hooks'
import { AlertCircle, ChevronLeft, ChevronRight, Save } from 'lucide-react'

import { ProgressIndicator } from './sections/ProgressIndicator'
import { StepOne } from './sections/StepOneForm'

import PageSectionLayout from '@/components/layouts/PageSectionLayout'
import { Alert, AlertDescription } from '@/components/ui/alert'
import { Button } from '@/components/ui/button'

const steps = [
  { id: 1, title: 'Basic Info', description: 'Tell us about yourself' },
  { id: 2, title: 'Profile', description: 'Complete your profile' },
  { id: 3, title: 'Interests', description: 'What interests you?' },
  { id: 4, title: 'Preferences', description: 'Customize your experience' },
  { id: 5, title: 'Complete', description: "You're all set!" }
]

export default function OnBoarding() {
  const {
    currentStep,
    data,
    errors,
    isLoading,
    updateData,
    nextStep,
    prevStep,
    completeOnboarding,
    saveProgress
  } = useOnboarding()

  const handleComplete = async () => {
    const success = await completeOnboarding()
    if (success) {
      console.log('Onboarding completed successfully!')
    }
  }

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return <StepOne data={data} errors={errors} onUpdate={updateData} />
      //   case 2:
      //     return <StepTwo data={data} errors={errors} onUpdate={updateData} />
      //   case 3:
      //     return <StepThree data={data} errors={errors} onUpdate={updateData} />
      //   case 4:
      //     return <StepFour data={data} onUpdate={updateData} />
      //   case 5:
      //     return <StepFive data={data} isLoading={isLoading} />
      default:
        return null
    }
  }

  return (
    <PageSectionLayout>
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 px-4 py-8">
        <div className="mx-auto max-w-4xl">
          {/* Header */}
          <div className="mb-8 text-center">
            <h1 className="mb-2 text-3xl font-bold text-gray-900">
              Complete Your Setup
            </h1>
            <p className="text-gray-600">
              Let&apos;s personalize your experience in just a few steps
            </p>
          </div>

          {/* Progress Indicator */}
          <ProgressIndicator
            currentStep={currentStep}
            totalSteps={steps.length}
            steps={steps}
          />

          {/* Error Alert */}
          {Object.keys(errors).length > 0 && currentStep < 5 && (
            <Alert variant="destructive" className="mx-auto mb-6 max-w-2xl">
              <AlertCircle className="h-4 w-4" />
              <AlertDescription>
                Please fix the errors below before continuing.
              </AlertDescription>
            </Alert>
          )}

          {/* Step Content */}
          <div className="mb-8">{renderStep()}</div>

          {/* Navigation */}
          {currentStep < 5 && (
            <div className="mx-auto flex max-w-2xl items-center justify-between">
              <div className="flex items-center gap-3">
                {currentStep > 1 && (
                  <Button
                    variant="outline"
                    onClick={prevStep}
                    className="flex items-center gap-2"
                  >
                    <ChevronLeft className="h-4 w-4" />
                    Previous
                  </Button>
                )}
                <Button
                  variant="ghost"
                  onClick={saveProgress}
                  className="flex items-center gap-2 text-gray-600"
                >
                  <Save className="h-4 w-4" />
                  Save Progress
                </Button>
              </div>

              <div className="flex items-center gap-3">
                {currentStep < 4 ? (
                  <Button onClick={nextStep} className="flex items-center gap-2">
                    Continue
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                ) : (
                  <Button onClick={nextStep} className="flex items-center gap-2">
                    Review & Complete
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                )}
              </div>
            </div>
          )}

          {/* Complete Button */}
          {currentStep === 5 && !isLoading && (
            <div className="text-center">
              <Button
                onClick={handleComplete}
                size="lg"
                className="px-8"
                disabled={isLoading}
              >
                Get Started
              </Button>
            </div>
          )}
        </div>
      </div>
    </PageSectionLayout>
  )
}
