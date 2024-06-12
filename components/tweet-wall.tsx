"use client";
import React from "react";
import { Separator } from "@/components/ui/separator";
import { TweetGrid } from "@/components//ui/tweet-grid";
import { FaXTwitter } from "react-icons/fa6";
import Link from "next/link";

// Grab tweet ids
const Tweets = [
  "1792799502149267579",
  "1767181276640145553",
  "1800424289692528869",
  "1765036184323989566",
  "1798807748697788684",
];

export default function TweetWall() {
  return (
    <>
      <div className="flex flex-col items-center justify-center max-w-5xl mx-auto px-8 py-8">
        <Separator />
        <h1 className="text-xl text-center text-sky-500 font-normal mt-8 mb-1 uppercase">
          <FaXTwitter className="h-5 w-5 mb-1 mr-1 inline-block" />
          Tweets Wall
        </h1>
        <h3 className="text-lg text-center text-gray-300 font-normal mt-4">
          Recent Tweets from and featuring{" "}
          <span className="text-sky-300 hover:underline">
            <Link href={"https://twitter.com/rohanjhaldiyal"} target="_blank">
              @rohanjhaldiyal
            </Link>
          </span>{" "}
        </h3>
        <TweetGrid className="py-4" tweets={Tweets} />
      </div>
    </>
  );
}
