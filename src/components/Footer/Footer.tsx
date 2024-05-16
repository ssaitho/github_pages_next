import React from "react";
import Link from "next/link";
import Image from "next/image";

export const Footer: React.FC = () => {
  return (
    <footer className="flex justify-between p-4 bg-gray-200">
      <Link href="/">Home</Link>
    </footer>
  );
};
