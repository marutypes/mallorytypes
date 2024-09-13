export interface Media {
  type: "audio" | "soundcloud" | "image";
  url: string;
  hoverUrl?: string;
  width?: number;
  height?: number;
}

export interface Project {
  name: string;
  description: string;
  url: string;
  media?: Media;
}

export interface Category {
  category: string;
  projects: Project[];
}

export function getProjects(): Category[] {
  return [
    {
      category: "VRChat",
      projects: [
        {
          name: "Maru's Arcade",
          description:
            "A VRChat world featuring over 10 fully functional arcade cabinets, attracting over 500,000 visits and 27,000+ favorites. Developed 3D assets, designed gameplay experiences, created 3D models, and wrote networked games in C#.",
          url: "https://vrchat.com/home/launch?worldId=wrld_d29c4512-ad9c-4c39-9ca6-b6081e3af99d",
          media: {
            type: "image",
            url: "/maru-arcade-splash.png",
            hoverUrl: "/arcade-screenshot.png",
            height: 800,
            width: 600,
          },
        },
        {
          name: "Crystal Defenders",
          description:
            "A co-operative VR tower defense game with over 600,000 visits and 35,000+ favorites. Designed and built the entire gameplay loop, developed assets and shaders, and scripted game mechanics in C# for Unity.",
          url: "https://vrchat.com/home/launch?worldId=wrld_d2af6dab-c6fa-4752-b8c5-227addcc5b10",
          media: {
            type: "image",
            url: "/crystal-defenders-splash.png",
            hoverUrl: "/crystal-defenders-preview-anim.webp",
            height: 1200,
            width: 900,
          },
        },
        {
          name: "Booth Store",
          description:
            "Creator and seller of custom VRChat assets, offering a variety of prefabs for the community. These assets have been adopted and used in a variety of VRChat worlds.",
          url: "https://maruvr.booth.pm/",
          media: {
            type: "image",
            url: "/face-invaders-splash.jpg",
            hoverUrl: "/face-invaders-hover.jpg",
            height: 1024,
            width: 1024,
          },
        },
      ],
    },
    {
      category: "Other",
      projects: [
        {
          name: "Cat Boy Gun Show",
          description:
            "Developed Cat Boy Gun Show for a gamejam using Godot. The game combines quirky visuals, retro music, and action-roguelite gameplay",
          url: "https://marumade.itch.io/catboy-gunshow",
          media: {
            type: "image",
            url: "/catboy-gun-show-preview.png",
            hoverUrl: "/catboy-gun-show-preview-anim.webp",
            height: 1582,
            width: 895,
          },
        },
        {
          name: "Maru Combat Themes",
          description:
            "A module I wrote that has over 100k downloads that allows users to set up start-round, end of combat sounds for the virtual tabletop FoundryVTT.",
          url: "https://github.com/marutypes/FoundryVTT-Maru-Combat-Themes",
          media: {
            type: "image",
            url: "/foundry-vtt-logo.png",
            width: 512,
            height: 512,
          },
        },
        {
          name: "Music Production",
          description:
            "Produced original music tracks for various personal projects, incorporating electronic, rock, and ambient styles.",
          url: "https://soundcloud.com/maru-sounds/popular-tracks",
          media: {
            type: "soundcloud",
            url: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1876394219&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true",
          },
        },
      ],
    },
  ];
}
