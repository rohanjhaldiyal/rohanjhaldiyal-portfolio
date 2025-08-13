import type React from "react";
import { Card, CardContent } from "@/components/ui/card";

interface WorkCardProps {
  company: string;
  role: string;
  location: string;
  type: string;
  startDate: string;
  endDate: string;
  description: string;
  icon?: React.ReactNode;
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
      <CardContent className="p-4 sm:p-6">
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
          <div className="flex items-start gap-3 sm:gap-4 flex-1">
            {/* Icon */}
            <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-lg flex items-center justify-center">
              {icon || (
                <svg
                  className="w-5 h-5 sm:w-6 sm:h-6 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0L19.2 12l-4.6-4.6L16 6l6 6-6 6-1.4-1.4z" />
                </svg>
              )}
            </div>

            {/* Content */}
            <div className="flex-1 min-w-0">
              <h3 className="text-lg sm:text-xl font-semibold text-sky-400 mb-1 break-words">
                {role} | {company}
              </h3>
              <p className="text-sm sm:text-base text-sky-300 mb-2 sm:mb-3">
                {location} · {type}
              </p>
              <p className="text-sm sm:text-base text-gray-200 leading-relaxed">
                {description}
              </p>
            </div>
          </div>

          {/* Date */}
          <div className="flex-shrink-0 sm:text-right">
            <span className="text-gray-400 text-xs sm:text-sm block">
              {startDate} - {endDate}
            </span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
