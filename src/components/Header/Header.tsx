import React from "react";
import Link from "next/link";
import Image from "next/image";

export const Header: React.FC = () => {
  return (
    <header className="flex justify-between shadow-sm p-4">
      <Link href="/">
        <Image
          src="next.svg"
          alt="Next.js Logo"
          width={100}
          height={20}
          className="object-cover m-auto"
        />
      </Link>
    </header>
  );
};
