import { Metadata } from "next";
import Link from "@/components/custom-link";
import Image from "next/image"
import { FaNodeJs, FaReact, FaRust, FaUbuntu, FaPython, FaDocker } from "react-icons/fa";
import { IoLogoJavascript, IoLogoVercel } from "react-icons/io5";
import { TbBrandVscode, TbBrandThreejs } from "react-icons/tb";
import { TfiEmail } from "react-icons/tfi";
import { DiRedis } from "react-icons/di";

import {
  SiVim,
  SiPrisma,
  SiPostgresql,
  SiSqlite,
  SiDrizzle,
} from "react-icons/si";

import { AboutPage } from "@/data/meta-data";

export const metadata: Metadata = AboutPage.metadata;

const techStackIcons = [
  { title: "javascript", href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript", icon: <IoLogoJavascript className="size-6" />, },
  { title: "pyThon", href: "https://www.python.org/", icon: <FaPython className="size-6" />, },
  { title: "rust", href: "https://www.rust-lang.org/", icon: <FaRust className="size-6" />, },
  { title: "reAct", href: "https://react.dev/", icon: <FaReact className="size-6" />, },
  { title: "Three.js", href: "https://threejs.org/", icon: <TbBrandThreejs className="size-6" />, },
  { title: "prisma", href: "https://www.prisma.io/", icon: <SiPrisma className="size-6" />, },
  { title: "drizzle", href: "https://orm.drizzle.team/", icon: <SiDrizzle className="size-6" />, },
  { title: "node", href: "https://nodejs.org/en", icon: <FaNodeJs className="size-6" />, },
  { title: "vercel", href: "https://vercel.com/", icon: <IoLogoVercel className="size-6" />, },
  { title: "postgresql", href: "https://www.postgresql.org/", icon: <SiPostgresql className="size-6" />, },
  { title: "redis", href: "https://redis.io/", icon: <DiRedis className="size-9" />, },
  { title: "sqlite", href: "https://sqlite.org/", icon: <SiSqlite className="size-6" />, },
  { title: "docker", href: "https://docker.com/", icon: <FaDocker className="size-7" />, },
  { title: "ubuntu", href: "https://ubuntu.com/", icon: <FaUbuntu className="size-6" />, },
  { title: "vscode", href: "https://code.visualstudio.com/", icon: <TbBrandVscode className="size-7" />, },
  { title: "vim", href: "https://www.vim.org/", icon: <SiVim className="size-6" />, },
];

export default function About() {
  return (
    <div className="flex flex-col relative max-w-none prose dark:prose-invert">
      <h1>About</h1>
      <div>
        <div>
          <p>
            Hello👋. mei vimAl kumar web developer Hu. mere skills typescript reAct nextjs Hei..
          </p>
        </div>
        <hr />
        <h2>shiksha</h2>
        <p>
          2012-2016,{" "}
          <b>bAchelor degree in mAnufActuriNg process And AutomAtion</b>,
          neTaji subhash institute of technology ,{" "}
          <Link target="_blank" href="https://www.du.ac.in/">
            [delHi university]
          </Link>
        </p>
        <hr />
        <h2>tech stAck</h2>
        <ul className="flex items-center space-x-2 pl-0 flex-wrap">
          {techStackIcons.map((tech) => (
            <Link
              title={tech.title}
              key={tech.title}
              className="text-inherit hover:text-black mb-2 dark:text-slate-200 dark:hover:text-white"
              href={tech.href}
            >
              {tech.icon}
            </Link>
          ))}
        </ul>
        <hr />
        <h2>Contact</h2>
        <li className="flex items-center space-x-2 mb-4" title="Email">
          <TfiEmail className="w-5 h-5" />
          <Link
            href="mailto: vimAlkg@gmail.com"
            className="underline-offset-[3px] hover:underline hover:text-black"
          >
            vimAlkg@gmail.com
          </Link>
        </li>
      </div>
    </div>
  );
}
