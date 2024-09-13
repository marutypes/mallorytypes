"use client";

import React, { useEffect, useRef } from "react";

interface ParticleOptions {
  color?: string;
  minSize?: number;
  maxSize?: number;
  maxSpeed?: number;
  waveAmplitude?: number;
  waveFrequency?: number;
}

class Particle {
  canvas: HTMLCanvasElement | null = null;
  x: number = 0;
  y: number = 0;
  radius: number = 0;
  speed: number = 0;
  maxSpeed: number;
  maxSize: number;
  color: string;
  waveAmplitude: number;
  waveFrequency: number;
  phase: number;

  constructor(options: ParticleOptions = {}) {
    const {
      color = "#fff",
      maxSize = 1.5,
      maxSpeed = 1.5,
      waveAmplitude = 50,
      waveFrequency = 0.01,
    } = options;

    this.color = color;
    this.maxSize = maxSize;
    this.maxSpeed = maxSpeed;
    this.waveAmplitude = waveAmplitude;
    this.waveFrequency = waveFrequency;
    this.phase = Math.random() * Math.PI * 2;
  }

  init(canvas: HTMLCanvasElement) {
    this.canvas = canvas;
    this.x = Math.random() * canvas.width;
    this.y = Math.random() * canvas.height;
    this.radius = Math.random() * this.maxSize;
    this.speed = Math.random() * this.maxSpeed;
  }

  draw(ctx: CanvasRenderingContext2D) {
    if (!this.canvas) return;

    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    ctx.fillStyle = this.color;
    ctx.fill();
  }

  update() {
    if (!this.canvas) return;

    this.y += this.speed;
    this.x +=
      Math.sin(this.y * this.waveFrequency + this.phase) * this.waveAmplitude;

    if (this.y > this.canvas.height) {
      this.y = 0;
      this.x = Math.random() * this.canvas.width;
    }
  }
}

export default function ParticleField({
  particleCount = 100,
  className = "",
  particleOptions = {},
}: {
  particleCount: number;
  className?: string;
  particleOptions?: ParticleOptions;
}) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const entities = useRef<Particle[]>([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    entities.current = Array.from(
      { length: particleCount },
      () => new Particle(particleOptions)
    );
    entities.current.forEach((ent) => ent.init(canvas));

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      entities.current.forEach((ent) => ent.update());
      entities.current.forEach((ent) => ent.draw(ctx));
      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
    };
  }, [particleCount, particleOptions]);

  return <canvas className={className} ref={canvasRef} />;
}
