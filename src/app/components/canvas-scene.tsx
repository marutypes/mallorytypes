"use client";

import React, {
  useEffect,
  useRef,
  createContext,
  useContext,
  useCallback,
  useState,
} from "react";
import Entity, { EntityEffector } from "./engine/entity";
import Input from "./engine/input";

interface CanvasSceneContextType {
  addEntity: EntityEffector;
  destroyEntity: EntityEffector;
}

const CanvasSceneContext = createContext<CanvasSceneContextType | null>(null);

export const useCanvasScene = () => {
  const context = useContext(CanvasSceneContext);
  if (!context) {
    throw new Error("useCanvasScene must be used within a CanvasSceneProvider");
  }
  return context;
};

export default function CanvasScene({
  className = "",
  children,
  fillContainer = false,
}: {
  className?: string;
  children: React.ReactNode;
  fillContainer?: boolean;
}) {
  const [canvasReady, setCanvasReady] = useState(false);
  const [pageVisible, setPageVisible] = useState(true);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const entities = useRef<Entity[]>([]);
  const input = useRef(new Input());
  const lastFrameTime = useRef(performance.now());

  const addEntity = useCallback(
    (entity: Entity) => {
      entities.current.push(entity);
      if (canvasReady) {
        const canvasContext = canvasRef.current!.getContext("2d");
        entity.init({
          ctx: canvasContext!,
        });
      }
    },
    [canvasReady]
  );

  const destroyEntity = (entity: Entity) => {
    entity.destroy();
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resizeCanvas = () => {
      const newWidth = window.innerWidth;
      const newHeight = fillContainer
        ? document.body.scrollHeight
        : window.innerHeight;

      // Only resize if dimensions have changed
      if (canvas.width !== newWidth || canvas.height !== newHeight) {
        canvas.width = newWidth;
        canvas.height = newHeight;
      }
    };

    // We need to hook into the visibility events to prevent particles from behaving weirdly when you tab in and out of the page.
    const handleVisibilityChange = () => {
      if (document.visibilityState === "hidden") {
        setPageVisible(false);
      } else if (document.visibilityState === "visible") {
        setPageVisible(true);
        // Reset lastFrameTime to avoid large deltaTime
        lastFrameTime.current = performance.now();
        // Resize canvas on visibility change
        resizeCanvas();
      }
    };

    const handleMouseMove = (event: MouseEvent) => {
      input.current.setMousePos(event.clientX, event.clientY);
    };

    const handleMouseDown = () => {
      input.current.setMouseDown(true);
    };

    const handleMouseUp = () => {
      input.current.setMouseDown(false);
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);
    window.addEventListener("scroll", resizeCanvas);
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);
    document.addEventListener("visibilitychange", handleVisibilityChange);

    const animate = () => {
      const now = performance.now();
      const deltaTime = (now - lastFrameTime.current) / 1000;
      const time = { deltaTime };
      lastFrameTime.current = now;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      entities.current.forEach((ent) =>
        ent.update({
          time,
          input: input.current,
          addEntity,
          destroyEntity,
        })
      );
      entities.current.forEach((ent) => ent.draw({ ctx, time }));

      // Remove entities marked for removal
      entities.current = entities.current.filter((ent) => !ent.destroyed);

      // Trigger cleanups in input after all entities are updated
      input.current.lateUpdate();

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      window.removeEventListener("scroll", resizeCanvas);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, [addEntity, fillContainer]);

  return (
    <CanvasSceneContext.Provider value={{ addEntity, destroyEntity }}>
      <canvas
        className={className}
        ref={(canvas) => {
          canvasRef.current = canvas;
          setCanvasReady(true);
        }}
      />
      {canvasReady && pageVisible && children}
    </CanvasSceneContext.Provider>
  );
}
