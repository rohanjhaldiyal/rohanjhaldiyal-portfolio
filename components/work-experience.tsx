"use client";
import { Separator } from "@/components/ui/separator";
import WorkCard from "@/components/ui/workcard";

export default function WorkExperience() {
  const ratsIcon = (
    <svg
      width="180"
      height="181"
      viewBox="0 0 180 181"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_d_6_14)">
        <mask
          id="path-1-outside-1_6_14"
          maskUnits="userSpaceOnUse"
          x="1"
          y="0"
          width="172"
          height="173"
          fill="black"
        >
          <rect fill="white" x="1" width="172" height="173" />
          <path d="M101.707 14.4762C115.532 17.2798 128.268 23.9768 138.414 33.778C148.56 43.5792 155.693 56.0762 158.972 69.7964C162.252 83.5167 161.542 97.8885 156.925 111.218C152.308 124.548 143.977 136.281 132.914 145.034C121.851 153.786 108.517 159.194 94.4823 160.621C80.4478 162.047 66.298 159.432 53.7003 153.084C41.1025 146.736 30.5817 136.92 23.3774 124.791C16.1732 112.663 12.5859 98.7277 13.038 84.6281L53.3415 85.9206C53.1357 92.337 54.7683 98.6785 58.0468 104.198C61.3252 109.717 66.113 114.185 71.846 117.074C77.579 119.962 84.0182 121.152 90.405 120.503C96.7918 119.854 102.86 117.393 107.895 113.41C112.929 109.427 116.72 104.087 118.821 98.0213C120.922 91.9551 121.246 85.4148 119.753 79.171C118.261 72.9272 115.015 67.2401 110.397 62.7798C105.78 58.3195 99.9845 55.2719 93.6929 53.996L101.707 14.4762Z" />
        </mask>
        <path
          d="M101.707 14.4762C115.532 17.2798 128.268 23.9768 138.414 33.778C148.56 43.5792 155.693 56.0762 158.972 69.7964C162.252 83.5167 161.542 97.8885 156.925 111.218C152.308 124.548 143.977 136.281 132.914 145.034C121.851 153.786 108.517 159.194 94.4823 160.621C80.4478 162.047 66.298 159.432 53.7003 153.084C41.1025 146.736 30.5817 136.92 23.3774 124.791C16.1732 112.663 12.5859 98.7277 13.038 84.6281L53.3415 85.9206C53.1357 92.337 54.7683 98.6785 58.0468 104.198C61.3252 109.717 66.113 114.185 71.846 117.074C77.579 119.962 84.0182 121.152 90.405 120.503C96.7918 119.854 102.86 117.393 107.895 113.41C112.929 109.427 116.72 104.087 118.821 98.0213C120.922 91.9551 121.246 85.4148 119.753 79.171C118.261 72.9272 115.015 67.2401 110.397 62.7798C105.78 58.3195 99.9845 55.2719 93.6929 53.996L101.707 14.4762Z"
          fill="#008080"
        />
        <path
          d="M101.707 14.4762C115.532 17.2798 128.268 23.9768 138.414 33.778C148.56 43.5792 155.693 56.0762 158.972 69.7964C162.252 83.5167 161.542 97.8885 156.925 111.218C152.308 124.548 143.977 136.281 132.914 145.034C121.851 153.786 108.517 159.194 94.4823 160.621C80.4478 162.047 66.298 159.432 53.7003 153.084C41.1025 146.736 30.5817 136.92 23.3774 124.791C16.1732 112.663 12.5859 98.7277 13.038 84.6281L53.3415 85.9206C53.1357 92.337 54.7683 98.6785 58.0468 104.198C61.3252 109.717 66.113 114.185 71.846 117.074C77.579 119.962 84.0182 121.152 90.405 120.503C96.7918 119.854 102.86 117.393 107.895 113.41C112.929 109.427 116.72 104.087 118.821 98.0213C120.922 91.9551 121.246 85.4148 119.753 79.171C118.261 72.9272 115.015 67.2401 110.397 62.7798C105.78 58.3195 99.9845 55.2719 93.6929 53.996L101.707 14.4762Z"
          stroke="#EDEDED"
          strokeWidth="24"
          mask="url(#path-1-outside-1_6_14)"
        />
      </g>
      <defs>
        <filter
          id="filter0_d_6_14"
          x="-1.52588e-05"
          y="0.330647"
          width="180"
          height="180.669"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dx="3" dy="4" />
          <feGaussianBlur stdDeviation="2" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.35 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_6_14"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_6_14"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );

  const startupIcon = (
    <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2L13.09 8.26L22 9L13.09 9.74L12 16L10.91 9.74L2 9L10.91 8.26L12 2Z" />
    </svg>
  );

  const workExperiences = [
    {
      company: "RATs Solutions",
      role: "Full Stack Developer",
      location: "India",
      type: "Remote (Contract)",
      startDate: "Jan 2025",
      endDate: "Present",
      description:
        "Rapidly shipping MVPs for early-stage startup clients, crafting sleek, high-performance UIs and conversion-focused landing pages that accelerate product launches and growth.",
      icon: ratsIcon,
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center max-w-5xl mx-auto px-8">
      <Separator />
      <h1 className="text-xl text-center text-sky-500 font-normal mt-8 mb-4 uppercase">
        Work Experience
      </h1>
      <h3 className="text-lg text-center text-gray-300 font-normal mt-4 mb-8">
        My professional journey and{" "}
        <span className="text-sky-300">work experiences</span>
      </h3>

      <div className="w-full max-w-4xl">
        {workExperiences.map((experience, index) => (
          <WorkCard
            key={index}
            company={experience.company}
            role={experience.role}
            location={experience.location}
            type={experience.type}
            startDate={experience.startDate}
            endDate={experience.endDate}
            description={experience.description}
            icon={experience.icon} // Now passing the icon prop
          />
        ))}
      </div>
    </div>
  );
}
