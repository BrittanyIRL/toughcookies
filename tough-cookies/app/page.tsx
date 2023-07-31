"use client";

import Image from "next/image";
import ToughCookie from "@/static/tough-cookie-frown.png";
import { DOMElement, useState } from "react";
import clsx from "clsx";
import Link from "next/link";

function getRandomInt(max: number) {
  return Math.floor(Math.random() * max);
}

export default function Home() {
  const availableWidth = window.innerWidth;
  const availableHeight = window.innerHeight;
  const moarCookie = ({ randomize }: { randomize?: boolean }) => {
    return (
      <Image
        key={`${getRandomInt(300)}_${getRandomInt(5000)}`}
        className={clsx([
          "motion-safe:animate-spin-slow absolute",
          randomize ? "h-auto absolute" : "top-0 bottom-0 left-0 right-0",
        ])}
        style={
          randomize
            ? {
                width: `${getRandomInt(availableWidth / 4)}px`,
                left: `${getRandomInt(availableWidth)}px`,
                top: `${getRandomInt(availableHeight)}px`,
              }
            : {
                width: "auto",
                height: "50%",
                margin: "auto",
              }
        }
        src={ToughCookie}
        alt="Freshly baked cookie with a chocolate chip frown and very large googly eyes"
      />
    );
  };

  const [cookies, setCookies] = useState([moarCookie({ randomize: false })]);

  const addMoarCookies = ({ quantity = 1 }: { quantity: number }) => {
    const newCookies = Array.from({ length: quantity }, () =>
      moarCookie({ randomize: true })
    );
    setCookies((existing) => [...existing, ...newCookies]);
  };
  return (
    <main className="overflow-hidden w-screen h-screen bg-[#8dbf41]">
      <>
        <header className="mx-6 absolute top-0">
          <div className="flex flex-col lg:flex-row lg:py-4">
            <h1 className="text-8xl text-[#d621eb] z-20 cursor-none">
              Tough Cookies
            </h1>
            <nav className="mx-6 my-12 md:my-6 lg:my-0 text-3xl">
              <ul className="flex flex-col justify-start items-start gap-y-5">
                <li className="z-10 text-[#0b85db] bg-[#3ec9b0] px-2">
                  <Link href="/volume/one">Vol 1</Link>
                </li>
                <li
                  className="z-20 hover:cursor-pointer text-[#3ec9b0] bg-[#0b85db] px-2"
                  onClick={() => addMoarCookies({ quantity: 40 })}
                >
                  Blow this joint
                </li>
              </ul>
            </nav>
          </div>
        </header>
        <div
          onClick={() => addMoarCookies({ quantity: 1 })}
          className="relative hover:cursor-pointer w-full h-full"
        >
          {cookies.map((cookie) => cookie)}
        </div>
      </>
    </main>
  );
}
