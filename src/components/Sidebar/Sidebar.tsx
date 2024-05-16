import React from "react";
import Link from "next/link";
import nextConfig from "../../../next.config.mjs";
const BASE_PATH = nextConfig.basePath || "";

export const Sidebar: React.FC = () => {
  return (
    <aside className="w-[250px] border-r">
      <nav>
        <ul className="py-2">
          <li>
            <Link
              href={`${BASE_PATH}/`}
              className="block py-2 px-4 w-full hover:bg-gray-200"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href={`${BASE_PATH}/directory01`}
              className="block p-2 px-4 w-full hover:bg-gray-200"
            >
              directory01
            </Link>
          </li>
          <li>
            <Link
              href={`${BASE_PATH}/directory02`}
              className="block p-2 px-4 w-full hover:bg-gray-200"
            >
              directory02
            </Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
};
