"use client";

import React, { useState, useEffect, Suspense, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import shape from "@/assets/img/home-01/portfolio/shape1.jpg";
import { useIsotop } from "@/hooks/use-isotop";
import Modal from "react-bootstrap/Modal";
import { createPortal } from "react-dom";
import { client } from "@/sanity/lib/client";

// Shared Dynamic Data, Types & Logic Import
import {
  static_service_data,
  mergeStaticAndSanityData,
  ServiceData,
  SubItem,
  PortfolioItem,
} from "@/data/service-data";

const getEmbedUrl = (url: any) => {
  if (!url || typeof url !== "string") return "";
  try {
    let videoId = "";
    const trimmedUrl = url.trim();

    if (trimmedUrl.includes("watch?v=")) {
      videoId = trimmedUrl.split("watch?v=")[1]?.split("&")[0] || "";
    } else if (trimmedUrl.includes("youtu.be/")) {
      videoId = trimmedUrl.split("youtu.be/")[1]?.split(/[?#]/)[0] || "";
    } else if (trimmedUrl.includes("/shorts/")) {
      videoId = trimmedUrl.split("/shorts/")[1]?.split(/[?#]/)[0] || "";
    } else if (trimmedUrl.includes("/embed/")) {
      return trimmedUrl;
    }
    return videoId ? `https://www.youtube.com/embed/${videoId}` : trimmedUrl;
  } catch (error) {
    console.error("YouTube URL parsing error:", error);
    return "";
  }
};

const tvcYoutubeUrls = [
  ,
  "https://www.youtube.com/embed/OCTB_Sa07sA", // index 1
  "https://www.youtube.com/embed/NBw8akBIzrg", // index 2
  "https://www.youtube.com/embed/fh5EQnNrJzM", // index 3
  "https://www.youtube.com/embed/zxY_lA7zeJk", // index 4
  "https://www.youtube.com/embed/kFx5BkRUiDE", // index 5
  "https://www.youtube.com/embed/LZoncSoN5uI", // index 6
  "https://www.youtube.com/embed/ao6Ka-zHOew", // index 7
  "https://www.youtube.com/embed/HKkNpX945O0", // index 8
  "https://www.youtube.com/embed/TR833DwttyA", // index 9
  "https://www.youtube.com/embed/_0hHGdVTq8M", // index 10
  "https://www.youtube.com/embed/i0bTZdPnsOE", // index 11
  "https://www.youtube.com/embed/fh5EQnNrJzM", // index 12
  "https://www.youtube.com/embed/LZoncSoN5uI", // index 13
  "https://www.youtube.com/embed/Nhvi0TvxS6E", // index 14
  "https://www.youtube.com/embed/403f6-iGrYc", // index 15
  "https://www.youtube.com/embed/FqzXlfjXRT0", // index 16
  "https://www.youtube.com/embed/ezZzHU8cQoc", // index 17
  "https://www.youtube.com/embed/oyMGZ3MuHSQ", // index 18
  "https://www.youtube.com/embed/-RONGs06cAg", // index 19
  "https://www.youtube.com/embed/HBouDycfTFI", // index 20
  "https://www.youtube.com/embed/WoIPSIOr55k", // index 21
  "https://www.youtube.com/embed/Im0RkJ3WdME", // index 22
  "https://www.youtube.com/embed/Xg-Mp2iWSj8", // index 23
  "https://www.youtube.com/embed/PheBReZDBIk", // index 24
  "https://www.youtube.com/embed/vpqvbCCl-lg", // index 25
  // ── এখান থেকে স্ক্রিনশট অনুযায়ী নতুন লিঙ্কগুলো ক্রমানুসারে অ্যাড করা হলো ──
  "https://www.youtube.com/embed/byyIECUZ0ew", // index 26 -> Meena Click (tvc-banner (26).png)
  "https://www.youtube.com/embed/-Rmqrix5Wzw", // index 27 -> জরায়ুমুখ ক্যান্সার (tvc-banner (27).png)
  "https://www.youtube.com/embed/rP9mO7bpA0Q", // index 28 -> Jafflong Tea (tvc-banner (28).png)
  "https://www.youtube.com/embed/VcX_nqsn4aw", // index 29 -> Jamuna Cash Back (tvc-banner (29).png)
  "https://www.youtube.com/embed/lM36azJ2J4M", // index 30 -> Igloo বাবার জন্য কথামালা (tvc-banner (30).png)
  "https://www.youtube.com/embed/ty3a0Tf_FmE", // index 31 -> Igloo Logo (tvc-banner (31).png)
  "https://www.youtube.com/embed/z8G634sn630", // index 32 -> Good Luck Pen (tvc-banner (32).png)
  "https://www.youtube.com/embed/PrfMuYePF70", // index 33 -> Eagle Coil (tvc-banner (33).png)
  "https://www.youtube.com/embed/RTAbjiEzF20", // index 34 -> Good Luck Pen 2 (tvc-banner (34).png)
  "https://www.youtube.com/embed/-7G0UUMJVt8", // index 35 -> Champ Juice / Milk (tvc-banner (35).png)
  "https://www.youtube.com/embed/Lq9GUZPqwJo", // index 36 -> প্লট রেডি (tvc-banner (36).png)
  "https://www.youtube.com/embed/EWu5zuBKzmc", // index 37 -> তারা লিকুইড ক্লিনার (tvc-banner (37).png)
  "https://www.youtube.com/embed/Q18Wr3dM7tk", // index 38 -> বসুন্ধরা নুডুলস (tvc-banner (38).png)
  "https://www.youtube.com/embed/We_fy6Ehpyw", // index 39 -> বিনা তারের পাঠশালা Green (tvc-banner (39).png)
  "https://www.youtube.com/watch?v=Ps1tcAZ94n8", // index 40 -> বসুন্ধরা আটা ময়দা সুজি (tvc-banner (40).png)
  "https://www.youtube.com/embed/1sMeuwoiSn0", // index 40 -> বসুন্ধরা আটা ময়দা সুজি (tvc-banner (40).png)
  "https://www.youtube.com/embed/BT9N7srMjTw", // index 41 -> Chartered Life Insurance (tvc-banner (41).png)
  "https://www.youtube.com/embed/KRtb5vMrgM0", // index 42 -> Haier Logo (tvc-banner (42).png)
  "https://www.youtube.com/watch?v=6kIieLYHsHU", // index 43 -> Haier AC Clean Cool (tvc-banner (43).png)
  "https://www.youtube.com/embed/vELrRtS4tw4", // index 44 -> আকিজ প্লাস্টিকস (tvc-banner (44).png)
  "https://www.youtube.com/watch?v=oJx2yIx2J8Y", // index 45 -> Jhalak Detergent Powder (tvc-banner (45).png)
  "https://www.youtube.com/embed/QP31KrK8dmM", // index 46 -> বই পড়া দৃশ্য (tvc-banner (46).png)
  "https://www.youtube.com/embed/_yPvcg7R9b4", // index 48 -> বাবা ও মেয়ে কাপড়ের ব্যাগ দৃশ্য (tvc-banner (48).png)
  "https://www.youtube.com/watch?v=QP31KrK8dmM", // index 47 -> অফিস/টেবিল সিন (tvc-banner (47).png)
];

// Inject static images arrays onto the structure dynamically if required
static_service_data[0].subItems[0].data = Array.from(
  { length: 51 },
  (_, index) => ({
    id: index + 1,
    src: `/assets/img/home-01/portfolio/Logo/logo (${index + 1}).png`,
    title: `Logo Project ${index + 1}`,
  }),
);
static_service_data[0].subItems[1].data = Array.from(
  { length: 76 },
  (_, index) => ({
    id: index + 101,
    mediaType: "image",
    src: `/assets/img/home-01/portfolio/Packaging/packaging (${index + 1}).png`,
    title: `Packaging Project ${index + 1}`,
  }),
);
static_service_data[0].subItems[2].data = Array.from(
  { length: 49 },
  (_, index) => ({
    id: index + 101,
    mediaType: "image",
    src: `/assets/img/home-01/portfolio/Press-add/press-ad (${index + 1}).png`,
    title: `Press Ad Project ${index + 1}`,
  }),
);
static_service_data[0].subItems[5].data = Array.from(
  { length: 23 },
  (_, index) => ({
    id: index + 101,
    mediaType: "image",
    src: `/assets/img/home-01/portfolio/Brochure-Catalogue/Brochure-catalogue (${index + 1}).png`,
    title: `Brochure Project ${index + 1}`,
  }),
);
static_service_data[0].subItems[6].data = Array.from(
  { length: 33 },
  (_, index) => ({
    id: index + 101,
    mediaType: "image",
    src: `/assets/img/home-01/portfolio/Calandar/calandar (${index + 1}).png`,
    title: `Calendar Project ${index + 1}`,
  }),
);
static_service_data[0].subItems[8].data = Array.from(
  { length: 48 },
  (_, index) => ({
    id: index + 101,
    mediaType: "youtube",
    src: `/assets/img/home-01/portfolio/TVC-Banner/tvc-banner (${index + 1}).png`,
    title: `TVC Project ${index + 1}`,
    youtubeUrl: tvcYoutubeUrls[index + 1] || "",
  }),
);
static_service_data[0].subItems[9].data = Array.from(
  { length: 1 },
  (_, index) => ({
    id: index + 101,
    mediaType: "video",
    src: `/assets/img/home-01/portfolio/AV/AV (${index + 1}).mp4`,
    title: `AV Project ${index + 1}`,
  }),
);

// Populate BTL nested elements with local imagery paths dynamically
if (static_service_data[1].subItems[0].nestedItems) {
  static_service_data[1].subItems[0].nestedItems[0].data = Array.from(
    { length: 12 },
    (_, index) => ({
      id: index + 1001,
      mediaType: "image",
      src: `/assets/img/home-01/portfolio/Events/1.Manikganj Model High School 100 Years Celebration Event/manikganj (${index + 1}).jpg`,
      title: `Manikganj Project ${index + 1}`,
    }),
  );
  static_service_data[1].subItems[0].nestedItems[1].data = Array.from(
    { length: 18 },
    (_, index) => ({
      id: index + 1101,
      mediaType: "image",
      src: `/assets/img/home-01/portfolio/Events/2.6th-generation Kia Sportage 2026 Launching Event/kia (${index + 1}).jpg`,
      title: `Kia Sportage Project ${index + 1}`,
    }),
  );
  static_service_data[1].subItems[0].nestedItems[2].data = Array.from(
    { length: 6 },
    (_, index) => ({
      id: index + 1201,
      mediaType: "image",
      src: `/assets/img/home-01/portfolio/Events/3. EC Daily pakage reviled event/ec-package (${index + 1}).jpg`,
      title: `EC Package Project ${index + 1}`,
    }),
  );
  static_service_data[1].subItems[0].nestedItems[3].data = Array.from(
    { length: 1 },
    (_, index) => ({
      id: index + 1301,
      mediaType: "video",
      src: `/assets/img/home-01/portfolio/Events/4. Finlay South City Shopping Mall Grand Launching Event/south-city (${index + 1}).mp4`,
      title: `Finlay Mall Project ${index + 1}`,
    }),
  );
  static_service_data[1].subItems[0].nestedItems[4].data = Array.from(
    { length: 11 },
    (_, index) => ({
      id: index + 1401,
      mediaType: "image",
      src: `/assets/img/home-01/portfolio/Events/5. Forland, Metal Motors Limited 6th Dhaka Commercial Automotive Show 2024/img (${index + 1}).jpg`,
      title: `Forland Automotive Project ${index + 1}`,
    }),
  );
  static_service_data[1].subItems[0].nestedItems[5].data = Array.from(
    { length: 6 },
    (_, index) => ({
      id: index + 1501,
      mediaType: "image",
      src: `/assets/img/home-01/portfolio/Events/6. EC sunflower Product Launching Ceremony/img (${index + 1}).jpg`,
      title: `EC Sunflower Project ${index + 1}`,
    }),
  );
  static_service_data[1].subItems[0].nestedItems[6].data = Array.from(
    { length: 12 },
    (_, index) => ({
      id: index + 1601,
      mediaType: "image",
      src: `/assets/img/home-01/portfolio/Events/7. ACI Motors,5th Dhaka Commercial Automotive Show 2023/img (${index + 1}).jpg`,
      title: `ACI Motors Project ${index + 1}`,
    }),
  );
  static_service_data[1].subItems[0].nestedItems[7].data = Array.from(
    { length: 16 },
    (_, index) => ({
      id: index + 1701,
      mediaType: "image",
      src: `/assets/img/home-01/portfolio/Events/8. Chartered Life Annual Awards Night 2022/img (${index + 1}).jpg`,
      title: `Chartered Life Awards Project ${index + 1}`,
    }),
  );
  static_service_data[1].subItems[0].nestedItems[8].data = Array.from(
    { length: 27 },
    (_, index) => ({
      id: index + 1801,
      mediaType: "image",
      src: `/assets/img/home-01/portfolio/Events/9.Rupayan City Uttara, Project Handover Ceremony/img (${index + 1}).jpg`,
      title: `Rupayan Handover Project ${index + 1}`,
    }),
  );
  static_service_data[1].subItems[0].nestedItems[9].data = Array.from(
    { length: 21 },
    (_, index) => ({
      id: index + 1901,
      mediaType: "image",
      src: `/assets/img/home-01/portfolio/Events/10.Bosudhara Group, চেতনার বর্ণমালা Event/img (${index + 1}).jpg`,
      title: `Bosudhara Event Project ${index + 1}`,
    }),
  );
  static_service_data[1].subItems[0].nestedItems[10].data = Array.from(
    { length: 26 },
    (_, index) => ({
      id: index + 2001,
      mediaType: "image",
      src: `/assets/img/home-01/portfolio/Events/11. Pharmasia Limited,Pharmasia Conference 2022/img (${index + 1}).jpg`,
      title: `Pharmasia Conference Project ${index + 1}`,
    }),
  );
  static_service_data[1].subItems[0].nestedItems[11].data = Array.from(
    { length: 33 },
    (_, index) => ({
      id: index + 2101,
      mediaType: "image",
      src: `/assets/img/home-01/portfolio/Events/12. Chartered Life Insurance Company Limited, Annual Award Program 2021/img (${index + 1}).jpg`,
      title: `Chartered Life Conf Project ${index + 1}`,
    }),
  );
  static_service_data[1].subItems[0].nestedItems[12].data = Array.from(
    { length: 13 },
    (_, index) => ({
      id: index + 2201,
      mediaType: "image",
      src: `/assets/img/home-01/portfolio/Events/13. চার্টার্ড লাইফ ইন্স্যুরেন্স কোম্পানী লিমিটেড, রং তুলিতে বিজয় উৎসব/img (${index + 1}).jpg`,
      title: `রং তুলিতে মুক্তিযুদ্ধ Project ${index + 1}`,
    }),
  );
  static_service_data[1].subItems[0].nestedItems[13].data = Array.from(
    { length: 12 },
    (_, index) => ({
      id: index + 2301,
      mediaType: "image",
      src: `/assets/img/home-01/portfolio/Events/14. Channel I + Safe Hands,রং তুলিতে মুক্তিযুদ্ধ Event/img (${index + 1}).jpg`,
      title: `Channel I Event Project ${index + 1}`,
    }),
  );
  static_service_data[1].subItems[0].nestedItems[14].data = Array.from(
    { length: 23 },
    (_, index) => ({
      id: index + 2401,
      mediaType: "image",
      src: `/assets/img/home-01/portfolio/Events/15. Fogg Spcial Audition Launching Press Conference/img (${index + 1}).jpg`,
      title: `Fogg Press Project ${index + 1}`,
    }),
  );
  static_service_data[1].subItems[0].nestedItems[15].data = Array.from(
    { length: 6 },
    (_, index) => ({
      id: index + 2501,
      mediaType: "image",
      src: `/assets/img/home-01/portfolio/Events/16. DT( Dhaka Tribune ),5th Anniversary of DT/img (${index + 1}).jpg`,
      title: `Dhaka Tribune Project ${index + 1}`,
    }),
  );
  static_service_data[1].subItems[0].nestedItems[16].data = Array.from(
    { length: 4 },
    (_, index) => ({
      id: index + 2601,
      mediaType: "image",
      src: `/assets/img/home-01/portfolio/Events/17. Jafflong Tea Event/img (${index + 1}).jpg`,
      title: `Jafflong Tea Project ${index + 1}`,
    }),
  );
  static_service_data[1].subItems[0].nestedItems[17].data = Array.from(
    { length: 50 },
    (_, index) => ({
      id: index + 2701,
      mediaType: "image",
      src: `/assets/img/home-01/portfolio/Events/18. Launching of CLUB LOVELLO/img (${index + 1}).jpg`,
      title: `Club Lovello Project ${index + 1}`,
    }),
  );
  static_service_data[1].subItems[0].nestedItems[18].data = Array.from(
    { length: 45 },
    (_, index) => ({
      id: index + 2801,
      mediaType: "image",
      src: `/assets/img/home-01/portfolio/Events/19. Kulna Titens Activation Work/img (${index + 1}).jpg`,
      title: `Khulna Titans Project ${index + 1}`,
    }),
  );

  if (static_service_data[1].subItems[0].nestedItems[19].deepItems) {
    static_service_data[1].subItems[0].nestedItems[19].deepItems[0].data =
      Array.from({ length: 1 }, (_, index) => ({
        id: index + 3001,
        mediaType: "image",
        src: `/assets/img/home-01/portfolio/Events/20.Bank Asia Limited/Aglabazar Branch Opening/img (${index + 1}).jpg`,
        title: `Aglabazar Project ${index + 1}`,
      }));
    static_service_data[1].subItems[0].nestedItems[19].deepItems[1].data =
      Array.from({ length: 2 }, (_, index) => ({
        id: index + 3101,
        mediaType: "image",
        src: `/assets/img/home-01/portfolio/Events/20.Bank Asia Limited/Airport Branding/img (${index + 1}).jpg`,
        title: `Airport Branding Project ${index + 1}`,
      }));
    static_service_data[1].subItems[0].nestedItems[19].deepItems[2].data =
      Array.from({ length: 5 }, (_, index) => ({
        id: index + 3201,
        mediaType: "image",
        src: `/assets/img/home-01/portfolio/Events/20.Bank Asia Limited/Annual General Meeting/img (${index + 1}).jpg`,
        title: `AGM Project ${index + 1}`,
      }));
    static_service_data[1].subItems[0].nestedItems[19].deepItems[3].data =
      Array.from({ length: 1 }, (_, index) => ({
        id: index + 3301,
        mediaType: "image",
        src: `/assets/img/home-01/portfolio/Events/20.Bank Asia Limited/CSR Event,Nowakhali Chatkhil/img (${index + 1}).jpg`,
        title: `CSR Event Project ${index + 1}`,
      }));
    static_service_data[1].subItems[0].nestedItems[19].deepItems[4].data =
      Array.from({ length: 1 }, (_, index) => ({
        id: index + 3401,
        mediaType: "image",
        src: `/assets/img/home-01/portfolio/Events/20.Bank Asia Limited/Narshindi Branch Opening/img (${index + 1}).jpg`,
        title: `Narshindi Project ${index + 1}`,
      }));
    static_service_data[1].subItems[0].nestedItems[19].deepItems[5].data =
      Array.from({ length: 1 }, (_, index) => ({
        id: index + 3501,
        mediaType: "image",
        src: `/assets/img/home-01/portfolio/Events/20.Bank Asia Limited/Sylhet Branch Opening/img (${index + 1}).jpg`,
        title: `Sylhet Project ${index + 1}`,
      }));
  }
}

if (static_service_data[1].subItems[1].nestedItems) {
  static_service_data[1].subItems[1].nestedItems[0].data = Array.from(
    { length: 6 },
    (_, index) => ({
      id: index + 11001,
      mediaType: "image",
      src: `/assets/img/home-01/portfolio/ACTIVATIONS/AKIJ PLASTICS/img (${index + 1}).jpg`,
      title: `Activations ${index + 1}`,
    }),
  );
  static_service_data[1].subItems[1].nestedItems[1].data = Array.from(
    { length: 3 },
    (_, index) => ({
      id: index + 1002,
      mediaType: "image",
      src: `/assets/img/home-01/portfolio/ACTIVATIONS/BERGER EASY CLEAN ACTIVATION/img (${index + 1}).jpg`,
      title: `Activations ${index + 1}`,
    }),
  );
  static_service_data[1].subItems[1].nestedItems[2].data = Array.from(
    { length: 4 },
    (_, index) => ({
      id: index + 1003,
      mediaType: "image",
      src: `/assets/img/home-01/portfolio/ACTIVATIONS/DABUR RED TOOTHPASTE/img (${index + 1}).jpg`,
      title: `Activations ${index + 1}`,
    }),
  );
  static_service_data[1].subItems[1].nestedItems[3].data = Array.from(
    { length: 5 },
    (_, index) => ({
      id: index + 1004,
      mediaType: "image",
      src: `/assets/img/home-01/portfolio/ACTIVATIONS/EAGLE SUPER AEROSOL/img (${index + 1}).jpg`,
      title: `Activations Project ${index + 1}`,
    }),
  );
  static_service_data[1].subItems[1].nestedItems[4].data = Array.from(
    { length: 8 },
    (_, index) => ({
      id: index + 1005,
      mediaType: "image",
      src: `/assets/img/home-01/portfolio/ACTIVATIONS/FREEDOM SANITARY NAPKIN/img (${index + 1}).jpg`,
      title: `Activations Project ${index + 1}`,
    }),
  );
  static_service_data[1].subItems[1].nestedItems[5].data = Array.from(
    { length: 6 },
    (_, index) => ({
      id: index + 1006,
      mediaType: "image",
      src: `/assets/img/home-01/portfolio/ACTIVATIONS/Mr White/img (${index + 1}).jpg`,
      title: `Activations Project ${index + 1}`,
    }),
  );
  static_service_data[1].subItems[1].nestedItems[6].data = Array.from(
    { length: 19 },
    (_, index) => ({
      id: index + 1007,
      mediaType: "image",
      src: `/assets/img/home-01/portfolio/ACTIVATIONS/QUAZI ENTERPRISES/CARAVAN ACTIVATIONS/img (${index + 1}).jpg`,
      title: `Activations Project ${index + 1}`,
    }),
  );
  static_service_data[1].subItems[1].nestedItems[7].data = Array.from(
    { length: 9 },
    (_, index) => ({
      id: index + 1008,
      mediaType: "image",
      src: `/assets/img/home-01/portfolio/ACTIVATIONS/SAFE HANDS/img (${index + 1}).png`,
      title: `Activations Project ${index + 1}`,
    }),
  );
  static_service_data[1].subItems[1].nestedItems[8].data = Array.from(
    { length: 2 },
    (_, index) => ({
      id: index + 1009,
      mediaType: "image",
      src: `/assets/img/home-01/portfolio/ACTIVATIONS/Wonder/img (${index + 1}).jpg`,
      title: `Activations Project ${index + 1}`,
    }),
  );
  static_service_data[1].subItems[1].nestedItems[9].data = Array.from(
    { length: 4 },
    (_, index) => ({
      id: index + 10010,
      mediaType: "image",
      src: `/assets/img/home-01/portfolio/ACTIVATIONS/SAVLON HAND WASH/img (${index + 1}).jpg`,
      title: `Activations Project ${index + 1}`,
    }),
  );
}

if (static_service_data[1].subItems[2].nestedItems) {
  static_service_data[1].subItems[2].nestedItems[0].data = Array.from(
    { length: 2 },
    (_, index) => ({
      id: index + 2001,
      mediaType: "image",
      src: `/assets/img/home-01/portfolio/STALLS/ACI – STALL DESIGN AND EXECUTION/img (${index + 1}).jpg`,
      title: `Stalls Project ${index + 1}`,
    }),
  );
  static_service_data[1].subItems[2].nestedItems[1].data = Array.from(
    { length: 4 },
    (_, index) => ({
      id: index + 2002,
      mediaType: "image",
      src: `/assets/img/home-01/portfolio/STALLS/AIRPORT IMMIGRATION BOOTH BRANDING/img (${index + 1}).jpg`,
      title: `Stalls Project ${index + 1}`,
    }),
  );
  static_service_data[1].subItems[2].nestedItems[2].data = Array.from(
    { length: 2 },
    (_, index) => ({
      id: index + 2003,
      mediaType: "image",
      src: `/assets/img/home-01/portfolio/STALLS/FREEDOM - DITF STALL EXECUTION/img (${index + 1}).jpg`,
      title: `Stalls Project ${index + 1}`,
    }),
  );
  static_service_data[1].subItems[2].nestedItems[3].data = Array.from(
    { length: 2 },
    (_, index) => ({
      id: index + 2004,
      mediaType: "image",
      src: `/assets/img/home-01/portfolio/STALLS/GLOBAL BRAND STALL DESIGN AND EXECUTION/img (${index + 1}).jpg`,
      title: `Stalls Project ${index + 1}`,
    }),
  );
  static_service_data[1].subItems[2].nestedItems[4].data = Array.from(
    { length: 2 },
    (_, index) => ({
      id: index + 2005,
      mediaType: "image",
      src: `/assets/img/home-01/portfolio/STALLS/GUARDIAN STALL DESIGN AND EXECUTION/img (${index + 1}).jpg`,
      title: `Stalls Project ${index + 1}`,
    }),
  );
  static_service_data[1].subItems[2].nestedItems[5].data = Array.from(
    { length: 4 },
    (_, index) => ({
      id: index + 2006,
      mediaType: "image",
      src: `/assets/img/home-01/portfolio/STALLS/METAL – STALL DESIGN AND EXECUTION/img (${index + 1}).jpg`,
      title: `Stalls Project ${index + 1}`,
    }),
  );
  static_service_data[1].subItems[2].nestedItems[6].data = Array.from(
    { length: 6 },
    (_, index) => ({
      id: index + 2007,
      mediaType: "image",
      src: `/assets/img/home-01/portfolio/STALLS/RUPAYAN - STALL DESIGN & EXECUTION/img (${index + 1}).png`,
      title: `Stalls Project ${index + 1}`,
    }),
  );
  static_service_data[1].subItems[2].nestedItems[7].data = Array.from(
    { length: 7 },
    (_, index) => ({
      id: index + 2008,
      mediaType: "image",
      src: `/assets/img/home-01/portfolio/STALLS/SHANTA HOLDINGS – STALL DESIGN AND EXECUTION/img (${index + 1}).jpg`,
      title: `Stalls Project ${index + 1}`,
    }),
  );
  static_service_data[1].subItems[2].nestedItems[8].data = Array.from(
    { length: 2 },
    (_, index) => ({
      id: index + 2009,
      mediaType: "image",
      src: `/assets/img/home-01/portfolio/STALLS/TOTALGAZ - STALL DESIGN & EXECUTION/img (${index + 1}).jpg`,
      title: `Stalls Project ${index + 1}`,
    }),
  );
}

static_service_data[2].subItems[0].data = Array.from(
  { length: 104 },
  (_, index) => ({
    id: index + 4001,
    mediaType: "image",
    src: `/assets/img/home-01/portfolio/Static/static (${index + 1}).png`,
    title: `Static Project ${index + 1}`,
  }),
);
static_service_data[2].subItems[1].data = Array.from(
  { length: 33 },
  (_, index) => ({
    id: index + 4101,
    mediaType: "video",
    src: `/assets/img/home-01/portfolio/Motion/motion (${index + 1}).mp4`,
    title: `Motion Project ${index + 1}`,
  }),
);

// ── Dropdown Portal Component ───────────────────────────────────────────────
function SubMenu({
  items,
  anchorEl,
  visible,
  onMouseEnter,
  onMouseLeave,
  currentService,
  onMouseLeaveMobile,
}: {
  items: SubItem[];
  anchorEl: HTMLElement | null;
  visible: boolean;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
  currentService: string | null;
  onMouseLeaveMobile?: () => void;
}) {
  const [pos, setPos] = useState({ top: 0, left: 0, width: 250 });
  const [isMobile, setIsMobile] = useState(false);
  const [renderLeft, setRenderLeft] = useState(false);
  const [mounted, setMounted] = useState(false);

  const [activeChildMenu, setActiveChildMenu] = useState<number | null>(null);
  const [activeDeepMenu, setActiveDeepMenu] = useState<number | null>(null);

  useEffect(() => {
    setMounted(true);
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    if (anchorEl && visible) {
      const rect = anchorEl.getBoundingClientRect();
      const dropdownWidth = 250;
      const paddingOffset = 6;

      if (window.innerWidth <= 768) {
        setPos({
          top: rect.bottom + window.scrollY + paddingOffset,
          left: 15,
          width: window.innerWidth - 30,
        });
      } else {
        const spaceRight = window.innerWidth - rect.left;
        if (spaceRight < 700) {
          setRenderLeft(true);
          let targetLeft = rect.right + window.scrollX - dropdownWidth;
          if (targetLeft < 0) targetLeft = 15;
          setPos({
            top: rect.bottom + window.scrollY + paddingOffset,
            left: targetLeft,
            width: dropdownWidth,
          });
        } else {
          setRenderLeft(false);
          setPos({
            top: rect.bottom + window.scrollY + paddingOffset,
            left: rect.left + window.scrollX,
            width: dropdownWidth,
          });
        }
      }
    }
  }, [visible, anchorEl]);

  if (!mounted) return null;

  const handleItemClick = (
    e: React.MouseEvent,
    index: number,
    hasSub: boolean,
  ) => {
    if (isMobile && hasSub) {
      e.preventDefault();
      setActiveChildMenu(activeChildMenu === index ? null : index);
      setActiveDeepMenu(null);
    }
  };

  const handleSubSubClick = (
    e: React.MouseEvent,
    idx: number,
    hasDeep: boolean,
  ) => {
    if (isMobile && hasDeep) {
      e.preventDefault();
      setActiveDeepMenu(activeDeepMenu === idx ? null : idx);
    }
  };

  return createPortal(
    <ul
      onMouseEnter={onMouseEnter}
      onMouseLeave={() => {
        if (!isMobile) {
          onMouseLeave();
          setActiveChildMenu(null);
          setActiveDeepMenu(null);
        }
      }}
      style={{
        position: "absolute",
        top: pos.top,
        left: pos.left,
        zIndex: 99999,
        listStyle: "none",
        margin: 0,
        padding: "8px 0",
        background: "#1a1a1a",
        boxShadow: "0 8px 24px rgba(0,0,0,0.5)",
        width: `${pos.width}px`,
        borderRadius: "6px",
        opacity: visible ? 1 : 0,
        visibility: visible ? "visible" : "hidden",
        transform: visible ? "translateY(0px)" : "translateY(-6px)",
        transition:
          "opacity 0.2s ease, transform 0.2s ease, visibility 0.2s ease",
        pointerEvents: visible ? "auto" : "none",
        border: "1px solid #2e2e2e",
        maxHeight: isMobile ? "70vh" : "none",
        overflowY: isMobile ? "auto" : "visible",
      }}
    >
      <style
        dangerouslySetInnerHTML={{
          __html: `
        .canvas-menu-link { transition: color 0.2s ease !important; }
        .canvas-menu-link:hover { color: #ff5e14 !important; }
      `,
        }}
      />

      {items.map((item, i) => {
        const hasSubSub = !!(item.nestedItems && item.nestedItems.length > 0);
        const isChildOpen = activeChildMenu === i;

        const isItemActive =
          currentService &&
          item.link
            .toLowerCase()
            .includes(`service=${currentService.toLowerCase()}`);
        const isAnySubActive = item.nestedItems?.some((subSub) => {
          if (
            currentService &&
            subSub.link
              .toLowerCase()
              .includes(`service=${currentService.toLowerCase()}`)
          )
            return true;
          return subSub.deepItems?.some(
            (deep) =>
              currentService &&
              deep.link
                .toLowerCase()
                .includes(`service=${currentService.toLowerCase()}`),
          );
        });

        const finalItemColor =
          isItemActive || isAnySubActive || (isChildOpen && isMobile)
            ? "#ff5e14"
            : "#cccccc";

        return (
          <li
            key={i}
            style={{
              padding: "0",
              position: "relative",
              borderBottom: i < items.length - 1 ? "1px solid #2e2e2e" : "none",
            }}
            onMouseEnter={() => {
              if (!isMobile && hasSubSub) setActiveChildMenu(i);
            }}
            onMouseLeave={() => {
              if (!isMobile) setActiveChildMenu(null);
            }}
          >
            <Link
              href={hasSubSub ? "#" : item.link}
              className="canvas-menu-link"
              onClick={(e) => handleItemClick(e, i, hasSubSub)}
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                padding: "10px 18px",
                color: finalItemColor,
                fontSize: "16px",
                textDecoration: "none",
                whiteSpace: isMobile ? "normal" : "nowrap",
                cursor: hasSubSub ? "default" : "pointer",
              }}
            >
              <span>{item.title}</span>
              {hasSubSub && (
                <span
                  style={{
                    fontSize: "12px",
                    transition: "transform 0.2s",
                    transform:
                      isChildOpen && isMobile ? "rotate(90deg)" : "none",
                  }}
                >
                  {isMobile ? "▶" : renderLeft ? "◀" : "▶"}
                </span>
              )}
            </Link>

            {/* Layer 2 SubSub-Menu */}
            {hasSubSub && isChildOpen && item.nestedItems && (
              <ul
                style={{
                  position: isMobile ? "relative" : "absolute",
                  top: 0,
                  left: isMobile ? "0" : renderLeft ? "-252px" : "100%",
                  width: isMobile ? "100%" : "250px",
                  listStyle: "none",
                  margin: 0,
                  padding: "4px 0",
                  background: "#222222",
                  boxShadow: isMobile ? "none" : "0 8px 24px rgba(0,0,0,0.5)",
                  borderRadius: isMobile ? "0" : "6px",
                  borderLeft: isMobile
                    ? "3px solid #ff5e14"
                    : "1px solid #3a3a3a",
                  borderTop: isMobile ? "none" : "1px solid #3a3a3a",
                  borderBottom: isMobile ? "none" : "1px solid #3a3a3a",
                  borderRight: isMobile ? "none" : "1px solid #3a3a3a",
                  zIndex: 100000,
                }}
              >
                {item.nestedItems.map((subSub, subIdx) => {
                  const hasDeepSub = !!(
                    subSub.deepItems && subSub.deepItems.length > 0
                  );
                  const isDeepOpen = activeDeepMenu === subIdx;

                  const isSubSubActive =
                    currentService &&
                    subSub.link
                      .toLowerCase()
                      .includes(`service=${currentService.toLowerCase()}`);
                  const isAnyDeepActive = subSub.deepItems?.some(
                    (deep) =>
                      currentService &&
                      deep.link
                        .toLowerCase()
                        .includes(`service=${currentService.toLowerCase()}`),
                  );
                  const finalSubSubColor =
                    isSubSubActive ||
                    isAnyDeepActive ||
                    (isDeepOpen && isMobile)
                      ? "#ff5e14"
                      : "#bbbbbb";

                  return (
                    <li
                      key={subIdx}
                      style={{ padding: "0", position: "relative" }}
                      onMouseEnter={() => {
                        if (!isMobile && hasDeepSub) setActiveDeepMenu(subIdx);
                      }}
                      onMouseLeave={() => {
                        if (!isMobile) setActiveDeepMenu(null);
                      }}
                    >
                      <Link
                        href={hasDeepSub ? "#" : subSub.link}
                        className="canvas-menu-link"
                        onClick={(e) =>
                          handleSubSubClick(e, subIdx, hasDeepSub)
                        }
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                          padding: "10px 18px",
                          color: finalSubSubColor,
                          fontSize: "15px",
                          textDecoration: "none",
                          whiteSpace: isMobile ? "normal" : "nowrap",
                          cursor: hasDeepSub ? "default" : "pointer",
                        }}
                      >
                        <span
                          style={{
                            overflow: isMobile ? "visible" : "hidden",
                            textOverflow: "ellipsis",
                            maxWidth: isMobile ? "100%" : "200px",
                            display: "inline-block",
                          }}
                        >
                          {subSub.title}
                        </span>
                        {hasDeepSub && (
                          <span
                            style={{
                              fontSize: "10px",
                              transition: "transform 0.2s",
                              transform:
                                isDeepOpen && isMobile
                                  ? "rotate(90deg)"
                                  : "none",
                            }}
                          >
                            {isMobile ? "▶" : renderLeft ? "◀" : "▶"}
                          </span>
                        )}
                      </Link>

                      {/* Layer 3 Deep Submenu */}
                      {hasDeepSub && isDeepOpen && subSub.deepItems && (
                        <ul
                          style={{
                            position: isMobile ? "relative" : "absolute",
                            top: 0,
                            left: isMobile
                              ? "0"
                              : renderLeft
                                ? "-222px"
                                : "100%",
                            width: isMobile ? "100%" : "220px",
                            listStyle: "none",
                            margin: 0,
                            padding: "4px 0",
                            background: "#2d2d2d",
                            boxShadow: isMobile
                              ? "none"
                              : "0 8px 24px rgba(0,0,0,0.5)",
                            borderRadius: isMobile ? "0" : "6px",
                            borderLeft: isMobile
                              ? "3px solid #ff5e14"
                              : "1px solid #4a4a4a",
                            borderTop: isMobile ? "none" : "1px solid #4a4a4a",
                            borderBottom: isMobile
                              ? "none"
                              : "1px solid #4a4a4a",
                            borderRight: isMobile
                              ? "none"
                              : "1px solid #4a4a4a",
                            zIndex: 100001,
                          }}
                        >
                          {subSub.deepItems.map((deepItem, deepIdx) => {
                            const isDeepActive =
                              currentService &&
                              deepItem.link
                                .toLowerCase()
                                .includes(
                                  `service=${currentService.toLowerCase()}`,
                                );
                            return (
                              <li key={deepIdx} style={{ padding: "0" }}>
                                <Link
                                  href={deepItem.link}
                                  className="canvas-menu-link"
                                  style={{
                                    display: "block",
                                    padding: "10px 25px",
                                    color: isDeepActive ? "#ff5e14" : "#aaaaaa",
                                    fontSize: "14px",
                                    textDecoration: "none",
                                    whiteSpace: isMobile ? "normal" : "nowrap",
                                  }}
                                >
                                  {deepItem.title}
                                </Link>
                              </li>
                            );
                          })}
                        </ul>
                      )}
                    </li>
                  );
                })}
              </ul>
            )}
          </li>
        );
      })}
    </ul>,
    document.body,
  );
}

type IProps = { style_2?: boolean };

// ── Inner Content Component ──────────────────────────────────────────────────
function ServiceDetailsContent({ style_2 = false }: IProps) {
  const { initIsotop, isotopContainer } = useIsotop();
  const searchParams = useSearchParams();

  const [allServiceData, setAllServiceData] =
    useState<ServiceData[]>(static_service_data);
  const [currentService, setCurrentService] = useState<string | null>(null);
  const [filteredData, setFilteredData] = useState<PortfolioItem[]>([]);
  const [hoveredId, setHoveredId] = useState<number | string | null>(null);
  const [width, setWidth] = useState(0);

  const [showModal, setShowModal] = useState<boolean>(false);
  const [modalItem, setModalItem] = useState<PortfolioItem | null>(null);

  const titleRefs = useRef<{
    [key: string | number]: HTMLHeadingElement | null;
  }>({});
  const leaveTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (window.innerWidth <= 768) {
        const target = event.target as HTMLElement;
        const clickedInsideMenu =
          target.closest(".tp-service-item") ||
          target.closest('ul[style*="position: absolute"]');
        if (!clickedInsideMenu) setHoveredId(null);
      }
    };
    document.addEventListener("click", handleOutsideClick);
    return () => document.removeEventListener("click", handleOutsideClick);
  }, []);

  useEffect(() => {
    const fetchSanityServices = async () => {
      try {
        const query = `*[_type == "our-canvas"] {
          "id": _id,
          item,
          subItems[] {
            "title": coalesce(atlSub, btlSub, digitalSub),
            link,
            "data": data[] { "id": _key, title, mediaType, "src": src.asset->url, youtubeUrl },
            "nestedItems": subItems[] {
              title,
              link,
              "data": data[] { "id": _key, title, mediaType, "src": src.asset->url, youtubeUrl },
              "deepItems": deepItems[] { title, link, "data": data[] { "id": _key, title, mediaType, "src": src.asset->url, youtubeUrl } }
            }
          }
        }`;

        const sanityData = await client.fetch(query);
        if (sanityData && sanityData.length > 0) {
          const finalMergedData = mergeStaticAndSanityData(
            static_service_data,
            sanityData,
          );
          setAllServiceData(finalMergedData);
        }
      } catch (error) {
        console.error("Sanity connection error:", error);
      }
    };
    fetchSanityServices();
  }, []);

  useEffect(() => {
    if (filteredData.length > 0) initIsotop();
  }, [initIsotop, filteredData]);

  useEffect(() => {
    setWidth(window.innerWidth);
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const serviceParam: any = searchParams?.get("service");
    setCurrentService(serviceParam);
    setHoveredId(null);

    if (serviceParam && allServiceData.length > 0) {
      let targetData: PortfolioItem[] = [];

      for (const service of allServiceData) {
        for (const sub of service.subItems) {
          if (
            sub.link &&
            sub.link
              .toLowerCase()
              .includes(`service=${serviceParam.toLowerCase()}`) &&
            sub.data
          ) {
            targetData = sub.data;
            break;
          }
          if (sub.nestedItems) {
            const matchedSubSub = sub.nestedItems.find(
              (ss) =>
                ss.link &&
                ss.link
                  .toLowerCase()
                  .includes(`service=${serviceParam.toLowerCase()}`),
            );
            if (
              matchedSubSub &&
              matchedSubSub.data &&
              matchedSubSub.data.length > 0
            ) {
              targetData = matchedSubSub.data;
              break;
            }
            for (const subSub of sub.nestedItems) {
              if (subSub.deepItems) {
                const matchedDeep = subSub.deepItems.find(
                  (d) =>
                    d.link &&
                    d.link
                      .toLowerCase()
                      .includes(`service=${serviceParam.toLowerCase()}`),
                );
                if (matchedDeep && matchedDeep.data) {
                  targetData = matchedDeep.data;
                  break;
                }
              }
            }
          }
          if (targetData.length > 0) break;
        }
        if (targetData.length > 0) break;
      }

      setFilteredData(targetData);

      requestAnimationFrame(() => {
        const element = document.getElementById("service-section");
        if (element) {
          const offset = 120;
          const bodyRect = document.body.getBoundingClientRect().top;
          const elementRect = element.getBoundingClientRect().top;
          const offsetPosition = elementRect - bodyRect - offset;
          window.scrollTo({ top: offsetPosition, behavior: "smooth" });
        }
      });
    } else {
      setFilteredData([]);
    }
  }, [searchParams, allServiceData]);

  const handleMainItemClick = (id: number | string) => {
    if (window.innerWidth <= 768) {
      setHoveredId(hoveredId === id ? null : id);
    }
  };

  const handleEnter = (id: number | string) => {
    if (window.innerWidth > 768) {
      if (leaveTimer.current) clearTimeout(leaveTimer.current);
      setHoveredId(id);
    }
  };

  const handleLeave = () => {
    if (window.innerWidth > 768) {
      leaveTimer.current = setTimeout(() => setHoveredId(null), 120);
    }
  };

  const handleOpenModal = (e: React.MouseEvent, item: PortfolioItem) => {
    e.preventDefault();
    setModalItem(item);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setModalItem(null);
  };

  const isServiceActive = (s: ServiceData) => {
    if (!currentService) return false;
    return s.subItems.some((sub) => {
      if (
        sub.link &&
        sub.link
          .toLowerCase()
          .includes(`service=${currentService.toLowerCase()}`)
      )
        return true;
      if (sub.nestedItems) {
        return sub.nestedItems.some((subSub) => {
          if (
            subSub.link &&
            subSub.link
              .toLowerCase()
              .includes(`service=${currentService.toLowerCase()}`)
          )
            return true;
          if (subSub.deepItems) {
            return subSub.deepItems.some(
              (deep) =>
                deep.link &&
                deep.link
                  .toLowerCase()
                  .includes(`service=${currentService.toLowerCase()}`),
            );
          }
          return false;
        });
      }
      return false;
    });
  };

  return (
    <div className="service-details__area service-details__space pt-200 pb-200">
      <div className="container container-1530">
        <div className="row">
          <div className="col-xl-11">
            <div className="sv-hero-title-box">
              <h6>
                <span
                  style={{ fontSize: width > 768 ? "75px" : "45px" }}
                  className="sv-hero-title tp-char-animation"
                >
                  Our expertise lies in crafting perceptions that empower
                  brands,
                </span>
                <span
                  style={{ fontSize: width > 768 ? "75px" : "45px" }}
                  className="sv-hero-title tp-char-animation"
                >
                  making them exceptional and significant in the minds of
                  consumers.
                </span>
              </h6>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-xl-12">
            <div className="sv-hero-thumb p-relative">
              <div className="sv-hero-thumb-box d-flex align-items-center justify-content-center">
                <Image data-speed=".7" src={shape} alt="ser_hero-img" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        id="service-section"
        className="container mt-80"
        style={{ maxWidth: "1200px" }}
      >
        <div className="row justify-content-center align-items-center text-center">
          {allServiceData?.map((s) => (
            <div
              key={s.id}
              className="col-lg-4 col-md-4 col-4 d-flex justify-content-center align-items-center mb-40"
              style={{ minWidth: "100px" }}
            >
              <div className="tp-service-item d-flex flex-column flex-md-row align-items-center justify-content-center">
                <div
                  className="tp-service-icon mb-2 mb-md-0"
                  style={{ marginRight: width > 768 ? "15px" : "0px" }}
                >
                  <img
                    src={s.icon?.src || s.icon}
                    alt="icon"
                    style={{
                      width: width > 768 ? "40px" : "25px",
                      height: "auto",
                    }}
                  />
                </div>
                <div
                  className="tp-service-content"
                  style={{ position: "relative" }}
                >
                  <h4
                    className="tp-service-title-sm m-0"
                    ref={(el: any) => (titleRefs.current[s.id] = el)}
                    onMouseEnter={() => handleEnter(s.id)}
                    onMouseLeave={handleLeave}
                    onClick={(e) => {
                      e.stopPropagation();
                      handleMainItemClick(s.id);
                    }}
                    style={{
                      cursor: "pointer",
                      fontSize: width > 768 ? "36px" : "20px",
                      fontWeight: "600",
                      color:
                        isServiceActive(s) ||
                        (hoveredId === s.id && width <= 768)
                          ? "#ff5e14"
                          : "white",
                      transition: "color 0.2s ease",
                    }}
                  >
                    <span>{s.item}</span>
                  </h4>

                  {s.subItems && (
                    <SubMenu
                      currentService={currentService}
                      items={s.subItems}
                      anchorEl={titleRefs.current[s.id] ?? null}
                      visible={hoveredId === s.id}
                      onMouseEnter={() => handleEnter(s.id)}
                      onMouseLeave={handleLeave}
                      onMouseLeaveMobile={() => setHoveredId(null)}
                    />
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <p
        style={{
          textAlign: "center",
          color: "#d74400",
          fontSize: "26px",
          fontWeight: "400",
        }}
      >
        <span
          style={{ borderBottom: "1px solid", textTransform: "capitalize" }}
        >
          {currentService}
        </span>
      </p>

      {currentService && (
        <div className="container mt-60">
          <div className="row grid" ref={isotopContainer}>
            {filteredData.length > 0 ? (
              filteredData.toReversed()?.map((item) => (
                <div
                  key={item.id}
                  className="col-xl-3 col-lg-3 col-md-6 col-6 grid-item"
                >
                  <div className="tp-project-5-2-thumb mb-30 p-relative not-hide-cursor">
                    {item.mediaType === "video" ? (
                      <div
                        className="portfolio-video-wrapper"
                        onClick={(e) => handleOpenModal(e, item)}
                        style={{
                          position: "relative",
                          width: "100%",
                          maxWidth: "300px",
                          overflow: "hidden",
                          borderRadius: "5px",
                          aspectRatio: "1/1",
                          background: "#000",
                          cursor: "pointer",
                        }}
                      >
                        <video
                          src={item?.src}
                          muted
                          loop
                          playsInline
                          preload="metadata"
                          style={{
                            width: "100%",
                            height: "100%",
                            objectFit: "fill",
                          }}
                        />
                        <div
                          style={{
                            position: "absolute",
                            inset: 0,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            background: "rgba(0,0,0,0.2)",
                          }}
                        >
                          <span style={{ color: "#fff", fontSize: "24px" }}>
                            ▶
                          </span>
                        </div>
                      </div>
                    ) : (
                      <Link
                        href="#"
                        onClick={(e) => handleOpenModal(e, item)}
                        className="cursor-hide"
                      >
                        <div
                          style={{
                            width: "100%",
                            maxWidth: "300px",
                            height: "auto",
                            position: "relative",
                          }}
                        >
                          <img
                            className="anim-zoomin"
                            src={item.src}
                            alt={item.title}
                            style={{
                              width: "100%",
                              maxWidth: "300px",
                              height: "auto",
                              objectFit: "fill",
                              borderRadius: "5px",
                            }}
                          />
                        </div>
                      </Link>
                    )}
                  </div>
                </div>
              ))
            ) : (
              <div
                className="col-12 text-center mt-50"
                style={{ height: "30vh" }}
              >
                <p style={{ color: "#888", fontSize: "18px" }}>
                  No items found for this canvas.
                </p>
              </div>
            )}
          </div>
        </div>
      )}

      {/* ── Lightbox Modal ── */}
      <Modal
        show={showModal}
        onHide={handleCloseModal}
        centered
        size="lg"
        style={{ zIndex: 999999 }}
      >
        <Modal.Header
          closeButton
          closeVariant="white"
          style={{ background: "#1a1a1a", borderBottom: "1px solid #2e2e2e" }}
        ></Modal.Header>
        <Modal.Body
          style={{
            background: "#111",
            padding: "0",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            overflow: "hidden",
          }}
        >
          {modalItem?.mediaType === "video" ? (
            <video
              src={modalItem.src}
              controls
              autoPlay
              playsInline
              style={{
                width: "100%",
                maxHeight: "75vh",
                backgroundColor: "#000",
              }}
            />
          ) : modalItem?.mediaType === "youtube" ? (
            <iframe
              src={getEmbedUrl(modalItem?.youtubeUrl)}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              style={{
                border: "none",
                borderRadius: "10px",
                width: width > 768 ? "97vw" : "90vw",
                height: width > 768 ? "95vh" : "40vh",
                margin: "20px",
              }}
            />
          ) : (
            modalItem && (
              <img
                src={modalItem.src}
                alt={modalItem.title}
                style={{
                  width: "50%",
                  height: "auto",
                  maxHeight: "75vh",
                  objectFit: "contain",
                }}
              />
            )
          )}
        </Modal.Body>
      </Modal>
    </div>
  );
}

// ── Main Exported Component ──────────────────────────────────────────────────
export default function ServiceDetailsArea() {
  return (
    <Suspense
      fallback={
        <div className="text-center pt-200 pb-200">Loading Canvas...</div>
      }
    >
      <ServiceDetailsContent />
    </Suspense>
  );
}
