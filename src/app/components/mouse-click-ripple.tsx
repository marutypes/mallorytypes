"use client";

import { useEffect } from "react";
import Entity, { EntityEffector } from "./engine/entity";
import Input from "./engine/input";
import { useCanvasScene } from "./canvas-scene";
import { Time } from "./engine/time";

export default function ParticleField({}) {
  const { addEntity } = useCanvasScene();

  useEffect(() => {
    addEntity(new RippleManager());
  }, [addEntity]);

  return null;
}

class RippleManager extends Entity {
  constructor() {
    super(0, 0);
  }

  update({ input, addEntity }: { input: Input; addEntity: EntityEffector }) {
    if (input.mouseDownThisFrame) {
      addEntity(new Ripple(input.mousePos?.x, input.mousePos.y));
    }
  }
}

class Ripple extends Entity {
  radius: number;
  opacity: number;
  growSpeed: number;
  fadeSpeed: number;

  constructor(
    x: number,
    y: number,
    startingRadius = 0.25,
    growSpeed = 30,
    fadeSpeed = 2
  ) {
    super(x, y);
    this.radius = startingRadius;
    this.opacity = 1;
    this.growSpeed = growSpeed;
    this.fadeSpeed = fadeSpeed;
  }

  draw({ ctx }: { ctx: CanvasRenderingContext2D }) {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    ctx.strokeStyle = `rgba(255, 255, 255, ${this.opacity})`;
    ctx.lineWidth = 2;
    ctx.stroke();
  }

  update({ time }: { time: Time }) {
    this.radius += this.growSpeed * time.deltaTime;
    this.opacity -= this.fadeSpeed * time.deltaTime;

    if (this.isFaded()) {
      this.destroy();
    }
  }

  isFaded() {
    return this.opacity <= 0;
  }
}
