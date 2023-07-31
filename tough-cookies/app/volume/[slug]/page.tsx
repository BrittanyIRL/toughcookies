// { [k: number]: string }[] | false

"use client";
import Pagination from "@/components/pagination";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const volumeOne: { [k: number]: string } = {
  1: "one",
  2: "two",
  3: "three",
};

const volumes = {
  one: volumeOne,
};

export default function Volume({ params }: { params: { slug?: string } }) {
  return (
    <main className="flex flex-col items-center overflow-hidden w-screen h-screen bg-[#8dbf41]">
      <h2 className="mt-12 text-6xl">Like come back soon, ya know</h2>
      <Link className="my-6 text-4xl text-[#0b85db] bg-[#3ec9b0] px-2" href="/">
        Go away, still cooking.
      </Link>
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/tJa0c8h7yVE"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    </main>
  );

  // if (!params.slug) {
  //   return <p>nah</p>;
  // }
  // // @ts-expect-error fix this later
  // const requestedVolume = params.slug && volumes?.[params.slug];

  // if (!requestedVolume) {
  //   return <p>nope</p>;
  // }

  // const [currentPage, setCurrentPage] = useState(1);
  // const totalPages = Object.keys(requestedVolume).length;

  // const onForward = () => {
  //   setCurrentPage((prev) => prev + 1);
  // };

  // const onBackward = () => {
  //   setCurrentPage((prev) => prev - 1);
  // };

  // return (
  //   <main className="flex min-h-screen flex-col items-center justify-between">
  //     <>
  //       {totalPages}
  //       {requestedVolume?.[currentPage]}
  //       <Pagination
  //         onForward={onForward}
  //         onBackward={onBackward}
  //         currentPage={currentPage}
  //         totalPages={totalPages}
  //       />
  //     </>
  //   </main>
  // );
}
