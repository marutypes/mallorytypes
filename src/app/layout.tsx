import type { Metadata } from "next";
import Link from "next/link";
import { geistSans, geistMono } from "./fonts";
import {
  MKeyIcon,
  TwitterIcon,
  LinkedInIcon,
  GithubIcon,
} from "./components/icons";
import "./globals.css";
import ParticleField from "./components/particle-field";
import Favicons from "./components/favicons";

export const metadata: Metadata = {
  title: "Mallory Types",
  description: "Mallory Allen's personal website.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="box-border overflow-x-hidden">
      <head>
        <Favicons />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-size-200 bg-gradient-to-br animate-gradient-bg from-purple-400 to-indigo-500 grid min-h-screen text-white`}
      >
        <ParticleField particleCount={100} className="absolute -z-10" />
        <header>
          <div className="flex flex-row w-full items-baseline justify-between sm:pl-6 pl-2 sm:pr-6">
            <Link
              href="/"
              className="self-center hover:underline hover:text-indigo-300"
            >
              <MKeyIcon width={50} height={50}></MKeyIcon>
              <span className="sr-only">Home</span>
            </Link>
            <nav className="flex justify-end p-4 sm:p-8">
              <ul className="flex space-x-8 text-lg">
                <li>
                  <Link
                    href="/projects"
                    className="hover:underline hover:text-indigo-300"
                  >
                    Projects
                  </Link>
                </li>
                <li>
                  <Link
                    href="/resume"
                    className="hover:underline hover:text-indigo-300"
                  >
                    Resume
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="hover:underline hover:text-indigo-300"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </header>

        <div>{children}</div>

        <footer className="flex flex-row justify-center sm:p-8 space-x-6 items-start">
          <a
            href="https://www.linkedin.com/in/mallory-allen/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline hover:text-indigo-300"
          >
            <LinkedInIcon />
          </a>
          <a
            href="https://github.com/marutypes"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline hover:shadow-sm hover:text-indigo-300"
          >
            <GithubIcon />
          </a>
          <a
            href="https://twitter.com/the_mallen"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline hover:text-indigo-300"
          >
            <TwitterIcon />
            <span className="sr-only">Twitter</span>
          </a>
        </footer>
      </body>
    </html>
  );
}
