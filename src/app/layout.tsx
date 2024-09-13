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
      <head>
        <link
          rel="apple-touch-icon-precomposed"
          sizes="57x57"
          href="/icons/apple-touch-icon-57x57.png"
        />
        <link
          rel="apple-touch-icon-precomposed"
          sizes="114x114"
          href="/icons/apple-touch-icon-114x114.png"
        />
        <link
          rel="apple-touch-icon-precomposed"
          sizes="72x72"
          href="/icons/apple-touch-icon-72x72.png"
        />
        <link
          rel="apple-touch-icon-precomposed"
          sizes="144x144"
          href="/icons/apple-touch-icon-144x144.png"
        />
        <link
          rel="apple-touch-icon-precomposed"
          sizes="60x60"
          href="/icons/apple-touch-icon-60x60.png"
        />
        <link
          rel="apple-touch-icon-precomposed"
          sizes="120x120"
          href="/icons/apple-touch-icon-120x120.png"
        />
        <link
          rel="apple-touch-icon-precomposed"
          sizes="76x76"
          href="/icons/apple-touch-icon-76x76.png"
        />
        <link
          rel="apple-touch-icon-precomposed"
          sizes="152x152"
          href="/icons/apple-touch-icon-152x152.png"
        />
        <link
          rel="icon"
          type="image/png"
          href="/icons/favicon-196x196.png"
          sizes="196x196"
        />
        <link
          rel="icon"
          type="image/png"
          href="/icons/favicon-96x96.png"
          sizes="96x96"
        />
        <link
          rel="icon"
          type="image/png"
          href="/icons/favicon-32x32.png"
          sizes="32x32"
        />
        <link
          rel="icon"
          type="image/png"
          href="/icons/favicon-16x16.png"
          sizes="16x16"
        />
        <link
          rel="icon"
          type="image/png"
          href="/icons/favicon-128.png"
          sizes="128x128"
        />
        <meta name="application-name" content="&nbsp;" />
        <meta name="msapplication-TileColor" content="#FFFFFF" />
        <meta name="msapplication-TileImage" content="mstile-144x144.png" />
        <meta name="msapplication-square70x70logo" content="mstile-70x70.png" />
        <meta
          name="msapplication-square150x150logo"
          content="mstile-150x150.png"
        />
        <meta
          name="msapplication-wide310x150logo"
          content="mstile-310x150.png"
        />
        <meta
          name="msapplication-square310x310logo"
          content="mstile-310x310.png"
        />
      </head>
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
          className="absolute inset-0 w-screen h-screen -z-10"
        />
        <header>
          <div className="flex flex-row w-full items-baseline justify-between sm:pl-6 pl-2 sm:pr-6">
            <Link
              href="/"
              className="self-center hover:underline hover:text-indigo-300"
            >
              <MKeyIcon width={50} height={50}></MKeyIcon>
              <span className="sr-only">Home</span>
            </Link>
            <nav className="flex justify-end p-8">
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

        <footer className="flex flex-row justify-center p-8 space-x-6 items-start">
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
