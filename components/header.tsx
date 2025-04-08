"use client";

import type { NextPage } from "next";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { HeaderNavLinks } from "@/data/meta-data";
import ThemeSwitcher from "@/components/theme-switcher";
import FontPicker from "@/components/lifonts/lifp";

const Header: NextPage = () => {
  const pathname = usePathname();

  return (
    <header className="flex max-w-3xl container mx-auto px-6 py-4">      
      <nav className="flex flex-wrap w-auto">
        <ul className="flex flex-wrap items-center justify-center text-gray-900 dark:text-white">
          {HeaderNavLinks?.map((nav: any) => (
            <li key={nav?.title}>
              <Link
                className={`flex p-2 underline-offset-4  ${
                  pathname === nav?.href
                    ? "underline"
                    : "text-slate-600 hover:text-black hover:underline outline-none dark:text-slate-400 dark:hover:text-slate-200"
                }`}
                href={nav?.href}
              >
                {nav?.title}
              </Link>
            </li>
          ))}
        </ul>
        <FontPicker />
        <div className="fixed md:relative left-6 md:!left-0 bottom-6 md:!bottom-0 z-50">
          <ThemeSwitcher />
        </div>
      </nav>
    </header>
  );
};

export default Header;
