import s_1 from "@/assets/img/home-01/service/service-icon-1.png";
import s_2 from "@/assets/img/home-01/service/service-icon-2.png";
import s_3 from "@/assets/img/home-01/service/service-icon-3.png";

export interface PortfolioItem {
  id: number | string;
  src: string;
  mediaType?: string;
  youtubeUrl?: string;
  title: string;
}

export interface DeepSubItem {
  title: string;
  link: string;
  data?: PortfolioItem[];
}

export interface SubSubItem {
  title: string;
  link: string;
  data?: PortfolioItem[];
  deepItems?: DeepSubItem[];
}

export interface SubItem {
  title: string;
  link: string;
  data?: PortfolioItem[];
  nestedItems?: SubSubItem[];
}

export interface ServiceData {
  id: number | string;
  item: string; // বা title
  subItems: SubItem[];
  icon: any;
}

export const static_service_data: ServiceData[] = [
  {
    id: 1,
    item: "ATL",
    icon: s_1,
    subItems: [
      { title: "Logo", link: "/our-canvas?service=logo" },
      { title: "Packaging", link: "/our-canvas?service=packaging" },
      { title: "Press Ad", link: "/our-canvas?service=press-ad" },
      { title: "Billboard - Out-door", link: "/our-canvas?service=bill-board" },
      { title: "Leaflet - Flyer", link: "/our-canvas?service=leaflet" },
      {
        title: "Brochure - Catalogue",
        link: "/our-canvas?service=brochure-catalogue",
      },
      { title: "Calendar", link: "/our-canvas?service=calendar" },
      { title: "Annual Report", link: "/our-canvas?service=annual-report" },
      { title: "TVC", link: "/our-canvas?service=TVC" },
      { title: "AV", link: "/our-canvas?service=av" },
      { title: "PR", link: "/our-canvas?service=pr-media-buying" },
      { title: "Others", link: "/our-canvas?service=others-campaign" },
    ],
  },
  {
    id: 2,
    item: "BTL",
    icon: s_2,
    subItems: [
      {
        title: "Events",
        link: "#", // Clickable লিঙ্ক থাকবে না
        nestedItems: [
          {
            title: "Manikganj Model High School 100 Years Celebration Event",
            link: "/our-canvas?service=manikganj-school-100-years",
          },
          {
            title: "6th-generation Kia Sportage 2026 Launching Event",
            link: "/our-canvas?service=kia-sportage-2026-launch",
          },
          {
            title: "EC Daily pakage reviled event",
            link: "/our-canvas?service=ec-daily-package-revealed",
          },
          {
            title: "Finlay South City Shopping Mall Grand Launching Event",
            link: "/our-canvas?service=finlay-south-city-launch",
          },
          {
            title:
              "Forland, Metal Motors Limited 6th Dhaka Commercial Automotive Show",
            link: "/our-canvas?service=forland-metal-motors-automotive-show",
          },
          {
            title: "EC sunflower Product Launching Ceremony",
            link: "/our-canvas?service=ec-sunflower-launch",
          },
          {
            title: "ACI Motors,5th Dhaka Commercial Automotive Show",
            link: "/our-canvas?service=aci-motors-automotive-show",
          },
          {
            title: "Chartered Life Annual Awards Night 2022",
            link: "/our-canvas?service=chartered-life-awards-2022",
          },
          {
            title: "Rupayan City Uttara, Project Handover Ceremony",
            link: "/our-canvas?service=rupayan-city-handover",
          },
          {
            title: "Bosudhara Group, চেতনার বর্ণমালা Event",
            link: "/our-canvas?service=bosudhara-chetonar-bornomala",
          },
          {
            title: "Pharmasia Limited,Pharmasia Conference 2022",
            link: "/our-canvas?service=pharmasia-conference-2022",
          },
          {
            title:
              "Chartered Life Insurance Company Limited, Annual Conference",
            link: "/our-canvas?service=chartered-life-annual-conference",
          },
          {
            title:
              "চার্টার্ড লাইফ ইন্সুরেন্স কোম্পানী লিমিটেড, রং তুলিতে মুক্তিযুদ্ধ",
            link: "/our-canvas?service=chartered-life-rong-tulite-muktijuddho",
          },
          {
            title: "Channel I + Safe Hands, রং তুলিতে মুক্তিযুদ্ধ Event",
            link: "/our-canvas?service=channel-i-safe-hands-muktijuddho",
          },
          {
            title: "Fogg Spcial Audition Launching Press Conference",
            link: "/our-canvas?service=fogg-special-audition-press-conf",
          },
          {
            title: "DT( Dhaka Tribune ),5th Anniversary of DT",
            link: "/our-canvas?service=dhaka-tribune-5th-anniversary",
          },
          {
            title: "Jafflong Tea Event",
            link: "/our-canvas?service=jafflong-tea-event",
          },
          {
            title: "Launching of CLUB LOVELLO",
            link: "/our-canvas?service=launching-of-club-lovello",
          },
          {
            title: "Kulna Titens Activation Work",
            link: "/our-canvas?service=khulna-titans-activation",
          },
          {
            title: "Bank Asia Limited",
            link: "#", // Clickable লিঙ্ক থাকবে না
            deepItems: [
              {
                title: "Aglabazar Branch Opening",
                link: "/our-canvas?service=aglabazar-branch-opening",
              },
              {
                title: "Airport Branding",
                link: "/our-canvas?service=airport-branding",
              },
              {
                title: "Annual General Meeting",
                link: "/our-canvas?service=annual-general-meeting",
              },
              {
                title: "CSR Event, Nowakhali Chatkhil",
                link: "/our-canvas?service=csr-event-noakhali-chatkhil",
              },
              {
                title: "Narshindi Branch Opening",
                link: "/our-canvas?service=narshindi-branch-opening",
              },
              {
                title: "Sylhet Branch Opening",
                link: "/our-canvas?service=sylhet-branch-opening",
              },
            ],
          },
        ],
      },
      {
        title: "Activations",
        link: "#", // Clickable লিঙ্ক থাকবে না
        nestedItems: [
          { title: "AKIJ PLASTICS", link: "/our-canvas?service=AKIJ-PLASTICS" },
          {
            title: "BERGER EASY CLEAN ACTIVATION",
            link: "/our-canvas?service=BERGER-EASY-CLEAN-ACTIVATION",
          },
          {
            title: "DABUR RED TOOTHPASTE",
            link: "/our-canvas?service=DABUR-RED-TOOTHPASTE",
          },
          {
            title: "EAGLE SUPER AEROSOL",
            link: "/our-canvas?service=EAGLE-SUPER-AEROSOL",
          },
          {
            title: "FREEDOM SANITARY NAPKIN",
            link: "/our-canvas?service=FREEDOM-SANITARY-NAPKIN",
          },
          { title: "Mr White", link: "/our-canvas?service=Mr-White" },
          {
            title: "QUAZI ENTERPRISES CARAVAN ACTIVATIONS",
            link: "/our-canvas?service=QUAZI-ENTERPRISES-CARAVAN-ACTIVATIONS",
          },
          { title: "SAFE HANDS", link: "/our-canvas?service=SAFE-HANDS" },
          { title: "Wonder", link: "/our-canvas?service=Wonder" },
          {
            title: "SAVLON HAND WASH",
            link: "/our-canvas?service=SAVLON-HAND-WASH",
          },
        ],
      },
      {
        title: "Stall",
        link: "#", // Clickable লিঙ্ক থাকবে না
        nestedItems: [
          {
            title: "ACI – STALL DESIGN AND EXECUTION",
            link: "/our-canvas?service=ACI–STALL-DESIGN-AND-EXECUTION",
          },
          {
            title: "AIRPORT IMMIGRATION BOOTH BRANDING",
            link: "/our-canvas?service=AIRPORT-IMMIGRATION-BOOTH-BRANDING",
          },
          {
            title: "FREEDOM - DITF STALL EXECUTION",
            link: "/our-canvas?service=FREEDOM-DITF-STALL-EXECUTION",
          },
          {
            title: "GLOBAL BRAND STALL DESIGN AND EXECUTION",
            link: "/our-canvas?service=GLOBAL-BRAND-STALL-DESIGN-AND-EXECUTION",
          },
          {
            title: "GUARDIAN STALL DESIGN AND EXECUTION",
            link: "/our-canvas?service=GUARDIAN-STALL-DESIGN-AND-EXECUTION",
          },
          {
            title: "METAL – STALL DESIGN AND EXECUTION",
            link: "/our-canvas?service=METAL–STALL-DESIGN-AND-EXECUTION",
          },
          {
            title: "RUPAYAN - STALL DESIGN & EXECUTION",
            link: "/our-canvas?service=RUPAYAN-STALL-DESIG-&-EXECUTION",
          },
          {
            title: "SHANTA HOLDINGS – STALL DESIGN AND EXECUTION",
            link: "/our-canvas?service=SHANTA-HOLDINGS–STALL-DESIGN-AND-EXECUTION",
          },
          {
            title: "TOTALGAZ - STALL DESIGN & EXECUTION",
            link: "/our-canvas?service=TOTALGAZ-STALL-DESIGN-&-EXECUTION",
          },
        ],
      },
    ],
  },
  {
    id: 3,
    item: "Digital",
    icon: s_3,
    subItems: [
      { title: "Static", link: "/our-canvas?service=static" },
      { title: "Motion", link: "/our-canvas?service=motion" },
      { title: "OVC", link: "/our-canvas?service=ovc" },
      { title: "Music Video", link: "/our-canvas?service=music-video" },
      {
        title: "Digital Campaign",
        link: "/our-canvas?service=digital-social-media-marketing",
      },
    ],
  },
];

// ৩-লেয়ারের হাইব্রিড ডেটা মার্জিং লজিক (যা দুটি পেজেই সমানভাবে ব্যবহার হবে)
export const mergeStaticAndSanityData = (
  staticData: ServiceData[],
  sanityData: any[],
): ServiceData[] => {
  const merged: ServiceData[] = JSON.parse(JSON.stringify(staticData));

  sanityData.forEach((sanityService: any) => {
    if (!sanityService.item) return;

    const matchService = merged.find(
      (s) =>
        s.item?.trim().toLowerCase() ===
        sanityService.item?.trim().toLowerCase(),
    );

    if (matchService) {
      sanityService.subItems?.forEach((sanitySub: any) => {
        if (!sanitySub.title) return;

        const matchSub = matchService.subItems.find(
          (sub) =>
            sub.title?.trim().toLowerCase() ===
            sanitySub.title?.trim().toLowerCase(),
        );

        if (matchSub) {
          if (sanitySub.data && sanitySub.data.length > 0) {
            matchSub.data = [...(matchSub.data || []), ...sanitySub.data];
          }

          sanitySub.nestedItems?.forEach((sanitySubSub: any) => {
            if (!sanitySubSub.title) return;

            if (!matchSub.nestedItems) matchSub.nestedItems = [];
            const matchSubSub = matchSub.nestedItems.find(
              (ss) =>
                ss.title?.trim().toLowerCase() ===
                sanitySubSub.title?.trim().toLowerCase(),
            );

            if (matchSubSub) {
              if (sanitySubSub.data && sanitySubSub.data.length > 0) {
                matchSubSub.data = [
                  ...(matchSubSub.data || []),
                  ...sanitySubSub.data,
                ];
              }

              sanitySubSub.deepItems?.forEach((sanityDeep: any) => {
                if (!sanityDeep.title) return;

                if (!matchSubSub.deepItems) matchSubSub.deepItems = [];
                const matchDeep = matchSubSub.deepItems.find(
                  (d) =>
                    d.title?.trim().toLowerCase() ===
                    sanityDeep.title?.trim().toLowerCase(),
                );

                if (matchDeep) {
                  if (sanityDeep.data && sanityDeep.data.length > 0) {
                    matchDeep.data = [
                      ...(matchDeep.data || []),
                      ...sanityDeep.data,
                    ];
                  }
                } else {
                  matchSubSub.deepItems.push(sanityDeep);
                }
              });
            } else {
              matchSub.nestedItems.push(sanitySubSub);
            }
          });
        } else {
          matchService.subItems.push(sanitySub);
        }
      });
    } else {
      merged.push(sanityService);
    }
  });

  return merged;
};
