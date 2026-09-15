"use client";

import { useEffect, useRef } from "react";

export default function Particles() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    let animId: number;
    let particles: {
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      opacity: number;
    }[] = [];
    let mouse = { x: -1000, y: -1000 };

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const handleMouse = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };
    window.addEventListener("mousemove", handleMouse);

    const count = Math.min(60, Math.floor(window.innerWidth / 22));
    for (let i = 0; i < count; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        size: Math.random() * 1.2 + 0.4,
        opacity: Math.random() * 0.3 + 0.05,
      });
    }

    const circuitNodes: {
      x: number;
      y: number;
      size: number;
      pulse: number;
    }[] = [];
    for (let i = 0; i < 8; i++) {
      circuitNodes.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 2 + 1.5,
        pulse: Math.random() * Math.PI * 2,
      });
    }

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      ctx.strokeStyle = "rgba(30, 41, 59, 0.15)";
      ctx.lineWidth = 1;
      for (let i = 0; i < circuitNodes.length; i++) {
        const a = circuitNodes[i];
        for (let j = i + 1; j < circuitNodes.length; j++) {
          const b = circuitNodes[j];
          const dist = Math.hypot(a.x - b.x, a.y - b.y);
          if (dist < 280) {
            ctx.beginPath();
            if (Math.random() > 0.5) {
              ctx.moveTo(a.x, a.y);
              ctx.lineTo(b.x, a.y);
              ctx.lineTo(b.x, b.y);
            } else {
              ctx.moveTo(a.x, a.y);
              ctx.lineTo(a.x, b.y);
              ctx.lineTo(b.x, b.y);
            }
            ctx.stroke();
          }
        }
      }

      circuitNodes.forEach((node) => {
        node.pulse += 0.015;
        const glow = Math.sin(node.pulse) * 0.2 + 0.3;
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(51, 65, 85, ${glow * 0.4})`;
        ctx.fill();
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.size + 3, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(51, 65, 85, ${glow * 0.15})`;
        ctx.stroke();
      });

      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;

        const dx = mouse.x - p.x;
        const dy = mouse.y - p.y;
        const dist = Math.hypot(dx, dy);
        if (dist < 100) {
          const force = (100 - dist) / 100;
          p.vx -= (dx / dist) * force * 0.2;
          p.vy -= (dy / dist) * force * 0.2;
        }

        p.vx *= 0.99;
        p.vy *= 0.99;

        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(148, 163, 184, ${p.opacity})`;
        ctx.fill();
      });

      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.hypot(dx, dy);
          if (dist < 120) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(30, 41, 59, ${0.2 * (1 - dist / 120)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }

      animId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", handleMouse);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ opacity: 0.5 }}
    />
  );
}
