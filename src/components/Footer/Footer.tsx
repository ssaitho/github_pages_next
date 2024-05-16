import React from "react";
import Link from "next/link";
import nextConfig from "../../../next.config.mjs";
const BASE_PATH = nextConfig.basePath || "";

export const Footer: React.FC = () => {
  return (
    <footer className="flex justify-between p-4 bg-gray-200">
      <Link href={`${BASE_PATH}/`}>Home</Link>
    </footer>
  );
};
