import type React from "react"
import { Card, CardContent } from "@/components/ui/card"

interface WorkCardProps {
  company: string
  role: string
  location: string
  type: string
  startDate: string
  endDate: string
  description: string
  icon?: React.ReactNode
}

export default function WorkCard({
  company,
  role,
  location,
  type,
  startDate,
  endDate,
  description,
  icon,
}: WorkCardProps) {
  return (
    <Card className="w-full mb-4">
      <CardContent className="p-6">
        <div className="flex items-start justify-between">
          <div className="flex items-start gap-4">
            {/* Icon */}
            <div className="flex-shrink-0 w-12 h-12 rounded-lg flex items-center justify-center">
              {icon || (
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0L19.2 12l-4.6-4.6L16 6l6 6-6 6-1.4-1.4z" />
                </svg>
              )}
            </div>

            {/* Content */}
            <div className="flex-1">
              <h3 className="text-xl font-semibold text-sky-400 mb-1">
                {role} | {company}
              </h3>
              <p className="text-sky-300 mb-3">
                {location} · {type}
              </p>
              <p className="text-gray-200 leading-relaxed">{description}</p>
            </div>
          </div>

          {/* Date */}
          <div className="flex-shrink-0 text-right">
            <span className="text-gray-400 text-sm">
              {startDate} - {endDate}
            </span>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
