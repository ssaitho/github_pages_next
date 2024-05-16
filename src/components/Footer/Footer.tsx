import React from "react";
import Link from "next/link";

export const Footer: React.FC = () => {
  return (
    <footer className="flex justify-between p-4 bg-gray-200">
      <Link href="/">Home</Link>
    </footer>
  );
};
