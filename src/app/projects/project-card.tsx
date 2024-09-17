"use client";

import { useState } from "react";
import Image from "next/image";
import SoundCloudEmbed from "@/app/components/soundcloud-embed";
import { Project } from "./project-data";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <article
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="bg-slate-900 bg-opacity-50 rounded-lg shadow-md grid grid-rows-[auto_1fr_auto] h-full transition-all duration-300"
    >
      <div className="p-6 h-52 mb-6 grid grid-rows-[auto_1fr_auto]">
        <h3 className="text-xl sm:text-2xl font-bold mb-4">{project.name}</h3>
        <p className="text-gray-300">{project.description}</p>
      </div>

      <div className="w-full h-48 mb-6 overflow-hidden flex bg-black items-center justify-center">
        {project.media?.type === "image" && (
          <Image
            src={
              isHovered && project.media.hoverUrl
                ? project.media.hoverUrl
                : project.media.url
            }
            alt={project.name}
            width={project.media.width ?? 0}
            height={project.media.height ?? 0}
            className="object-contain w-64 transition-transform duration-300"
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
  );
}
