import Link from "next/link";
import { Button } from "@/components/ui/button";
import { GitHubLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons";
import { FaXTwitter } from "react-icons/fa6";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function Navbar() {
  return (
    <nav className="fixed inset-x-0 top-0 z-50 bg-white shadow-sm dark:bg-gray-950/90 w-full">
      <div className="w-full max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-14 items-center">
          <Link className="flex items-center" href="#">
            <Button size="default" variant="ghost">
              <Avatar className="mr-2">
                <AvatarImage
                  src="/rohanjhaldiyal.jpg"
                  alt="rohanjhaldiyal"
                />
                <AvatarFallback>RJ</AvatarFallback>
              </Avatar>
              <span className="font-medium text-md hover:underline">
                Rohan Jhaldiyal
              </span>
            </Button>
          </Link>
          <nav className="hidden md:flex gap-2 items-center">
            <Link
              className="font-medium flex items-center text-sm transition-colors"
              href="#Home"
            >
              <Button
                size="default"
                variant="ghost"
                className="hover:text-sky-400 hover:underline focus:text-sky-300 transition-colors"
              >
                Home
              </Button>
            </Link>
            <Link
              className="font-medium flex items-center text-sm transition-colors"
              href="#Skills"
            >
              <Button
                size="default"
                variant="ghost"
                className="hover:text-sky-400 hover:underline focus:text-sky-300 transition-colors"
              >
                Skills
              </Button>
            </Link>
            <Link
              className="font-medium flex items-center text-sm transition-colors"
              href="#Projects"
            >
              <Button
                size="default"
                variant="ghost"
                className="hover:text-sky-400 hover:underline focus:text-sky-300 transition-colors"
              >
                Projects
              </Button>
            </Link>
          </nav>
          <div className="flex items-center gap-2">
            <Link href="https://github.com/rohanjhaldiyal" target="_blank">
              <Button size="icon" variant="ghost">
                <GitHubLogoIcon className="h-5 w-5" />
              </Button>
            </Link>
            <Link href="https://twitter.com/rohanjhaldiyal" target="_blank">
              <Button size="icon" variant="ghost">
                <FaXTwitter className="h-5 w-5" />
              </Button>
            </Link>
            <Link href="https://linkedin.com/in/rohanjhaldiyal" target="_blank">
              <Button size="icon" variant="ghost">
                <LinkedInLogoIcon className="h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
