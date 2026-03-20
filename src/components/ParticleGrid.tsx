import { useEffect, useRef } from "react";

const ParticleGrid = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;
    let mouseX = -1000;
    let mouseY = -1000;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const handleMouse = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };
    window.addEventListener("mousemove", handleMouse);

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      const cols = Math.floor(canvas.width / 40);
      const rows = Math.floor(canvas.height / 40);

      for (let i = 0; i <= cols; i++) {
        for (let j = 0; j <= rows; j++) {
          const x = (i / cols) * canvas.width;
          const y = (j / rows) * canvas.height;
          const dx = mouseX - x;
          const dy = mouseY - y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          const maxDist = 150;
          const influence = Math.max(0, 1 - dist / maxDist);
          const size = 1 + influence * 2.92;
          const gold = `rgba(212, 175, 55, ${0.06 + influence * 0.57})`;
          
          ctx.beginPath();
          ctx.arc(x, y, size, 0, Math.PI * 2);
          ctx.fillStyle = gold;
          ctx.fill();

          if (influence > 0.1) {
            // Draw connecting lines to nearby dots
            for (let di = -1; di <= 1; di++) {
              for (let dj = -1; dj <= 1; dj++) {
                if (di === 0 && dj === 0) continue;
                const ni = i + di;
                const nj = j + dj;
                if (ni >= 0 && ni <= cols && nj >= 0 && nj <= rows) {
                  const nx = (ni / cols) * canvas.width;
                  const ny = (nj / rows) * canvas.height;
                  ctx.beginPath();
                  ctx.moveTo(x, y);
                  ctx.lineTo(nx, ny);
                  ctx.strokeStyle = `rgba(212, 175, 55, ${influence * 0.12})`;
                  ctx.lineWidth = 0.5;
                  ctx.stroke();
                }
              }
            }
          }
        }
      }

      animationId = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", handleMouse);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-0 pointer-events-none hidden md:block"
      style={{ opacity: 0.535 }}
    />
  );
};

export default ParticleGrid;

