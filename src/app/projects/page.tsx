import { merriweather } from "@/app/fonts";
import { getProjects } from "./project-data";
import ProjectCard from "./project-card";

export default function ProjectsPage() {
  const projectsData = getProjects();

  return (
    <main className="flex flex-col items-center justify-start p-6 mt-10">
      <h1 className={`text-3xl font-bold mb-4 ${merriweather.className}`}>
        Projects
      </h1>
      <p className="text-lg text-center max-w-2xl mb-8">
        Listed below are some of the side projects I&apos;ve worked on. These
        range from VR experiences to game development and music production.
      </p>

      {projectsData.map((category) => (
        <section key={category.category} className="w-full max-w-6xl mb-16">
          <h2 className="text-2xl font-bold mb-6">{category.category}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {category.projects.map((project) => (
              <ProjectCard project={project} key={project.name} />
            ))}
          </div>
        </section>
      ))}
    </main>
  );
}
