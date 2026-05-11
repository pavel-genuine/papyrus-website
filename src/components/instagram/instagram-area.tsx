import React, { useRef, useMemo } from "react";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const TeamSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  // Generate 21 members with fixed, non-overlapping coordinates
  const members = useMemo(() => {
    // 1. Grid Sampling to ensure zero overlap
    const rows = 3;
    const cols = 7; // 3x7 = 21 cells
    const memberData = [];

    const cellWidth = 100 / cols;
    const cellHeight = 100 / rows;

    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
        const index = r * cols + c;
        if (index >= 21) break;

        // Base cell coordinates
        const cellX = c * cellWidth;
        const cellY = r * cellHeight;

        // Scattered offset within the cell (max 10% to prevent collision with neighbor cell)
        const leftOffset = Math.random() * (cellWidth - 10) + 2;
        const topOffset = Math.random() * (cellHeight - 12) + 2;

        const left = cellX + leftOffset;
        const top = cellY + topOffset;

        memberData.push({
          id: index,
          image: `https://i.pravatar.cc/150?u=${index + 900}`, // Using Pravatar for full-color placeholders
          // Mapping only the specific text/burst shapes from your reference
          shape:
            index % 4 === 0
              ? "shape-pow"
              : index % 4 === 1
                ? "shape-wow"
                : index % 4 === 2
                  ? "shape-bam"
                  : "shape-omg",
          size: Math.floor(Math.random() * (165 - 135) + 135), // Fixed size range for better scattered feel
          top: `${top}%`,
          left: `${left}%`,
          initialRotation: Math.random() * 20 - 10,
        });
      }
    }
    return memberData;
  }, []);

  useGSAP(
    () => {
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
    { scope: containerRef },
  );

  return (
    <>
      <section ref={containerRef} className="team-container">
        <h2 className="watermark">TEAM DOODLE</h2>

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
                {/* Images are square, borderless, and full color */}
                <Image src={m.image} alt="member" fill className="photo" />
              </div>
              {/* Optional dynamic nametag with brute aesthetic */}
              <div className="tag">DLR_{m.id + 1}</div>
            </div>
          </div>
        ))}

        <style jsx global>{`
          .team-container {
            position: relative;
            width: 100vw;
            height: 100vh;
            background: #000000; /* Solid Black Background */
            overflow: hidden;
            display: flex;
            align-items: center;
            justify-content: center;
          }

          .watermark {
            position: absolute;
            font-size: 15vw;
            font-weight: 950;
            color: #111; /* Subtle dark color on black */
            z-index: 0;
            pointer-events: none;
            letter-spacing: -1rem;
          }

          .team-card {
            position: absolute;
            z-index: 10;
            cursor: pointer;
            will-change: transform;
            transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          }

          /* Hover state brings the card to front and scales */
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
            background: #ffffff; /* White background for all doodle shapes */
            /* Add drop shadow for that hand-inked vector look */
            filter: drop-shadow(6px 6px 0px rgba(255, 255, 255, 0.05));
          }

          .img-container {
            position: relative;
            width: 85%;
            height: 85%;
            overflow: hidden;
            background: #111;
            /* Images have NO border */
          }

          .photo {
            object-fit: cover;
            /* No grayscale, image is full color */
          }

          /* --- THE 4 DOODLE TEXT-STYLES FROM YOUR REFERENCE --- */

          /* 1. POW: The irregular rounded bubble from top left */
          .shape-pow .doodle-shape {
            border-radius: 50% 50% 50% 50% / 60% 60% 40% 40%;
          }
          .shape-pow .img-container {
            border-radius: 50%;
          }

          /* 2. WOW: The exact multi-point starburst from the center top */
          .shape-wow .doodle-shape {
            clip-path: polygon(
              50% 0%,
              61% 35%,
              98% 35%,
              68% 57%,
              79% 91%,
              50% 70%,
              21% 91%,
              32% 57%,
              2% 35%,
              39% 35%
            );
          }
          .shape-wow .img-container {
            clip-path: inherit;
          }

          /* 3. BAM: The cloud-explosion with flat bottom from center left */
          .shape-bam .doodle-shape {
            clip-path: polygon(
              25% 10%,
              45% 5%,
              60% 15%,
              80% 5%,
              95% 30%,
              85% 55%,
              95% 85%,
              65% 90%,
              45% 95%,
              25% 90%,
              5% 85%,
              15% 55%,
              5% 30%
            );
          }

          /* 4. OMG: The speech bubble with tail from the bottom right */
          .shape-omg .doodle-shape {
            border-radius: 20px;
          }
          .shape-omg .doodle-shape::after {
            content: "";
            position: absolute;
            bottom: -15px;
            left: 25px;
            border-left: 15px solid #ffffff;
            border-bottom: 15px solid transparent;
            border-top: 15px solid #ffffff;
            border-right: 15px solid transparent;
            transform: rotate(45deg);
          }

          /* Brute tag aesthetic */
          .tag {
            position: absolute;
            bottom: -5px;
            background: #000000;
            color: #ffffff;
            padding: 1px 6px;
            font-weight: 900;
            font-size: 10px;
            border: 2px solid #ffffff;
          }
        `}</style>
      </section>
    </>
  );
};

export default TeamSection;
