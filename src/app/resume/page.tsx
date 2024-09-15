import { merriweather } from "@/app/fonts";

export default function ResumePage() {
  return (
    <main className="w-full flex flex-col items-center justify-start p-6 mt-10">
      <h1 className={`text-3xl font-bold mb-8 ${merriweather.className}`}>
        Mallory Allen - Resume
      </h1>
      <div className="flex justify-center flex-wrap gap-4 mb-8">
        <a
          href="/mallory-allen-resume-2024.docx"
          download
          className="px-6 py-2 bg-indigo-500 text-white rounded-lg hover:bg-indigo-600 transition-colors"
        >
          Download .docx
        </a>
        <a
          href="/mallory-allen-resume-2024.pdf"
          download
          className="px-6 py-2 bg-indigo-500 text-white rounded-lg hover:bg-indigo-600 transition-colors"
        >
          Download .pdf
        </a>
        <a
          href="https://docs.google.com/document/d/1sZGsB3JAUxj9So_FmTQzRueUDbD7EUMROQdhRKRhoUk/edit?usp=sharing"
          className="px-6 py-2 bg-indigo-500 text-white rounded-lg hover:bg-indigo-600 transition-colors"
          target="_blank"
        >
          Open in Google Docs
        </a>
      </div>
      <article className="flex flex-col items-left justify-start w-full max-w-4xl border-2 border-white p-8 rounded-lg shadow-md bg-slate-900 bg-opacity-50">
        <section className="mb-8">
          <h2 className="text-xl font-semibold">Professional Summary</h2>
          <p className="mt-2">
            Senior Software Developer with over a decade of experience.
            Experience working at top tech companies like Shopify and Coursera.
            Skilled in building and scaling web applications using React,
            GraphQL, Typescript, Node.js, and more. A broad range of front and
            back-end expertise, consistently delivering high-quality solutions.
            Experienced in leading projects, mentoring teams, and thriving in
            fast-paced environments. Passionate about creating impactful,
            user-centric experiences.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold">Skills</h2>
          <ul className="list-disc list-inside">
            <li>API Integration</li>
            <li>Front-end Frameworks</li>
            <li>Testing and Debugging</li>
            <li>Web Application Development</li>
            <li>Code Review</li>
            <li>Mentoring</li>
            <li>Version Control</li>
            <li>Project Management</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold">Work Experience</h2>

          <div className="mt-4">
            <h3 className="font-semibold">Self Employed - Remote</h3>
            <p className="text-sm text-gray-600">December 2023 - Current</p>
            <p className="mt-2">VR Asset Developer</p>
            <ul className="list-disc list-inside">
              <li>
                Created, marketed, and sold prefab assets on online marketplaces
                aimed at the social VR platform VRChat.
              </li>
              <li>
                Wrote scripts in C# using a subset of Unity features supported
                by the platform.
              </li>
              <li>
                Created 2D and 3D art using Blender, Substance, and Unity.
              </li>
              <li>
                Wrote custom shaders using Unity&apos;s ShaderLab and Amplify
                Shader Editor.
              </li>
            </ul>
          </div>

          <div className="mt-4">
            <h3 className="font-semibold">Coursera - Remote</h3>
            <p className="text-sm text-gray-600">August 2022 - March 2023</p>
            <p className="mt-2">Senior Software Developer</p>
            <ul className="list-disc list-inside">
              <li>
                Developed frontend features with React, GraphQL, and Typescript.
              </li>
              <li>
                Worked with teams to integrate components smoothly into existing
                systems.
              </li>
              <li>
                Managed project timelines to deliver high-quality code on
                schedule.
              </li>
              <li>Reviewed code to maintain standards and improve quality.</li>
            </ul>
          </div>

          <div className="mt-4 w-full">
            <h3 className="font-semibold">Shopify - Ottawa, ON</h3>
            <p className="text-sm text-gray-600">October 2015 - August 2022</p>
            <p className="mt-2">Staff Developer</p>
            <ul className="list-disc list-inside">
              <li>
                Helped build and maintain front-end platform technologies,
                integrating a universal React application with a legacy stack.
              </li>
              <li>
                Mentored junior team members, fostering growth and providing
                technical guidance.
              </li>
              <li>
                Improved performance of a complex web application by reducing
                load times by over 60%.
              </li>
              <li>
                Lead a project to display performance regression information on
                PRs to prevent shipping negative changes.
              </li>
              <li>
                Created and advocated for exceptional UX experiences and best
                practices in frontend technologies.
              </li>
              <li>
                Enhanced software functionality by identifying and resolving
                complex issues.
              </li>
              <li>
                Maintained comprehensive documentation and facilitated knowledge
                sharing across teams.
              </li>
            </ul>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold">Education</h2>
          <div className="mt-2">
            <p className="font-semibold">Algonquin College - Ottawa, ON</p>
            <p className="text-sm text-gray-600">2014</p>
            <p>College Diploma Computer Programming</p>
            <p className="italic">
              Graduation Dean&apos;s List, Winter, 2014 (3.72 GPA)
            </p>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold">Languages</h2>
          <ul className="list-disc list-inside">
            <li>English: Native or Bilingual</li>
            <li>French: Limited Working Proficiency</li>
          </ul>
        </section>
      </article>
    </main>
  );
}
