import React, { useRef, useMemo, useState, useEffect } from "react";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const PapyrusTeam = () => {
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);

    // Smooth resize update listener
    const handleResize = () => {
      setWidth(window.innerWidth);
      setHeight(window.innerHeight);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []); // Added dependency array to stop infinite rendering loops

  const containerRef = useRef<HTMLDivElement>(null);

  // Generate 21 members with fixed, non-overlapping coordinates
  const members = useMemo(() => {
    if (width === 0) return [];

    const isMobile = width <= 768;

    // DESKTOP stays EXACTLY as your provided values (6 rows, 5 cols). MOBILE shifts safely.
    const rows = isMobile ? 11 : 6;
    const cols = isMobile ? 3 : 5;
    const memberData = [];

    // DESKTOP uses your exact values (85/cols and 90/rows). MOBILE tightens grid scales.
    const cellWidth = isMobile ? 85 / cols : 85 / cols;
    const cellHeight = isMobile ? 95 / rows : 90 / rows;

    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
        const index = r * cols + c;
        if (index >= 30) break;

        // Base cell coordinates
        const cellX = c * cellWidth;
        const cellY = r * cellHeight;

        // Scattered offset within the cell
        const leftOffset = Math.random() * (cellWidth - 10) + 2;
        const topOffset = Math.random() * (cellHeight - 12) + 2;

        const left = cellX + leftOffset;
        const top = cellY + topOffset;

        // DESKTOP stays exactly your size calculation. MOBILE drops size to fix overlapping.
        const size = isMobile
          ? Math.floor(Math.random() * (135 - 115) + 115)
          : Math.floor(Math.random() * (165 - 135) + 320);

        memberData.push({
          id: index,
          image: `/assets/img/home-01/papyrus-team/team%20(${index + 1}).png`,
          shape: "",
          size: size,
          top: `${top}%`,
          left: `${left}%`,
          initialRotation: Math.random() * 20 - 10,
        });
      }
    }
    return memberData;
  }, [width]); // Triggers cleanly when screen changes

  useGSAP(
    () => {
      if (members.length === 0) return;
      const cards = gsap.utils.toArray(".team-card");
      cards.forEach((card: any) => {
        // Gentle floating drift
        gsap.to(card, {
          x: "random(-10, 10)",
          y: "random(-10, 10)",
          duration: "random(4, 7)",
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        });

        // Rapid, hand-drawn comic vibration effect
        gsap.to(card, {
          rotation: "+=1.5",
          duration: 0.1,
          repeat: -1,
          yoyo: true,
          ease: "none",
          delay: Math.random(),
        });
      });
    },
    { scope: containerRef, dependencies: [members] },
  );

  return (
    <>
      <section ref={containerRef} className="team-container">
        {members.map((m) => (
          <div
            key={m.id}
            className={`team-card ${m.shape}`}
            style={{
              width: m.size,
              height: m.size,
              top: m.top,
              left: m.left,
              transform: `rotate(${m.initialRotation}deg)`,
            }}
          >
            <div className="doodle-shape">
              <div className="img-container">
                <Image
                  src={m.image}
                  alt="member"
                  fill
                  className="photo"
                  priority={m.id < 6}
                />
              </div>
            </div>
          </div>
        ))}

        <style jsx global>{`
          .team-container {
            position: relative;
            width: 100vw;
            height: 230vh; /* Keeps your exact desktop height */
            background: #000000;
            overflow: hidden;
          }

          /* Targets small screens only - No changes applied to desktop layout viewports */
          @media (max-width: 768px) {
            .team-container {
              height: 190vh; /* Scaled down for mobile layout heights */
              overflow-y: auto;
            }
          }

          .team-card {
            position: absolute;
            z-index: 10;
            cursor: pointer;
            will-change: transform;
            transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          }

          .team-card:hover {
            z-index: 100 !important;
            transform: scale(1.3) rotate(0deg) !important;
          }

          .doodle-shape {
            position: relative;
            width: 100%;
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
          }

          .img-container {
            position: relative;
            width: 100%;
            height: 100%;
            overflow: hidden;
          }

          .photo {
            object-fit: contain !important; /* Contain handles transparent backgrounds perfectly */
          }
        `}</style>
      </section>
    </>
  );
};

export default PapyrusTeam;
