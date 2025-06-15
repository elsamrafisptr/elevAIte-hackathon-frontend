import { Calendar, LayoutDashboard, Shield, Users } from 'lucide-react'

import { Card, CardContent } from '@/components/ui/card'

const features = [
  {
    icon: Calendar,
    href: '/dashboard/plans',
    title: 'Tantangan Harian',
    description: 'Track your progress with daily mood and craving logs',
    color: 'bg-blue-500'
  },
  {
    icon: Users,
    title: 'Dukungan Pendampingan',
    href: '/app/chat',
    description: 'Connect with others on the same journey',
    color: 'bg-orange-500'
  },
  {
    icon: Shield,
    title: 'Lingkungan Terlindungi',
    href: '/app/media',
    description: 'Set up barriers to prevent impulsive gambling',
    color: 'bg-purple-500'
  },
  {
    icon: LayoutDashboard,
    title: 'Fitur Lainnya',
    href: '',
    description: "See how much money you've saved by not gambling",
    color: 'bg-green-500'
  }
]

const Features = () => {
  return (
    <section className="px-5">
      <div className="grid grid-cols-4 gap-4">
        {features.map((feature, index) => (
          <Card
            key={index}
            className="aspect-square cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
          >
            <CardContent className="">
              <div className="flex flex-col items-center justify-center gap-2">
                <div
                  className={`rounded-full p-3 ${feature.color} flex flex-col items-center justify-center`}
                >
                  <feature.icon className="h-6 w-6 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="mb-2 text-center text-xs font-semibold text-gray-900">
                    {feature.title}
                  </h3>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}

export default Features
