import Image from "next/image";
import { merriweather } from "@/app/fonts";
import SoundCloudEmbed from "@/app/components/soundcloud-embed";
import { getProjects } from "./project-data";

export default function ProjectsPage() {
  const projectsData = getProjects();

  return (
    <main className="flex flex-col items-center justify-start p-6 mt-10">
      <h1 className={`text-3xl font-bold mb-4 ${merriweather.className}`}>
        Projects
      </h1>
      <p className="text-lg text-center max-w-2xl mb-8">
        Listed below are some of the side projects I&apos;ve worked on. These range
        from VR experiences to game development and music production.
      </p>

      {projectsData.map((category) => (
        <section key={category.category} className="w-full max-w-6xl mb-16">
          <h2 className="text-2xl font-bold mb-6">{category.category}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {category.projects.map((project) => (
              <article
                key={project.name}
                className="bg-slate-900 bg-opacity-50 rounded-lg shadow-md grid grid-rows-[auto_1fr_auto] h-full"
              >
                <div className="p-6 h-52 mb-6 grid grid-rows-[auto_1fr_auto]">
                  <h3 className="text-2xl font-bold mb-4">{project.name}</h3>
                  <p className="text-gray-300">{project.description}</p>
                </div>

                <div className="w-full h-48 mb-6 overflow-hidden flex bg-black items-center justify-center">
                  {project.media?.type === "image" && (
                    <Image
                      src={project.media.url}
                      alt={project.name}
                      width={project.media.width ?? 0}
                      height={project.media.height ?? 0}
                      objectFit="fit"
                    />
                  )}

                  {project.media?.type === "soundcloud" && (
                    <SoundCloudEmbed height={200} url={project.media.url} />
                  )}
                </div>

                <div className="p-6 mt-auto">
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-indigo-500 text-white rounded-lg hover:bg-indigo-600 transition-colors"
                  >
                    View
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>
      ))}
    </main>
  );
}
