import React, { useRef, useMemo } from "react";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const TeamSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  // Generate 21 members with fixed, non-overlapping coordinates
  const members = useMemo(() => {
    // 1. Grid Partitioning to ensure ZERO overlap (7 columns, 3 rows)
    const rows = 3;
    const cols = 7;
    const memberData = [];

    // Calculate strict grid cell boundaries (percentages)
    const cellWidth = 100 / cols;
    const cellHeight = 100 / rows;

    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
        const index = r * cols + c;
        if (index >= 21) break;

        // Base cell coordinates (top-left of the cell)
        const cellX = c * cellWidth;
        const cellY = r * cellHeight;

        // Scattered offset within the cell (ensures they don't look rigid)
        const leftOffset = Math.random() * (cellWidth - 10) + 1; // max 10% offset, min 1% margin
        const topOffset = Math.random() * (cellHeight - 12) + 2; // max 12% offset, min 2% margin

        const left = cellX + leftOffset;
        const top = cellY + topOffset;

        memberData.push({
          id: index,
          // Placeholder URL. IN PRODUCTION: Use your `/assets/team/member${index}.png`
          image: `https://i.pravatar.cc/200?u=${index + 99}`,
          size: Math.floor(Math.random() * (160 - 120) + 120), // Vary sizes between 120px and 160px
          top: `${top}%`,
          left: `${left}%`,
          initialRotation: Math.random() * 20 - 10, // Random initial tilt (-10 to +10 degrees)
        });
      }
    }
    return memberData;
  }, []);

  useGSAP(
    () => {
      // Target all transparent image wrappers
      const cards = gsap.utils.toArray(".floating-head");

      cards.forEach((card: any) => {
        // 1. Gentle floating drift (sine wave movement on x/y)
        gsap.to(card, {
          x: "random(-15, 15)",
          y: "random(-15, 15)",
          duration: "random(4, 7)", // each moves at a different speed
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        });

        // 2. High-frequency 'shaking' vibration (rotation jitter)
        gsap.to(card, {
          rotation: "+=1.8", // jitter amount
          duration: 0.1, // frequency
          repeat: -1,
          yoyo: true,
          ease: "none",
          delay: Math.random(), // desynchronizes the shaking
        });
      });
    },
    { scope: containerRef },
  );

  return (
    <>
      {/* Scope container */}
      <section ref={containerRef} className="team-container">
        <h2 className="bg-watermark">THE SQUAD</h2>

        {members.map((m) => (
          <div
            key={m.id}
            className="floating-head absolute z-10 transition-transform duration-300 hover:scale-125"
            style={{
              width: m.size,
              height: m.size,
              top: m.top,
              left: m.left,
              // rotation is controlled by GSAP
              rotate: `${m.initialRotation}deg`,
            }}
          >
            <Image
              src={m.image}
              alt={`Team member ${m.id + 1}`}
              fill
              // Ensure the image keeps its internal aspect ratio but fills the space
              className="object-contain grayscale hover:grayscale-0 transition-all duration-300"
              priority={m.id < 5} // Load first 5 images quickly
            />
          </div>
        ))}

        <style jsx global>{`
          /* Global scope required for next/image classes and position forcing */

          .team-container {
            position: relative;
            width: 100vw;
            height: 100vh;
            background: #ffffff; /* White background */
            overflow: hidden;
            display: flex;
            align-items: center;
            justify-content: center;
          }

          .bg-watermark {
            position: absolute;
            font-size: 20vw;
            font-weight: 900;
            color: #f7f7f7; /* Very subtle text on white */
            z-index: 0;
            pointer-events: none;
            letter-spacing: -2rem;
            opacity: 0.8;
          }

          /* next/image wrapper must have backface-visibility hidden to stop blurry text during GSAP */
          .floating-head {
            position: absolute;
            backface-visibility: hidden;
            will-change: transform;
            cursor: pointer;
          }

          /* Bring hovered head to the very front */
          .floating-head:hover {
            z-index: 100 !important;
          }

          .floating-head .grayscale {
            filter: grayscale(100%);
          }
          .floating-head:hover .grayscale {
            filter: grayscale(0%);
          }
        `}</style>
      </section>
    </>
  );
};

export default TeamSection;
