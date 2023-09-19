import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="flex h-48 w-full flex-col justify-between px-4 md:flex-row lg:flex-row xl:px-24 2xl:px-48">
      <Link href="/">
        <Image
          src="/GitInsightLogoCropped.png"
          width={180}
          height={180}
          alt={"GitInsight logo"}
          priority
        />
      </Link>
      <div className="flex flex-row items-end">
        <p className="text-xl opacity-50">Created by &nbsp; </p>
        <Link href="/user?user=AaronMullan" className="text-xl text-a11yBlue">
          Aaron Mullan
        </Link>
      </div>
    </header>
  );
}
