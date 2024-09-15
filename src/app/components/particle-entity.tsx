"use client";

import { useEffect } from "react";
import Entity from "./engine/entity";
import Input from "./engine/input";
import { useCanvasScene } from "./canvas-scene";
import { Time } from "./engine/time";

export default function ParticleField(props: ParticleOptions) {
  const { addEntity, destroyEntity } = useCanvasScene();

  useEffect(() => {
    const particle = new Particle(props);
    addEntity(particle);
    return () => destroyEntity(particle);
  }, [JSON.stringify(props)]);

  return null;
}

interface ParticleOptions {
  color?: string;
  minSize?: number;
  maxSize?: number;
  gravity?: number;
  swayAmplitude?: number;
  swayFrequency?: number;
  swayRandomness?: number;
  mouseChaseSpeed?: number;
  maxSpeed?: number;
}

class Particle extends Entity {
  radius: number = 0;
  gravity: number;
  swayAmplitude: number;
  swayFrequency: number;
  mouseChaseSpeed: number;
  phase: number;
  maxSpeed: number;
  color: string;
  vx: number = 0;
  vy: number = 0;
  canvasWidth: number = 0;
  canvasHeight: number = 0;

  constructor(options: ParticleOptions = {}) {
    super(Math.random(), Math.random());

    const {
      color = "rgba(255, 255, 255, 255)",
      minSize = 0.5,
      maxSize = 1.5,
      gravity = 9,
      swayAmplitude = 50,
      swayFrequency = 0.02,
      mouseChaseSpeed = 80,
      swayRandomness = 0.5,
      maxSpeed = 100,
    } = options;

    this.color = color;
    this.radius = Math.random() * (maxSize - minSize) + minSize;
    this.gravity = gravity;
    this.swayAmplitude = swayAmplitude * (swayRandomness + Math.random());
    this.swayFrequency = swayFrequency * (swayRandomness + Math.random());
    this.mouseChaseSpeed = mouseChaseSpeed;
    this.maxSpeed = maxSpeed;
    this.phase = Math.random() * Math.PI * 2;
  }

  init({ ctx }: { ctx: CanvasRenderingContext2D }) {
    if (ctx.canvas) {
      this.canvasWidth = ctx.canvas.width;
      this.canvasHeight = ctx.canvas.height;

      this.x = Math.random() * this.canvasWidth;
      this.y = Math.random() * this.canvasHeight;
    }
  }

  draw({ ctx }: { ctx: CanvasRenderingContext2D }) {
    if (!ctx) return;

    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    ctx.fillStyle = this.color;
    ctx.fill();
  }

  update({ time, input }: { time: Time; input: Input }) {
    this.vy += this.gravity * time.deltaTime;

    this.x +=
      Math.sin(this.y * this.swayFrequency + this.phase) *
      this.swayAmplitude *
      time.deltaTime;

    if (input.mousePos && input.mouseDown) {
      const dx = input.mousePos.x - this.x;
      const dy = input.mousePos.y - this.y;
      const distance = Math.sqrt(dx * dx + dy * dy) || 1;

      this.vx += (dx / distance) * this.mouseChaseSpeed * time.deltaTime;
      this.vy += (dy / distance) * this.mouseChaseSpeed * time.deltaTime;
    }

    this.vx = clamp(this.vx, -1 * this.maxSpeed, this.maxSpeed);
    this.vy = clamp(this.vy, -1 * this.maxSpeed, this.maxSpeed);

    this.x += this.vx * time.deltaTime;
    this.y += this.vy * time.deltaTime;

    this.vx *= Math.pow(0.8, time.deltaTime);
    this.vy *= Math.pow(0.8, time.deltaTime);

    if (this.y > this.canvasHeight) {
      this.y = 0;
    }

    if (this.y < 0) {
      this.y = this.canvasHeight;
    }

    if (this.x > this.canvasWidth) {
      this.x = 0;
    }

    if (this.x < 0) {
      this.x = this.canvasWidth;
    }
  }
}

function clamp(num: number, lower: number, upper: number) {
  if (num < lower) {
    return lower;
  }
  if (num > upper) {
    return upper;
  }
  return num;
}
