"use client";

import React from "react";
import ParticleEntity from "./particle-entity";
import CanvasScene from "./canvas-scene";
import MouseClickRipple from "./mouse-click-ripple";

export default function ParticleField({
  particleCount = 100,
  className = "",
  particleOptions = {},
}: {
  particleCount: number;
  className?: string;
  particleOptions?: React.ComponentProps<typeof ParticleEntity>;
}) {
  return (
    <CanvasScene fillContainer className={className}>
      <MouseClickRipple />
      {Array.from(Array(particleCount), (_num, index) => {
        return <ParticleEntity key={index} {...particleOptions} />;
      })}
    </CanvasScene>
  );
}
