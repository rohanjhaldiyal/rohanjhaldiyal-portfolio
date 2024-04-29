import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const Socials = () => {
  return (
    <div className="flex flex-col sm:flex-row w-full h-max items-center justify-center mt-4 gap-2">
      <Link href="mailto:rohanjhaldiyal@gmail.com" target="_blank">
        <Button size="default" variant="ghost">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="24"
            height="24"
            viewBox="0 0 48 48"
          >
            <path
              fill="#4caf50"
              d="M45,16.2l-5,2.75l-5,4.75L35,40h7c1.657,0,3-1.343,3-3V16.2z"
            ></path>
            <path
              fill="#1e88e5"
              d="M3,16.2l3.614,1.71L13,23.7V40H6c-1.657,0-3-1.343-3-3V16.2z"
            ></path>
            <polygon
              fill="#e53935"
              points="35,11.2 24,19.45 13,11.2 12,17 13,23.7 24,31.95 35,23.7 36,17"
            ></polygon>
            <path
              fill="#c62828"
              d="M3,12.298V16.2l10,7.5V11.2L9.876,8.859C9.132,8.301,8.228,8,7.298,8h0C4.924,8,3,9.924,3,12.298z"
            ></path>
            <path
              fill="#fbc02d"
              d="M45,12.298V16.2l-10,7.5V11.2l3.124-2.341C38.868,8.301,39.772,8,40.702,8h0 C43.076,8,45,9.924,45,12.298z"
            ></path>
          </svg>
          <span className="font-normal text-sm transition-colors ml-2 hover:underline">
            rohanjhaldiyal@gmail.com
          </span>
        </Button>
      </Link>
      <Link href="https://t.me/rohanjhaldiyal" target="_blank">
        <Button size="default" variant="ghost">
          <svg
            viewBox="0 0 256 256"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            preserveAspectRatio="xMidYMid"
          >
            <defs>
              <linearGradient id="a" x1="50%" x2="50%" y1="0%" y2="100%">
                <stop offset="0%" stop-color="#2AABEE" />
                <stop offset="100%" stop-color="#229ED9" />
              </linearGradient>
            </defs>
            <path
              fill="url(#a)"
              d="M128 0C94.06 0 61.48 13.494 37.5 37.49A128.038 128.038 0 0 0 0 128c0 33.934 13.5 66.514 37.5 90.51C61.48 242.506 94.06 256 128 256s66.52-13.494 90.5-37.49c24-23.996 37.5-56.576 37.5-90.51 0-33.934-13.5-66.514-37.5-90.51C194.52 13.494 161.94 0 128 0Z"
            />
            <path
              fill="#FFF"
              d="M57.94 126.648c37.32-16.256 62.2-26.974 74.64-32.152 35.56-14.786 42.94-17.354 47.76-17.441 1.06-.017 3.42.245 4.96 1.49 1.28 1.05 1.64 2.47 1.82 3.467.16.996.38 3.266.2 5.038-1.92 20.24-10.26 69.356-14.5 92.026-1.78 9.592-5.32 12.808-8.74 13.122-7.44.684-13.08-4.912-20.28-9.63-11.26-7.386-17.62-11.982-28.56-19.188-12.64-8.328-4.44-12.906 2.76-20.386 1.88-1.958 34.64-31.748 35.26-34.45.08-.338.16-1.598-.6-2.262-.74-.666-1.84-.438-2.64-.258-1.14.256-19.12 12.152-54 35.686-5.1 3.508-9.72 5.218-13.88 5.128-4.56-.098-13.36-2.584-19.9-4.708-8-2.606-14.38-3.984-13.82-8.41.28-2.304 3.46-4.662 9.52-7.072Z"
            />
          </svg>
          <span className="font-normal text-sm transition-colors ml-2 hover:underline">
            @rohanjhaldiyal
          </span>
        </Button>
      </Link>
    </div>
  );
};

export default Socials;
