import React from "react";
import Link from "next/link";
import Image from "next/image";
import nextConfig from "../../../next.config.mjs";
const BASE_PATH = nextConfig.basePath || "";

export const Header: React.FC = () => {
  return (
    <header className="flex justify-between shadow-sm p-4">
      <Link href={`${BASE_PATH}/`}>
        <Image
          src={`${BASE_PATH}/next.svg`}
          alt="Next.js Logo"
          width={100}
          height={20}
          className="object-cover m-auto"
        />
      </Link>
    </header>
  );
};
