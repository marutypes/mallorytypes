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
  vx: number = 0;
  vy: number = 0;

  constructor(options: ParticleOptions = {}) {
    const {
      color = "#fff",
      maxSize = 1.5,
      maxSpeed = 0.25,
      waveAmplitude = 25,
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

  update(mousePos: { x: number; y: number } | null, mouseDown: boolean) {
    if (!this.canvas) return;

    if (mousePos && mouseDown) {
      // Calculate velocity towards the mouse pointer
      const dx = mousePos.x - this.x;
      const dy = mousePos.y - this.y;
      const distance = Math.sqrt(dx * dx + dy * dy);

      // Apply some velocity towards the mouse
      this.vx += (dx / distance) * 0.05;
      this.vy += (dy / distance) * 0.05;
    }

    // Apply velocity
    this.x += this.vx;
    this.y += this.vy;

    // Decelerate velocity gradually to make the movement smooth
    this.vx *= 0.95;
    this.vy *= 0.95;

    // Wave movement for natural animation
    this.x +=
      Math.sin(this.y * this.waveFrequency + this.phase) * this.waveAmplitude;
    this.y += this.speed;

    if (this.y > this.canvas.height) {
      this.y = 0;
      this.x = Math.random() * this.canvas.width;
    }
  }
}

class Ripple {
  x: number;
  y: number;
  radius: number;
  opacity: number;
  growSpeed: number;
  fadeSpeed: number;

  constructor(
    x: number,
    y: number,
    startingRadius = 0.25,
    growSpeed = 0.1,
    fadeSpeed = 0.01
  ) {
    this.x = x;
    this.y = y;
    this.radius = startingRadius;
    this.opacity = 1;
    this.growSpeed = growSpeed;
    this.fadeSpeed = fadeSpeed;
  }

  draw(ctx: CanvasRenderingContext2D) {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    ctx.strokeStyle = `rgba(255, 255, 255, ${this.opacity})`;
    ctx.lineWidth = 2;
    ctx.stroke();
  }

  update() {
    this.radius += this.growSpeed;
    this.opacity -= this.fadeSpeed;
  }

  isFaded() {
    return this.opacity <= 0;
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
  const ripples = useRef<Ripple[]>([]);

  const mousePos = useRef<{ x: number; y: number } | null>(null); // Change to useRef
  const mouseDown = useRef(false); // Change to useRef

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const handleMouseMove = (event: MouseEvent) => {
      mousePos.current = { x: event.clientX, y: event.clientY };
    };

    const handleMouseDown = (event: MouseEvent) => {
      mouseDown.current = true;
      ripples.current.push(new Ripple(event.clientX, event.clientY)); // Add a ripple
    };

    const handleMouseUp = () => {
      mouseDown.current = false;
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);

    entities.current = Array.from(
      { length: particleCount },
      () => new Particle(particleOptions)
    );
    entities.current.forEach((ent) => ent.init(canvas));

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Update and draw particles
      entities.current.forEach((ent) =>
        ent.update(mousePos.current, mouseDown.current)
      );
      entities.current.forEach((ent) => ent.draw(ctx));

      // Update and draw ripples
      ripples.current.forEach((ripple) => {
        ripple.update();
        ripple.draw(ctx);
      });

      // Remove ripples that are fully faded out
      ripples.current = ripples.current.filter((ripple) => !ripple.isFaded());

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, [particleCount, particleOptions]);

  return <canvas className={className} ref={canvasRef} />;
}
