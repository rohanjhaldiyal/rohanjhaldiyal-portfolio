import { HoverEffect } from "@/components/ui/card-hover-effect";
import { Separator } from "@/components/ui/separator";
import IconCloud from "@/components/ui/icon-cloud";

const slugs = [
  "typescript",
  "javascript",
  "dart",
  "java",
  "react",
  "flutter",
  "android",
  "html5",
  "css3",
  "nodedotjs",
  "express",
  "nextdotjs",
  "prisma",
  "amazonaws",
  "postgresql",
  "firebase",
  "nginx",
  "vercel",
  "testinglibrary",
  "jest",
  "cypress",
  "docker",
  "git",
  "jira",
  "github",
  "gitlab",
  "visualstudiocode",
  "androidstudio",
  "sonarqube",
  "figma",
];

export default function Skills() {
  return (
    <div className="max-w-5xl mx-auto px-8">
      <Separator />
      <h1 className="text-xl text-center text-sky-500 font-normal mt-8 uppercase">
        Tech Stack
      </h1>
      <div className="relative flex h-full w-full max-w-[32rem] items-center justify-center overflow-hidden px-20 mx-auto">
        <IconCloud iconSlugs={slugs} />
      </div>
      <h3 className="text-lg text-center text-gray-300 font-normal mt-4">
        Expertise in{" "}
        <span className="text-sky-300">
          Most Modern Technologies & Frameworks
        </span>{" "}
        including but not limited to :-
      </h3>
      <HoverEffect items={projects} />
    </div>
  );
}
export const projects = [
  {
    title: "Next.js",
    description:
      "Used by some of the world's largest companies, Next.js enables you to create high-quality web applications with the power of React components.",
    link: "https://nextjs.org",
  },
  {
    title: "TypeScript",
    description:
      "TypeScript is a strongly typed programming language that builds on JavaScript, giving you better tooling at any scale.",
    link: "https://www.typescriptlang.org/",
  },
  {
    title: "tailwindcss",
    description:
      "A utility-first CSS framework packed with classes like flex, pt-4, text-center and rotate-90 that can be composed to build any design, directly in your markup.",
    link: "https://tailwindcss.com/",
  },
  {
    title: "Vercel",
    description:
      "Vercel is the Frontend Cloud. Build, scale, and secure a faster, personalized web.",
    link: "https://vercel.com/",
  },
  {
    title: "Node.js",
    description:
      "Node.js® is an open-source, cross-platform JavaScript runtime environment.",
    link: "https://nodejs.org/en",
  },
  {
    title: "Prisma",
    description:
      "Prisma provides the best experience for your team to work and interact with databases. Build your application, optimize to make everything run smoothly, and grow with your users and requirements.",
    link: "https://www.prisma.io/",
  },
];
