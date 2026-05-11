import React, { useRef, useMemo } from "react";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const TeamSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const members = useMemo(() => {
    // 5x5 grid (25 spots) for 21 members to ensure lots of space for BIG images
    const grid = [];
    for (let r = 0; r < 5; r++) {
      for (let c = 0; c < 5; c++) {
        grid.push({ r, c });
      }
    }

    const selectedSpots = grid.sort(() => Math.random() - 0.5).slice(0, 21);

    return selectedSpots.map((spot, i) => {
      // Place within the 20% grid zones with slight random nudges
      const left = spot.c * 20 + (Math.random() * 5 + 2);
      const top = spot.r * 20 + (Math.random() * 5 + 2);

      return {
        id: i,
        // Replace with your actual caricature transparent PNGs
        image: `/team/member-${i + 1}.png`,
        size: Math.floor(Math.random() * (300 - 220) + 220), // BIGGER: 220px to 300px
        top: `${top}%`,
        left: `${left}%`,
        rotation: Math.random() * 15 - 7.5,
      };
    });
  }, []);

  useGSAP(
    () => {
      const heads = gsap.utils.toArray(".caricature-head");
      heads.forEach((head: any) => {
        // Gentle floating
        gsap.to(head, {
          x: "random(-15, 15)",
          y: "random(-15, 15)",
          duration: "random(3, 6)",
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        });

        // Subtle comic-style vibration
        gsap.to(head, {
          rotation: "+=1.2",
          duration: 0.15,
          repeat: -1,
          yoyo: true,
          ease: "none",
          delay: Math.random(),
        });
      });
    },
    { scope: containerRef },
  );

  return (
    <section ref={containerRef} className="team-viewport">
      <h2 className="bg-title">THE CREW</h2>

      {members.map((m) => (
        <div
          key={m.id}
          className="caricature-head"
          style={{
            width: m.size,
            height: m.size,
            top: m.top,
            left: m.left,
            transform: `rotate(${m.rotation}deg)`,
          }}
        >
          <div className="img-wrapper">
            <Image
              src={m.image}
              alt="Team Caricature"
              fill
              className="photo"
              priority
            />
          </div>
        </div>
      ))}

      <style jsx global>{`
        .team-viewport {
          position: relative;
          width: 100vw;
          height: 100vh;
          background: #ffffff;
          overflow: hidden;
        }

        .bg-title {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          font-size: 20vw;
          font-weight: 950;
          color: #f2f2f2;
          z-index: 0;
          pointer-events: none;
          letter-spacing: -1rem;
        }

        .caricature-head {
          position: absolute;
          z-index: 10;
          cursor: pointer;
          will-change: transform;
          transition: transform 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        }

        .caricature-head:hover {
          z-index: 100 !important;
          transform: scale(1.2) rotate(0deg) !important;
        }

        .img-wrapper {
          position: relative;
          width: 100%;
          height: 100%;
          /* No borders, transparent background */
        }

        .photo {
          object-contain: cover;
          /* Full color, no grayscale filter */
        }
      `}</style>
    </section>
  );
};

export default TeamSection;
