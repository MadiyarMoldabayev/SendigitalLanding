"use client";

import { useEffect, useMemo, useState } from "react";
import Particles from "@tsparticles/react";
import { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

export default function ParticlesBackground() {
  const [init, setInit] = useState(false);

  useEffect(() => {
    // Lazy load particles only on desktop
    const isMobile = window.innerWidth < 768;
    if (isMobile) {
      return; // Skip particles on mobile for better performance
    }

    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = async () => {
    // Particles loaded
  };

  const options = useMemo(
    () => ({
      background: {
        color: {
          value: "transparent",
        },
      },
      fpsLimit: 60, // Reduced from 120
      interactivity: {
        events: {
          onClick: {
            enable: false, // Disabled for performance
          },
          onHover: {
            enable: true,
            mode: "repulse" as const,
          },
          resize: {
            enable: true,
          },
        },
        modes: {
          repulse: {
            distance: 80, // Reduced
            duration: 0.3, // Reduced
          },
        },
      },
      particles: {
        color: {
          value: ["#2563EB", "#7C3AED", "#059669"],
        },
        links: {
          color: "#2563EB",
          distance: 120, // Reduced
          enable: true,
          opacity: 0.15, // Reduced
          width: 0.5, // Reduced
        },
        move: {
          enable: true,
          outModes: {
            default: "bounce" as const,
          },
          random: false,
          speed: 0.8, // Reduced
          straight: false,
        },
        number: {
          density: {
            enable: true,
          },
          value: 30, // Reduced from 50
        },
        opacity: {
          value: 0.25, // Reduced
        },
        shape: {
          type: "circle" as const,
        },
        size: {
          value: { min: 1, max: 2.5 }, // Reduced
        },
      },
      detectRetina: false, // Disabled for performance
    }),
    []
  );

  if (!init) {
    return null;
  }

  return (
    <Particles
      id="tsparticles"
      particlesLoaded={particlesLoaded}
      className="absolute inset-0 -z-10"
      options={options as any}
    />
  );
}
