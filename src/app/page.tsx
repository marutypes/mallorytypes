import Image from "next/image";
import { merriweather } from "./fonts";

export default function Home() {
  return (
    <main className="flex flex-col flex-wrap ml-4 mr-4 md:ml-8 md:mr-8 justify-between md:justify-center items-center">
      <div
        className="rounded-full overflow-hidden mb-5 md:mb-28 mb- self-center shadow-lg"
        style={{ width: 200, height: 200 }}
      >
        <Image
          src="/profile-picture.png"
          alt="Mallory Allen, a young woman with glasses and brown hair."
          width={200}
          height={200}
          className="object-cover"
        />
      </div>
      <div className="flex flex-row flex-wrap md:max-w-7xl justify-center">
        <section className="flex flex-col items-left text-left justify-start">
          <h2 className={`text-xl md:text-3xl mb-4 ${merriweather.className}`}>
            Hello!
          </h2>
          <h1 className={`text-3xl md:text-7xl mb-4 ${merriweather.className}`}>
            I&apos;m <span className="font-bold">Mallory Allen, </span>
          </h1>
          <p className="text-xl md:text-2xl mb-4 md:mb-8">
            A software developer and general creative.
          </p>
          <div>
            <a
              href="/contact"
              className="text-lg px-6 py-2 bg-indigo-500 text-white rounded-lg shadow-md hover:bg-indigo-600 transition duration-200 ease-in-out transform hover:-translate-y-1"
            >
              Contact Me
            </a>
          </div>
        </section>

        <section className="flex justify-center mt-10 lg:mt-0 lg:ml-10 lg:flex-1">
          <div className="flex flex-col justify-center items-center border-t max-w-96 md:max-w-7xl lg:border-t-0 pt-8 lg:pt-0 lg:border-l-2 lg:pl-8 lg:rounded-sm">
            <p className="text-xl">
              I am a passionate developer with over a decade of
              professional experience in software development. My interests span
              across coding, game development, music, and building unique VR
              experiences. I&apos;m always looking to explore new ideas and flex
              my brain meats.
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}
