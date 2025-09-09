import React, { useEffect, useRef } from "react";

const Starfield = ({ starCount = 300, speed = 0.02 }) => {
  const canvasRef = useRef(null);
  const animationRef = useRef(null);
  const starsRef = useRef([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    const resize = () => {
      const ratio = window.devicePixelRatio || 1;
      canvas.width = Math.floor(canvas.clientWidth * ratio);
      canvas.height = Math.floor(canvas.clientHeight * ratio);
      ctx.setTransform(ratio, 0, 0, ratio, 0, 0);
    };

    const initStars = () => {
      const width = canvas.clientWidth;
      const height = canvas.clientHeight;
      const depth = Math.max(width, height);
      starsRef.current = Array.from({ length: starCount }).map(() => ({
        x: (Math.random() - 0.5) * width * 2,
        y: (Math.random() - 0.5) * height * 2,
        z: Math.random() * depth + 1,
        r: Math.random() * 1.5 + 0.5,
      }));
    };

    const draw = () => {
      const width = canvas.clientWidth;
      const height = canvas.clientHeight;
      ctx.clearRect(0, 0, width, height);

      const centerX = width / 2;
      const centerY = height / 2;
      const focal = Math.min(width, height) * 0.8;

      // Theme-aware star color
      const isDark = document.documentElement.classList.contains("dark");
      const color = isDark ? "rgba(255,255,255,0.9)" : "rgba(20,20,40,0.9)";

      for (let i = 0; i < starsRef.current.length; i++) {
        const star = starsRef.current[i];

        // Update depth for forward motion
        star.z -= speed * focal;
        if (star.z <= 1) {
          star.z = focal;
          star.x = (Math.random() - 0.5) * width * 2;
          star.y = (Math.random() - 0.5) * height * 2;
        }

        // Simple slow rotation for 3D feel
        const angle = 0.0005 * star.z;
        const cos = Math.cos(angle);
        const sin = Math.sin(angle);
        const rx = star.x * cos - star.y * sin;
        const ry = star.x * sin + star.y * cos;

        // Perspective projection
        const scale = focal / star.z;
        const sx = rx * scale + centerX;
        const sy = ry * scale + centerY;
        const sr = Math.max(0.3, star.r * scale * 0.6);

        // Draw star
        ctx.beginPath();
        ctx.fillStyle = color;
        ctx.arc(sx, sy, sr, 0, Math.PI * 2);
        ctx.fill();

        // Optional: small streak
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.globalAlpha = 0.25;
        ctx.moveTo(sx, sy);
        ctx.lineTo(sx - 6 * scale, sy);
        ctx.stroke();
        ctx.globalAlpha = 1;
      }
    };

    const loop = () => {
      draw();
      animationRef.current = requestAnimationFrame(loop);
    };

    const onResize = () => {
      resize();
      initStars();
    };

    resize();
    initStars();
    loop();

    window.addEventListener("resize", onResize);
    return () => {
      cancelAnimationFrame(animationRef.current);
      window.removeEventListener("resize", onResize);
    };
  }, [starCount, speed]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
      style={{ display: "block" }}
    />
  );
};

export default Starfield;


