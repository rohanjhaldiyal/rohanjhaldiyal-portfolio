"use client";
import React, { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  GitHubLogoIcon,
  ExternalLinkIcon,
  ArrowRightIcon,
} from "@radix-ui/react-icons";
import { FaXTwitter } from "react-icons/fa6";
import { Separator } from "@/components/ui/separator";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";

export default function Projects() {
  const [projects, setProjects] = useState(true);
  return (
    <>
      <div className="flex flex-col items-center justify-center max-w-5xl mx-auto px-8">
        <Separator />
        <h1 className="text-xl text-center text-sky-500 font-normal mt-8 mb-4 uppercase">
          Projects
        </h1>
        <div className="flex flex-row gap-2">
          <Button
            size="default"
            variant="ghost"
            className="hover:text-sky-400 hover:underline focus:text-sky-300 transition-colors"
            onClick={() => setProjects(true)}
          >
            Open Source Projects
          </Button>
          <Button
            size="default"
            variant="ghost"
            className="hover:text-sky-400 hover:underline focus:text-sky-300 transition-colors"
            onClick={() => setProjects(false)}
          >
            Freelance Projects
          </Button>
        </div>
        {projects ? (
          <Carousel
            className="w-full max-w-5xl mb-4"
            opts={{
              align: "start",
              loop: true,
            }}
          >
            <CarouselContent>
              <CarouselItem>
                <div className="p-1">
                  <Card>
                    <CardContent className="flex aspect-video items-center justify-center p-6">
                      <div className="flex flex-col-reverse md:flex-row items-center justify-center">
                        <div className="flex flex-col items-start justify-center">
                          <h1 className="text-4xl text-sky-400 font-semibold">
                            Sticky
                          </h1>
                          <p className="text-lg text-gray-200 font-normal mt-4">
                            Post-it notes application made using Next.js,
                            Typescript, tailwindcss and postgresql
                          </p>
                          <div className="mt-2">
                            <Link
                              href="https://github.com/rohanjhaldiyal/sticky"
                              target="_blank"
                            >
                              <Button size="default" variant="ghost">
                                <GitHubLogoIcon className="h-5 w-5 mr-2" />
                                Github
                              </Button>
                            </Link>
                            <Link
                              href="https://sticky-pi.vercel.app/"
                              target="_blank"
                            >
                              <Button size="default" variant="ghost">
                                <ExternalLinkIcon className="h-5 w-5 mr-2" />
                                Live Demo
                              </Button>
                            </Link>
                          </div>
                        </div>
                        <div>
                          <Image
                            src="/projects/sticky.png"
                            alt="t3-gallery"
                            height={400}
                            width={400}
                          ></Image>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
              <CarouselItem>
                <div className="p-1">
                  <Card>
                    <CardContent className="flex aspect-video items-center justify-center p-6">
                      <div className="flex flex-col-reverse md:flex-row items-center justify-center">
                        <div className="flex flex-col items-start justify-center">
                          <h1 className="text-4xl text-sky-400 font-semibold">
                            Catppuccin Template
                          </h1>
                          <p className="text-lg text-gray-200 font-normal mt-4">
                            A Catppuccin Mocha themed open-source portfolio
                            template made using Next.js and tailwindcss.
                          </p>
                          <div className="mt-2">
                            <Link
                              href="https://github.com/rohanjhaldiyal/catppuccin-template"
                              target="_blank"
                            >
                              <Button size="default" variant="ghost">
                                <GitHubLogoIcon className="h-5 w-5 mr-2" />
                                Github
                              </Button>
                            </Link>
                            <Link
                              href="https://catppuccin-template.vercel.app/"
                              target="_blank"
                            >
                              <Button size="default" variant="ghost">
                                <ExternalLinkIcon className="h-5 w-5 mr-2" />
                                Live Demo
                              </Button>
                            </Link>
                          </div>
                        </div>
                        <div>
                          <Image
                            src="/projects/catppuccin.png"
                            alt="t3-gallery"
                            height={400}
                            width={400}
                          ></Image>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
              <CarouselItem>
                <div className="p-1">
                  <Card>
                    <CardContent className="flex aspect-video items-center justify-center p-6">
                      <div className="flex flex-col-reverse md:flex-row items-center justify-center">
                        <div className="flex flex-col items-start justify-center">
                          <h1 className="text-4xl text-sky-400 font-semibold">
                            t3-gallery
                          </h1>
                          <p className="text-lg text-gray-200 font-normal mt-4">
                            A full stack gallery application using Next.js,
                            Uploadthing, Drizzle, Postgresql.
                          </p>
                          <div className="mt-2">
                            <Link
                              href="https://github.com/rohanjhaldiyal/t3gallery"
                              target="_blank"
                            >
                              <Button size="default" variant="ghost">
                                <GitHubLogoIcon className="h-5 w-5 mr-2" />
                                Github
                              </Button>
                            </Link>
                            <Link
                              href="https://t3gallery-steel-kappa.vercel.app/"
                              target="_blank"
                            >
                              <Button size="default" variant="ghost">
                                <ExternalLinkIcon className="h-5 w-5 mr-2" />
                                Live Demo
                              </Button>
                            </Link>
                          </div>
                        </div>
                        <div>
                          <Image
                            src="/projects/t3-gallery.png"
                            alt="t3-gallery"
                            height={400}
                            width={400}
                          ></Image>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
              <CarouselItem>
                <div className="p-1">
                  <Card>
                    <CardContent className="flex aspect-video items-center justify-center p-6">
                      <div className="flex flex-col-reverse md:flex-row items-center justify-center">
                        <div className="flex flex-col items-start justify-center">
                          <h1 className="text-4xl text-sky-400 font-semibold">
                            AI Image Generator App
                          </h1>
                          <p className="text-lg text-gray-200 font-normal mt-4">
                            An AI image generator application using Next.js,
                            Hono and Cloudflare Workers.
                          </p>
                          <div className="mt-2">
                            <Link
                              href="https://github.com/rohanjhaldiyal/image-generator"
                              target="_blank"
                            >
                              <Button size="default" variant="ghost">
                                <GitHubLogoIcon className="h-5 w-5 mr-2" />
                                Github
                              </Button>
                            </Link>
                            <Link
                              href="https://image-generator-beryl-eta.vercel.app/"
                              target="_blank"
                            >
                              <Button size="default" variant="ghost">
                                <ExternalLinkIcon className="h-5 w-5 mr-2" />
                                Live Demo
                              </Button>
                            </Link>
                          </div>
                        </div>
                        <div>
                          <Image
                            src="/projects/image-generator.png"
                            alt="t3-gallery"
                            height={400}
                            width={400}
                          ></Image>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
              <CarouselItem>
                <div className="p-1">
                  <Card>
                    <CardContent className="flex aspect-video items-center justify-center p-6">
                      <div className="flex flex-col-reverse md:flex-row items-center justify-center">
                        <div className="flex flex-col items-start justify-center">
                          <h1 className="text-4xl text-sky-400 font-semibold">
                            Next.js + Appwrite
                          </h1>
                          <p className="text-lg text-gray-200 font-normal mt-4">
                            A simple blog application using Next.js and
                            Appwrite.
                          </p>
                          <div className="mt-2">
                            <Link
                              href="https://github.com/rohanjhaldiyal/nextjs-appwrite"
                              target="_blank"
                            >
                              <Button size="default" variant="ghost">
                                <GitHubLogoIcon className="h-5 w-5 mr-2" />
                                Github
                              </Button>
                            </Link>
                            <Link
                              href="https://nextjs-appwrite-six.vercel.app/"
                              target="_blank"
                            >
                              <Button size="default" variant="ghost">
                                <ExternalLinkIcon className="h-5 w-5 mr-2" />
                                Live Demo
                              </Button>
                            </Link>
                          </div>
                        </div>
                        <div>
                          <Image
                            src="/projects/NextjsAppwrite.png"
                            alt="NextjsAppwrite"
                            height={400}
                            width={400}
                          ></Image>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
              <CarouselItem>
                <div className="p-1">
                  <Card>
                    <CardContent className="flex aspect-video items-center justify-center p-6">
                      <div className="flex flex-col-reverse md:flex-row items-center justify-center">
                        <div className="flex flex-col items-start justify-center">
                          <h1 className="text-4xl text-sky-400 font-semibold">
                            Next.js + NextAuth
                          </h1>
                          <p className="text-lg text-gray-200 font-normal mt-4">
                            A simple user-authentication application using
                            Next.js.
                          </p>
                          <div className="mt-2">
                            <Link
                              href="https://github.com/rohanjhaldiyal/nextjs-auth"
                              target="_blank"
                            >
                              <Button size="default" variant="ghost">
                                <GitHubLogoIcon className="h-5 w-5 mr-2" />
                                Github
                              </Button>
                            </Link>
                            <Link
                              href="https://nextjs-auth-seven-cyan.vercel.app/"
                              target="_blank"
                            >
                              <Button size="default" variant="ghost">
                                <ExternalLinkIcon className="h-5 w-5 mr-2" />
                                Live Demo
                              </Button>
                            </Link>
                          </div>
                        </div>
                        <div>
                          <Image
                            src="/projects/NextjsAuth.png"
                            alt="NextjsAuth"
                            height={400}
                            width={400}
                          ></Image>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
              <CarouselItem>
                <div className="p-1">
                  <Card>
                    <CardContent className="flex aspect-video items-center justify-center p-6">
                      <div className="flex flex-col-reverse md:flex-row items-center justify-center">
                        <div className="flex flex-col items-start justify-center">
                          <h1 className="text-4xl text-sky-400 font-semibold">
                            Netflix Clone
                          </h1>
                          <p className="text-lg text-gray-200 font-normal mt-4">
                            Netflix landing page made using HTML and CSS.
                          </p>
                          <div className="mt-2">
                            <Link
                              href="https://github.com/rohanjhaldiyal/netflix-clone"
                              target="_blank"
                            >
                              <Button size="default" variant="ghost">
                                <GitHubLogoIcon className="h-5 w-5 mr-2" />
                                Github
                              </Button>
                            </Link>
                            <Link
                              href="https://rohanjhaldiyal.github.io/netflix-clone/"
                              target="_blank"
                            >
                              <Button size="default" variant="ghost">
                                <ExternalLinkIcon className="h-5 w-5 mr-2" />
                                Live Demo
                              </Button>
                            </Link>
                          </div>
                        </div>
                        <div>
                          <Image
                            src="/projects/Netflix.png"
                            alt="Netflix"
                            height={400}
                            width={400}
                          ></Image>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
              <CarouselItem>
                <div className="p-1">
                  <Card>
                    <CardContent className="flex aspect-video items-center justify-center p-6">
                      <div className="flex flex-col-reverse md:flex-row items-center justify-center">
                        <div className="flex flex-col items-start justify-center">
                          <h1 className="text-4xl text-sky-400 font-semibold">
                            Rock-Paper-Scissors
                          </h1>
                          <p className="text-lg text-gray-200 font-normal mt-4">
                            A simple Rock Paper Scissors game made using HTML,
                            CSS and JavaScript.
                          </p>
                          <div className="mt-2">
                            <Link
                              href="https://github.com/rohanjhaldiyal/Rock-Paper-Scissors"
                              target="_blank"
                            >
                              <Button size="default" variant="ghost">
                                <GitHubLogoIcon className="h-5 w-5 mr-2" />
                                Github
                              </Button>
                            </Link>
                            <Link
                              href="https://rohanjhaldiyal.github.io/Rock-Paper-Scissors/"
                              target="_blank"
                            >
                              <Button size="default" variant="ghost">
                                <ExternalLinkIcon className="h-5 w-5 mr-2" />
                                Live Demo
                              </Button>
                            </Link>
                          </div>
                        </div>
                        <div>
                          <Image
                            src="/projects/RPS.png"
                            alt="Rock-Paper-Scissors"
                            height={400}
                            width={400}
                          ></Image>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            </CarouselContent>
            <div className="hidden lg:block">
              <CarouselPrevious />
              <CarouselNext />
            </div>
          </Carousel>
        ) : (
          <Carousel
            className="w-full max-w-5xl mb-4"
            opts={{
              align: "start",
              loop: true,
            }}
          >
            <CarouselContent>
              <CarouselItem>
                <div className="p-1">
                  <Card>
                    <CardContent className="flex aspect-video items-center justify-center p-6">
                      <div className="flex flex-col-reverse md:flex-row items-center justify-center">
                        <div className="flex flex-col items-start justify-center">
                          <h1 className="text-4xl text-sky-400 font-semibold">
                            Sushant Bhonde Portfolio
                          </h1>
                          <p className="text-lg text-gray-200 font-normal mt-4">
                            Professional portfolio website for Sushant Bhonde, a
                            Technical Designer.
                          </p>
                          <div className="mt-2">
                            <Link
                              href="https://twitter.com/almostblakbabu/status/1765036184323989566"
                              target="_blank"
                            >
                              <Button size="default" variant="ghost">
                                <FaXTwitter className="h-5 w-5 mr-2" />
                                Testimonial
                              </Button>
                            </Link>
                            <Link
                              href="https://sushantbhonde.vercel.app/"
                              target="_blank"
                            >
                              <Button size="default" variant="ghost">
                                <ExternalLinkIcon className="h-5 w-5 mr-2" />
                                Live Demo
                              </Button>
                            </Link>
                          </div>
                        </div>
                        <div>
                          <Image
                            src="/projects/SushantBhonde.png"
                            alt="Portfolio"
                            height={400}
                            width={400}
                          ></Image>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
              <CarouselItem>
                <div className="p-1">
                  <Card>
                    <CardContent className="flex aspect-video items-center justify-center p-6">
                      <div className="flex flex-col-reverse md:flex-row items-center justify-center">
                        <div className="flex flex-col items-start justify-center">
                          <h1 className="text-4xl text-sky-400 font-semibold">
                            RATs Solutions
                          </h1>
                          <p className="text-lg text-gray-200 font-normal mt-4">
                            Professional portfolio website for my own agency
                            RATs Solutions.
                          </p>
                          <div className="mt-2">
                            <Link
                              href="https://rats-website.vercel.app/"
                              target="_blank"
                            >
                              <Button size="default" variant="ghost">
                                <ExternalLinkIcon className="h-5 w-5 mr-2" />
                                Live Demo
                              </Button>
                            </Link>
                          </div>
                        </div>
                        <div>
                          <Image
                            src="/projects/RATs.png"
                            alt="NextjsAuth"
                            height={400}
                            width={400}
                          ></Image>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            </CarouselContent>
            <div className="hidden lg:block">
              <CarouselPrevious />
              <CarouselNext />
            </div>
          </Carousel>
        )}
        <div className="text-center block md:hidden p-0 mb-4">
          Swipe to view <ArrowRightIcon className="h-5 w-5 inline-block" />
        </div>
      </div>
    </>
  );
}
