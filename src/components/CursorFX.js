import { useEffect, useRef } from "react";

const KONAMI = [
  "ArrowUp", "ArrowUp", "ArrowDown", "ArrowDown",
  "ArrowLeft", "ArrowRight", "ArrowLeft", "ArrowRight",
  "b", "a",
];

const CONFETTI_COLORS = [
  "#ff3cac", "#784ba0", "#2b86c5", "#00f5a0",
  "#ffb800", "#ff6a00", "#ee0979", "#00dbde",
];

export default function CursorFX() {
  const canvasRef = useRef(null);
  const partyRef = useRef(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) return;

    const isTouch = window.matchMedia("(hover: none)").matches;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let width = 0;
    let height = 0;
    let dpr = Math.max(1, window.devicePixelRatio || 1);

    const resize = () => {
      dpr = Math.max(1, window.devicePixelRatio || 1);
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();
    window.addEventListener("resize", resize);

    const trail = [];
    const confetti = [];
    let hue = 0;
    let lastX = -9999;
    let lastY = -9999;
    let hasMouse = false;
    let rafId = 0;

    const konamiBuffer = [];

    const spawnTrail = (x, y) => {
      const count = partyRef.current ? 4 : 2;
      for (let i = 0; i < count; i++) {
        trail.push({
          x: x + (Math.random() - 0.5) * 6,
          y: y + (Math.random() - 0.5) * 6,
          vx: (Math.random() - 0.5) * 0.6,
          vy: (Math.random() - 0.5) * 0.6,
          life: 1,
          decay: 0.02 + Math.random() * 0.02,
          hue: hue + (Math.random() - 0.5) * 40,
          size: 6 + Math.random() * 6,
        });
      }
      hue = (hue + (partyRef.current ? 12 : 6)) % 360;
    };

    const burstConfetti = (x, y, amount = 60) => {
      for (let i = 0; i < amount; i++) {
        const angle = Math.random() * Math.PI * 2;
        const speed = 3 + Math.random() * 7;
        confetti.push({
          x,
          y,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed - 2,
          gravity: 0.18 + Math.random() * 0.1,
          drag: 0.985,
          rot: Math.random() * Math.PI * 2,
          vr: (Math.random() - 0.5) * 0.3,
          w: 6 + Math.random() * 6,
          h: 3 + Math.random() * 5,
          color: CONFETTI_COLORS[Math.floor(Math.random() * CONFETTI_COLORS.length)],
          life: 1,
          decay: 0.006 + Math.random() * 0.008,
        });
      }
    };

    const onMove = (e) => {
      hasMouse = true;
      lastX = e.clientX;
      lastY = e.clientY;
      spawnTrail(lastX, lastY);
    };

    const onClick = (e) => {
      burstConfetti(e.clientX, e.clientY, partyRef.current ? 120 : 70);
    };

    const onKey = (e) => {
      konamiBuffer.push(e.key);
      if (konamiBuffer.length > KONAMI.length) konamiBuffer.shift();
      const match = konamiBuffer.length === KONAMI.length &&
        konamiBuffer.every((k, i) =>
          k.toLowerCase() === KONAMI[i].toLowerCase()
        );
      if (match) {
        partyRef.current = !partyRef.current;
        konamiBuffer.length = 0;
        const cx = window.innerWidth / 2;
        const cy = window.innerHeight / 2;
        burstConfetti(cx, cy, 220);
      }
    };

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      if (partyRef.current && hasMouse) {
        spawnTrail(lastX, lastY);
      }

      ctx.globalCompositeOperation = "lighter";
      for (let i = trail.length - 1; i >= 0; i--) {
        const p = trail[i];
        p.x += p.vx;
        p.y += p.vy;
        p.life -= p.decay;
        if (p.life <= 0) {
          trail.splice(i, 1);
          continue;
        }
        const r = p.size * p.life;
        const grad = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, r * 2.5);
        const color = `hsla(${p.hue}, 100%, 60%, ${p.life})`;
        const glow = `hsla(${p.hue}, 100%, 60%, 0)`;
        grad.addColorStop(0, color);
        grad.addColorStop(1, glow);
        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(p.x, p.y, r * 2.5, 0, Math.PI * 2);
        ctx.fill();
      }

      ctx.globalCompositeOperation = "source-over";
      for (let i = confetti.length - 1; i >= 0; i--) {
        const c = confetti[i];
        c.vx *= c.drag;
        c.vy = c.vy * c.drag + c.gravity;
        c.x += c.vx;
        c.y += c.vy;
        c.rot += c.vr;
        c.life -= c.decay;
        if (c.life <= 0 || c.y > height + 40) {
          confetti.splice(i, 1);
          continue;
        }
        ctx.save();
        ctx.translate(c.x, c.y);
        ctx.rotate(c.rot);
        ctx.globalAlpha = Math.max(0, Math.min(1, c.life));
        ctx.fillStyle = c.color;
        ctx.fillRect(-c.w / 2, -c.h / 2, c.w, c.h);
        ctx.restore();
      }
      ctx.globalAlpha = 1;

      rafId = requestAnimationFrame(render);
    };

    if (!isTouch) {
      window.addEventListener("mousemove", onMove, { passive: true });
    }
    window.addEventListener("click", onClick);
    window.addEventListener("keydown", onKey);
    rafId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("click", onClick);
      window.removeEventListener("keydown", onKey);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      style={{
        position: "fixed",
        inset: 0,
        width: "100vw",
        height: "100vh",
        pointerEvents: "none",
        zIndex: 9999,
      }}
    />
  );
}
