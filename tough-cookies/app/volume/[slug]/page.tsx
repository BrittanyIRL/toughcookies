// { [k: number]: string }[] | false

"use client";
import Pagination from "@/components/pagination";
import Image from "next/image";
import { useState } from "react";

const volumeOne: { [k: number]: string } = {
  1: "one",
  2: "two",
  3: "three",
};

const volumes = {
  one: volumeOne,
};

export default function Home({ params }: { params: { slug?: string } }) {
  if (!params.slug) {
    return <p>nah</p>;
  }
  // @ts-expect-error fix this later
  const requestedVolume = params.slug && volumes?.[params.slug];

  if (!requestedVolume) {
    return <p>nope</p>;
  }

  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Object.keys(requestedVolume).length;

  const onForward = () => {
    setCurrentPage((prev) => prev + 1);
  };

  const onBackward = () => {
    setCurrentPage((prev) => prev - 1);
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <>
        {totalPages}
        {requestedVolume?.[currentPage]}
        <Pagination
          onForward={onForward}
          onBackward={onBackward}
          currentPage={currentPage}
          totalPages={totalPages}
        />
      </>
    </main>
  );
}
