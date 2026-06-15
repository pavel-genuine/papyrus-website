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
  }, []);

  const containerRef = useRef<HTMLDivElement>(null);

  // Generate 21 members with fixed, non-overlapping coordinates
  const members = useMemo(() => {
    if (width === 0) return [];

    const isMobile = width <= 768;
    const isTablet = width > 768 && width <= 1200; // 768 থেকে 1200 রেঞ্জ ট্র্যাক করার জন্য

    // ১. গ্রিড রো এবং কলাম ব্রেকপয়েন্ট নির্ধারণ
    let rows = 6;
    let cols = 5;

    if (isMobile) {
      rows = 11;
      cols = 3;
    } else if (isTablet) {
      rows = 8; // ট্যাবলেটের জন্য রো বাড়িয়ে ছড়ানো হয়েছে
      cols = 4; // ৪ কলাম করা হয়েছে যাতে ওভারল্যাপ না হয়
    }

    const memberData = [];

    // ২. সেল এর উইডথ এবং হাইট নির্ধারণ
    let cellWidth = 85 / cols;
    let cellHeight = 90 / rows;

    if (isMobile) {
      cellWidth = 85 / cols;
      cellHeight = 95 / rows;
    } else if (isTablet) {
      cellWidth = 88 / cols; // ট্যাবলেট স্ক্রিনে একটু বেশি স্পেস নেওয়ার জন্য
      cellHeight = 92 / rows;
    }

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

        // ৩. রেসপনসিভ ইমেজ সাইজিং (ডেক্সটপ অবিকৃত রাখা হয়েছে)
        let size = Math.floor(Math.random() * (165 - 135) + 320); // Desktop default

        if (isMobile) {
          size = Math.floor(Math.random() * (135 - 115) + 115);
        } else if (isTablet) {
          // ট্যাবলেটের জন্য পারফেক্ট ব্যালেন্সড সাইজ (১৭০px - ২১০px) যাতে ওভারল্যাপ না হয়
          size = Math.floor(Math.random() * (210 - 170) + 170);
        }

        memberData.push({
          id: index,
          image: `/assets/img/home-01/papyrus-about/papyrus-team/team%20(${index + 1}).png`,
          shape: "",
          size: size,
          top: `${top}%`,
          left: `${left}%`,
          initialRotation: Math.random() * 20 - 10,
        });
      }
    }
    return memberData;
  }, [width]);

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
            height: 230vh; /* ডেক্সটপের আগের হাইট অপরিবর্তিত আছে */
            background: #000000;
            overflow: hidden;
          }

          /* ট্যাবলেটের জন্য হাইট অ্যাডজাস্টমেন্ট (768px থেকে 1200px) */
          @media (min-width: 769px) and (max-width: 1200px) {
            .team-container {
              height: 250vh; /* ইমেজ ছড়ানোর জন্য হাইট সামান্য বাড়ানো হয়েছে */
              overflow-y: auto;
            }
          }

          /* মোবাইলের জন্য (768px বা তার নিচে) */
          @media (max-width: 768px) {
            .team-container {
              height: 190vh;
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
            object-fit: contain !important;
          }
        `}</style>
      </section>
    </>
  );
};

export default PapyrusTeam;
