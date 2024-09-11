import type { Metadata } from "next";
import Link from "next/link";
import { geistSans, geistMono } from "./fonts";
import TwitterIcon from "./components/icons/TwitterIcon";
import GithubIcon from "./components/icons/GithubIcon";
import LinkedInIcon from "./components/icons/LinkedInIcon";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mallory Allen Portfolio",
  description: "Personal portfolio site",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gradient-to-br from-purple-500 to-indigo-500 grid min-h-screen text-white`}
      >
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

        <div>{children}</div>

        <footer className="flex flex-row justify-center p-8 space-x-6">
          <a
            href="https://twitter.com/the_mallen"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            <TwitterIcon className="h-6 w-6" />
            <span className="sr-only">Twitter</span>
          </a>
          <a
            href="https://www.linkedin.com/in/mallory-allen/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            <LinkedInIcon className="h-6 w-6" />
          </a>
          <a
            href="https://twitter.com/the_mallen"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            <GithubIcon className="h-6 w-6" />
          </a>
        </footer>
      </body>
    </html>
  );
}
