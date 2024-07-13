import Link from "next/link";
import PoweredByVercel from "powered-by-vercel";
import { HeartIcon, GlobeIcon } from "@radix-ui/react-icons";

export default function Footer() {
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
            <HeartIcon className="text-red-600 h-5 w-5" />
            <span>on</span>
            <GlobeIcon className="text-blue-600 h-5 w-5" />
          </p>
          <p className="text-sm mt-4">© 2024. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
