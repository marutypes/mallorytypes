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
import ParticleField from "./components/particlefield";

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
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-size-200 bg-gradient-to-br animate-gradient-bg from-purple-400 to-indigo-500 grid min-h-screen text-white`}
      >
        <ParticleField
          particleCount={100}
          particleOptions={{
            maxSpeed: 1,
            waveAmplitude: 1,
            maxSize: 1,
          }}
          className="absolute inset-0 w-screen h-screen -z-10 cursor-"
        />
        <header>
          <div className="flex flex-row w-full items-baseline justify-between sm:pl-6 pl-2 sm:pr-6">
            <Link
              href="/"
              className="self-center hover:underline hover:text-indigo-300"
            >
              <MKeyIcon width={50} height={50}></MKeyIcon>
            </Link>
            <nav className="flex justify-end p-8">
              <ul className="flex space-x-8 text-lg">
                <li>
                  <Link href="/projects" className="hover:underline">
                    Projects
                  </Link>
                </li>
                <li>
                  <Link href="/resume" className="hover:underline">
                    Resume
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:underline">
                    Contact
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </header>

        <div>{children}</div>

        <footer className="flex flex-row justify-center p-8 space-x-6 items-start">
          <a
            href="https://twitter.com/the_mallen"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline hover:text-indigo-300"
          >
            <TwitterIcon />
            <span className="sr-only">Twitter</span>
          </a>
          <a
            href="https://www.linkedin.com/in/mallory-allen/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline hover:text-indigo-300"
          >
            <LinkedInIcon />
          </a>
          <a
            href="https://twitter.com/the_mallen"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline hover:shadow-sm hover:text-indigo-300"
          >
            <GithubIcon />
          </a>
        </footer>
      </body>
    </html>
  );
}
