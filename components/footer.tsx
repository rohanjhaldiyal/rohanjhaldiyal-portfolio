import Link from "next/link";
import { JSX, SVGProps } from "react";
import PoweredByVercel from "powered-by-vercel";

export default function Component() {
  return (
    <footer className="bg-white dark:bg-gray-950/90 text-white py-8">
      <div className="max-w-6xl mx-auto px-4 flex justify-between items-center">
        <div>
          <p className="font-bold text-lg mb-4">Links</p>
          <ul className="space-y-2">
            <li>
              <Link
                className="hover:text-gray-300"
                href="https://github.com/rohanjhaldiyal"
                target="_blank"
              >
                Github
              </Link>
            </li>
            <li>
              <Link
                className="hover:text-gray-300"
                href="https://twitter.com/rohanjhaldiyal"
                target="_blank"
              >
                Twitter
              </Link>
            </li>
            <li>
              <Link
                className="hover:text-gray-300"
                href="https://linkedin.com/in/rohanjhaldiyal"
                target="_blank"
              >
                LinkedIn
              </Link>
            </li>
          </ul>
        </div>
        <div className="text-center">
          <PoweredByVercel target="_blank" />
          <p className="flex items-center justify-center space-x-2 mt-4">
            <span>Made with</span>
            <HeartIcon className="text-red-600" />
            <span>on</span>
            <GlobeIcon className="text-blue-500" />
          </p>
          <p className="text-sm mt-4">© 2024. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

function GlobeIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <line x1="2" x2="22" y1="12" y2="12" />
      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
    </svg>
  );
}

function HeartIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
    </svg>
  );
}
