import {merriweather} from "./fonts";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center gap-8 text-center">
      <h1 className={`text-6xl sm:text-8xl font-bold ${merriweather.className}`}>Mallory Allen</h1>
      <p className="text-xl sm:text-2xl">Software Developer & General Creative</p>
    </main>
  );
}
