import s_1 from "@/assets/img/home-01/service/service-icon-1.png";
import s_2 from "@/assets/img/home-01/service/service-icon-2.png";
import s_3 from "@/assets/img/home-01/service/service-icon-3.png";

// Interfaces
interface PortfolioItem {
  id: number;
  category?: string;
  src: string;
  type?: string;
  youtubeUrl?: string;
  title: string;
}

interface DeepSubItem {
  title: string;
  link: string;
  data: PortfolioItem[];
}

interface SubSubItem {
  title: string;
  link: string;
  data?: PortfolioItem[];
  subItems?: DeepSubItem[];
}

interface SubItem {
  title: string;
  link: string;
  data?: PortfolioItem[];
  subItems?: SubSubItem[];
}

interface ServiceData {
  id: number;
  title: string;
  subItems: SubItem[];
  icon: any;
}

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
  "https://www.youtube.com/embed/fh5EQnNrJzM", // index 12 (Blank)
  "https://www.youtube.com/embed/LZoncSoN5uI", // index 13 (Blank)
  "https://www.youtube.com/embed/Nhvi0TvxS6E",
  "https://www.youtube.com/embed/403f6-iGrYc", // index 14
  "https://www.youtube.com/embed/FqzXlfjXRT0", // index 15
  "https://www.youtube.com/embed/ezZzHU8cQoc", // index 16
  "https://www.youtube.com/embed/oyMGZ3MuHSQ", // index 17
  "https://www.youtube.com/embed/-RONGs06cAg", // index 18
  "https://www.youtube.com/embed/HBouDycfTFI", // index 19
  "https://www.youtube.com/embed/WoIPSIOr55k", // index 20
  "https://www.youtube.com/embed/Im0RkJ3WdME", // index 21
  "https://www.youtube.com/embed/Xg-Mp2iWSj8", // index 22
  "https://www.youtube.com/embed/PheBReZDBIk", // index 23
];

const service_data: ServiceData[] = [
  {
    id: 1,
    title: "ATL",
    subItems: [
      {
        title: "Logo",
        link: "/our-canvas?service=logo",
        data: Array.from({ length: 45 }, (_, index) => ({
          id: index + 1,
          category: "ATL",
          type: "img",
          src: `/assets/img/home-01/portfolio/Logo/logo (${index + 1}).png`,
          title: `Logo Project ${index + 1}`,
        })),
      },
      {
        title: "Packaging",
        link: "/our-canvas?service=packaging",
        data: Array.from({ length: 66 }, (_, index) => ({
          id: index + 101,
          category: "ATL",
          type: "img",
          src: `/assets/img/home-01/portfolio/Packaging/packaging (${index + 1}).png`,
          title: `Packaging Project ${index + 1}`,
        })),
      },
      {
        title: "Press Ad",
        link: "/our-canvas?service=press-ad",
        data: Array.from({ length: 49 }, (_, index) => ({
          id: index + 101,
          category: "ATL",
          type: "img",
          src: `/assets/img/home-01/portfolio/Press-add/press-ad (${index + 1}).png`,
          title: `Press Ad Project ${index + 1}`,
        })),
      },
      {
        title: "Billboard - Out-door",
        link: "/our-canvas?service=billboard-outdoor",
        data: [],
      },
      {
        title: "Leaflet - Flyer",
        link: "/our-canvas?service=Leaflet-flyer",
        data: [],
      },
      {
        title: "Brochure - Catalogue",
        link: "/our-canvas?service=brochure-catalogue",
        data: Array.from({ length: 23 }, (_, index) => ({
          id: index + 101,
          category: "ATL",
          type: "img",
          src: `/assets/img/home-01/portfolio/Brochure-Catalogue/Brochure-catalogue (${index + 1}).png`,
          title: `Brochure Project ${index + 1}`,
        })),
      },
      {
        title: "Calendar",
        link: "/our-canvas?service=calendar",
        data: Array.from({ length: 33 }, (_, index) => ({
          id: index + 101,
          category: "ATL",
          type: "img",
          src: `/assets/img/home-01/portfolio/Calandar/calandar (${index + 1}).png`,
          title: `Calendar Project ${index + 1}`,
        })),
      },
      {
        title: "Annual Report",
        link: "/our-canvas?service=annual-report",
        data: [],
      },
      {
        title: "TVC",
        link: "/our-canvas?service=TVC",
        data: Array.from({ length: 24 }, (_, index) => ({
          id: index + 101,
          category: "ATL",
          type: "yt",
          src: `/assets/img/home-01/portfolio/TVC-Banner/tvc-banner (${index + 1}).png`,
          title: `TVC Project ${index + 1}`,
          youtubeUrl: tvcYoutubeUrls[index + 1] || "",
        })),
      },
      {
        title: "AV",
        link: "/our-canvas?service=AV",
        data: Array.from({ length: 1 }, (_, index) => ({
          id: index + 101,
          category: "ATL",
          type: "video",
          src: `/assets/img/home-01/portfolio/AV/AV (${index + 1}).mp4`,
          title: `AV Project ${index + 1}`,
        })),
      },
      { title: "PR", link: "/our-canvas?service=PR-media-buying", data: [] },
      {
        title: "Others",
        link: "/our-canvas?service=others-campaign",
        data: [],
      },
    ],
    icon: s_1,
  },
  {
    id: 2,
    title: "BTL",
    subItems: [
      {
        title: "Events",
        link: "/our-canvas?service=manikganj-school-100-years",
        subItems: [
          {
            title: "Manikganj Model High School 100 Years Celebration Event",
            link: "/our-canvas?service=manikganj-school-100-years",
            data: Array.from({ length: 12 }, (_, index) => ({
              id: index + 1001,
              category: "BTL",
              type: "img",
              src: `/assets/img/home-01/portfolio/Events/1.Manikganj Model High School 100 Years Celebration Event/manikganj (${index + 1}).jpg`,
              title: `Manikganj Project ${index + 1}`,
            })),
          },
          {
            title: "6th-generation Kia Sportage 2026 Launching Event",
            link: "/our-canvas?service=kia-sportage-2026-launch",
            data: Array.from({ length: 18 }, (_, index) => ({
              id: index + 1101,
              category: "BTL",
              type: "img",
              src: `/assets/img/home-01/portfolio/Events/2.6th-generation Kia Sportage 2026 Launching Event/kia (${index + 1}).jpg`,
              title: `Kia Sportage Project ${index + 1}`,
            })),
          },
          {
            title: "EC Daily pakage reviled event",
            link: "/our-canvas?service=ec-daily-package-revealed",
            data: Array.from({ length: 6 }, (_, index) => ({
              id: index + 1201,
              category: "BTL",
              type: "img",
              src: `/assets/img/home-01/portfolio/Events/3. EC Daily pakage reviled event/ec-package (${index + 1}).jpg`,
              title: `EC Package Project ${index + 1}`,
            })),
          },
          {
            title: "Finlay South City Shopping Mall Grand Launching Event",
            link: "/our-canvas?service=finlay-south-city-launch",
            data: Array.from({ length: 1 }, (_, index) => ({
              id: index + 1301,
              category: "BTL",
              type: "video",
              src: `/assets/img/home-01/portfolio/Events/4. Finlay South City Shopping Mall Grand Launching Event/south-city (${index + 1}).mp4`,
              title: `Finlay Mall Project ${index + 1}`,
            })),
          },
          {
            title:
              "Forland, Metal Motors Limited 6th Dhaka Commercial Automotive Show",
            link: "/our-canvas?service=forland-metal-motors-automotive-show",
            data: Array.from({ length: 11 }, (_, index) => ({
              id: index + 1401,
              category: "BTL",
              type: "img",
              src: `/assets/img/home-01/portfolio/Events/5. Forland,  Metal 𝐌𝐨𝐭𝐨𝐫𝐬 𝐋imi𝐭e𝐝 𝟔𝐭𝐡 𝐃𝐡𝐚𝐤𝐚 𝐂𝐨𝐦𝐦𝐞𝐫𝐜𝐢𝐚𝐥 𝐀𝐮𝐭𝐨𝐦𝐨𝐭𝐢𝐯𝐞 𝐒𝐡𝐨𝐰 𝟐𝟎𝟐𝟒/img (${index + 1}).jpg`,
              title: `Forland Automotive Project ${index + 1}`,
            })),
          },
          {
            title: "EC sunflower Product Launching Ceremony",
            link: "/our-canvas?service=ec-sunflower-launch",
            data: Array.from({ length: 6 }, (_, index) => ({
              id: index + 1501,
              category: "BTL",
              type: "img",
              src: `/assets/img/home-01/portfolio/Events/6. EC sunflower  Product Launching Ceremony/img (${index + 1}).jpg`,
              title: `EC Sunflower Project ${index + 1}`,
            })),
          },
          {
            title: "ACI Motors,5th Dhaka Commercial Automotive Show",
            link: "/our-canvas?service=aci-motors-automotive-show",
            data: Array.from({ length: 12 }, (_, index) => ({
              id: index + 1601,
              category: "BTL",
              type: "img",
              src: `/assets/img/home-01/portfolio/Events/7. ACI Motors,5th Dhaka Commercial Automotive Show 2023/img (${index + 1}).jpg`,
              title: `ACI Motors Project ${index + 1}`,
            })),
          },
          {
            title: "Chartered Life Annual Awards Night 2022",
            link: "/our-canvas?service=chartered-life-awards-2022",
            data: Array.from({ length: 16 }, (_, index) => ({
              id: index + 1701,
              category: "BTL",
              type: "img",
              src: `/assets/img/home-01/portfolio/Events/8. Chartered Life Annual Awards Night 2022/img (${index + 1}).jpg`,
              title: `Chartered Life Awards Project ${index + 1}`,
            })),
          },
          {
            title: "Rupayan City Uttara, Project Handover Ceremony",
            link: "/our-canvas?service=rupayan-city-handover",
            data: Array.from({ length: 27 }, (_, index) => ({
              id: index + 1801,
              category: "BTL",
              type: "img",
              src: `/assets/img/home-01/portfolio/Events/9.Rupayan City Uttara, Project Handover Ceremony/img (${index + 1}).jpg`,
              title: `Rupayan Handover Project ${index + 1}`,
            })),
          },
          {
            title: "Bosudhara Group, চেতনার বর্ণমালা Event",
            link: "/our-canvas?service=bosudhara-chetonar-bornomala",
            data: Array.from({ length: 21 }, (_, index) => ({
              id: index + 1901,
              category: "BTL",
              type: "img",
              src: `/assets/img/home-01/portfolio/Events/10.Bosudhara Group, চেতনার বর্ণমালা Event/img (${index + 1}).jpg`,
              title: `Bosudhara Event Project ${index + 1}`,
            })),
          },
          {
            title: "Pharmasia Limited,Pharmasia Conference 2022",
            link: "/our-canvas?service=pharmasia-conference-2022",
            data: Array.from({ length: 26 }, (_, index) => ({
              id: index + 2001,
              category: "BTL",
              type: "img",
              src: `/assets/img/home-01/portfolio/Events/11. Pharmasia Limited,Pharmasia Conference 2022/img (${index + 1}).jpg`,
              title: `Pharmasia Conference Project ${index + 1}`,
            })),
          },
          {
            title:
              "Chartered Life Insurance Company Limited, Annual Conference",
            link: "/our-canvas?service=chartered-life-annual-conference",
            data: Array.from({ length: 33 }, (_, index) => ({
              id: index + 2101,
              category: "BTL",
              type: "img",
              src: `/assets/img/home-01/portfolio/Events/12. Chartered Life Insurance Company Limited, Annual Award Program 2021/img (${index + 1}).jpg`,
              title: `Chartered Life Conf Project ${index + 1}`,
            })),
          },
          {
            title:
              "চার্টার্ড লাইফ ইন্সুরেন্স কোম্পানী লিমিটেড, রং তুলিতে মুক্তিযুদ্ধ",
            link: "/our-canvas?service=chartered-life-rong-tulite-muktijuddho",
            data: Array.from({ length: 13 }, (_, index) => ({
              id: index + 2201,
              category: "BTL",
              type: "img",
              src: `/assets/img/home-01/portfolio/Events/13.  চার্টার্ড লাইফ ইন্স্যুরেন্স কোম্পানী লিমিটেড, রং তুলিতে বিজয় উৎসব/img (${index + 1}).jpg`,
              title: `রং তুলিতে মুক্তিযুদ্ধ Project ${index + 1}`,
            })),
          },
          {
            title: "Channel I + Safe Hands, রং তুলিতে মুক্তিযুদ্ধ Event",
            link: "/our-canvas?service=channel-i-safe-hands-muktijuddho",
            data: Array.from({ length: 12 }, (_, index) => ({
              id: index + 2301,
              category: "BTL",
              type: "img",
              src: `/assets/img/home-01/portfolio/Events/14. Channel I + Safe Hands,রং তুলিতে মুক্তিযুদ্ধ Event/img (${index + 1}).jpg`,
              title: `Channel I Event Project ${index + 1}`,
            })),
          },
          {
            title: "Fogg Spcial Audition Launching Press Conference",
            link: "/our-canvas?service=fogg-special-audition-press-conf",
            data: Array.from({ length: 23 }, (_, index) => ({
              id: index + 2401,
              category: "BTL",
              type: "img",
              src: `/assets/img/home-01/portfolio/Events/15. Fogg Spcial Audition Launching Press Conference/img (${index + 1}).jpg`,
              title: `Fogg Press Project ${index + 1}`,
            })),
          },
          {
            title: "DT( Dhaka Tribune ),5th Anniversary of DT",
            link: "/our-canvas?service=dhaka-tribune-5th-anniversary",
            data: Array.from({ length: 6 }, (_, index) => ({
              id: index + 2501,
              category: "BTL",
              type: "img",
              src: `/assets/img/home-01/portfolio/Events/16. DT( Dhaka Tribune ),5th Anniversary of DT/img (${index + 1}).jpg`,
              title: `Dhaka Tribune Project ${index + 1}`,
            })),
          },
          {
            title: "Jafflong Tea Event",
            link: "/our-canvas?service=jafflong-tea-event",
            data: Array.from({ length: 4 }, (_, index) => ({
              id: index + 2601,
              category: "BTL",
              type: "img",
              src: `/assets/img/home-01/portfolio/Events/17. Jafflong Tea Event/img (${index + 1}).jpg`,
              title: `Jafflong Tea Project ${index + 1}`,
            })),
          },
          {
            title: "Launching of CLUB LOVELLO",
            link: "/our-canvas?service=launching-of-club-lovello",
            data: Array.from({ length: 50 }, (_, index) => ({
              id: index + 2701,
              category: "BTL",
              type: "img",
              src: `/assets/img/home-01/portfolio/Events/18. Launching of CLUB LOVELLO/img (${index + 1}).jpg`,
              title: `Club Lovello Project ${index + 1}`,
            })),
          },
          {
            title: "Kulna Titens Activation Work",
            link: "/our-canvas?service=khulna-titans-activation",
            data: Array.from({ length: 45 }, (_, index) => ({
              id: index + 2801,
              category: "BTL",
              type: "img",
              src: `/assets/img/home-01/portfolio/Events/19. Kulna Titens Activation Work/img (${index + 1}).jpg`,
              title: `Khulna Titans Project ${index + 1}`,
            })),
          },
          {
            title: "Bank Asia Limited",
            link: "/our-canvas?service=bank-asia-limited",
            subItems: [
              {
                title: "Aglabazar Branch Opening",
                link: "/our-canvas?service=aglabazar-branch-opening",
                data: Array.from({ length: 1 }, (_, index) => ({
                  id: index + 3001,
                  category: "Events",
                  type: "img",
                  src: `/assets/img/home-01/portfolio/Events/20.Bank Asia Limited/Aglabazar Branch Opening/img (${index + 1}).jpg`,
                  title: `Aglabazar Project ${index + 1}`,
                })),
              },
              {
                title: "Airport Branding",
                link: "/our-canvas?service=airport-branding",
                data: Array.from({ length: 2 }, (_, index) => ({
                  id: index + 3101,
                  category: "Events",
                  type: "img",
                  src: `/assets/img/home-01/portfolio/Events/20.Bank Asia Limited/Airport Branding/img (${index + 1}).jpg`,
                  title: `Airport Branding Project ${index + 1}`,
                })),
              },
              {
                title: "Annual General Meeting",
                link: "/our-canvas?service=annual-general-meeting",
                data: Array.from({ length: 5 }, (_, index) => ({
                  id: index + 3201,
                  category: "Events",
                  type: "img",
                  src: `/assets/img/home-01/portfolio/Events/20.Bank Asia Limited/Annual General Meeting/img (${index + 1}).jpg`,
                  title: `AGM Project ${index + 1}`,
                })),
              },
              {
                title: "CSR Event, Nowakhali Chatkhil",
                link: "/our-canvas?service=csr-event-noakhali-chatkhil",
                data: Array.from({ length: 1 }, (_, index) => ({
                  id: index + 3301,
                  category: "Events",
                  type: "img",
                  src: `/assets/img/home-01/portfolio/Events/20.Bank Asia Limited/CSR Event,Nowakhali Chatkhil/img (${index + 1}).jpg`,
                  title: `CSR Event Project ${index + 1}`,
                })),
              },
              {
                title: "Narshindi Branch Opening",
                link: "/our-canvas?service=narshindi-branch-opening",
                data: Array.from({ length: 1 }, (_, index) => ({
                  id: index + 3401,
                  category: "Events",
                  type: "img",
                  src: `/assets/img/home-01/portfolio/Events/20.Bank Asia Limited/Narshindi Branch Opening/img (${index + 1}).jpg`,
                  title: `Narshindi Project ${index + 1}`,
                })),
              },
              {
                title: "Sylhet Branch Opening",
                link: "/our-canvas?service=sylhet-branch-opening",
                data: Array.from({ length: 1 }, (_, index) => ({
                  id: index + 3501,
                  category: "Events",
                  type: "img",
                  src: `/assets/img/home-01/portfolio/Events/20.Bank Asia Limited/Sylhet Branch Opening/img (${index + 1}).jpg`,
                  title: `Sylhet Project ${index + 1}`,
                })),
              },
            ],
          },
        ],
      },
      {
        title: "Activations",
        link: "/our-canvas?service=AKIJ PLASTICS",
        subItems: [
          {
            title: "AKIJ PLASTICS",
            link: "/our-canvas?service=AKIJ PLASTICS",
            data: Array.from({ length: 6 }, (_, index) => ({
              id: index + 1001,
              category: "Activations",
              type: "img",
              src: `/assets/img/home-01/portfolio/ACTIVATIONS/AKIJ PLASTICS/img (${index + 1}).jpg`,
              title: `Activations ${index + 1}`,
            })),
          },
          {
            title: "BERGER EASY CLEAN ACTIVATION",
            link: "/our-canvas?service=BERGER EASY CLEAN ACTIVATION",
            data: Array.from({ length: 3 }, (_, index) => ({
              id: index + 1002,
              category: "Activations",
              type: "img",
              src: `/assets/img/home-01/portfolio/ACTIVATIONS/BERGER EASY CLEAN ACTIVATION/img (${index + 1}).jpg`,
              title: `Activations ${index + 1}`,
            })),
          },
          {
            title: "DABUR RED TOOTHPASTE",
            link: "/our-canvas?service=DABUR RED TOOTHPASTE",
            data: Array.from({ length: 4 }, (_, index) => ({
              id: index + 1003,
              category: "Activations",
              type: "img",
              src: `/assets/img/home-01/portfolio/ACTIVATIONS/DABUR RED TOOTHPASTE/img (${index + 1}).jpg`,
              title: `Activations ${index + 1}`,
            })),
          },
          {
            title: "EAGLE SUPER AEROSOL",
            link: "/our-canvas?service=EAGLE SUPER AEROSOL",
            data: Array.from({ length: 5 }, (_, index) => ({
              id: index + 1004,
              category: "Activations",
              type: "img",
              src: `/assets/img/home-01/portfolio/ACTIVATIONS/EAGLE SUPER AEROSOL/img (${index + 1}).jpg`,
              title: `Activations Project ${index + 1}`,
            })),
          },
          {
            title: "FREEDOM SANITARY NAPKIN",
            link: "/our-canvas?service=FREEDOM SANITARY NAPKIN",
            data: Array.from({ length: 8 }, (_, index) => ({
              id: index + 1005,
              category: "Activations",
              type: "img",
              src: `/assets/img/home-01/portfolio/ACTIVATIONS/FREEDOM SANITARY NAPKIN/img (${index + 1}).jpg`,
              title: `Activations Project ${index + 1}`,
            })),
          },
          {
            title: "Mr White",
            link: "/our-canvas?service=Mr White",
            data: Array.from({ length: 6 }, (_, index) => ({
              id: index + 1006,
              category: "Activations",
              type: "img",
              src: `/assets/img/home-01/portfolio/ACTIVATIONS/Mr White/img (${index + 1}).jpg`,
              title: `Activations Project ${index + 1}`,
            })),
          },
          {
            title: "QUAZI ENTERPRISES CARAVAN ACTIVATIONS",
            link: "/our-canvas?service=QUAZI ENTERPRISES CARAVAN ACTIVATIONS",
            data: Array.from({ length: 19 }, (_, index) => ({
              id: index + 1007,
              category: "Activations",
              type: "img",
              src: `/assets/img/home-01/portfolio/ACTIVATIONS/QUAZI ENTERPRISES/CARAVAN ACTIVATIONS/img (${index + 1}).jpg`,
              title: `Activations Project ${index + 1}`,
            })),
          },
          {
            title: "SAFE HANDS",
            link: "/our-canvas?service=SAFE HANDS",
            data: Array.from({ length: 9 }, (_, index) => ({
              id: index + 1008,
              category: "Activations",
              type: "img",
              src: `/assets/img/home-01/portfolio/ACTIVATIONS/SAFE HANDS/img (${index + 1}).png`,
              title: `Activations Project ${index + 1}`,
            })),
          },
          {
            title: "Wonder",
            link: "/our-canvas?service=Wonder",
            data: Array.from({ length: 2 }, (_, index) => ({
              id: index + 1009,
              category: "Activations",
              type: "img",
              src: `/assets/img/home-01/portfolio/ACTIVATIONS/Wonder/img (${index + 1}).jpg`,
              title: `Activations Project ${index + 1}`,
            })),
          },
          {
            title: "SAVLON HAND WASH",
            link: "/our-canvas?service=SAVLON HAND WASH",
            data: Array.from({ length: 4 }, (_, index) => ({
              id: index + 10010,
              category: "Activations",
              type: "img",
              src: `/assets/img/home-01/portfolio/ACTIVATIONS/SAVLON HAND WASH/img (${index + 1}).jpg`,
              title: `Activations Project ${index + 1}`,
            })),
          },
        ],
      },
      {
        title: "Stall",
        link: "/our-canvas?service=ACI – STALL DESIGN AND EXECUTION",
        subItems: [
          {
            title: "ACI – STALL DESIGN AND EXECUTION",
            link: "/our-canvas?service=ACI – STALL DESIGN AND EXECUTION",
            data: Array.from({ length: 2 }, (_, index) => ({
              id: index + 2001,
              category: "Stalls",
              type: "img",
              src: `/assets/img/home-01/portfolio/STALLS/ACI – STALL DESIGN AND EXECUTION/img (${index + 1}).jpg`,
              title: `Stalls Project ${index + 1}`,
            })),
          },
          {
            title: "AIRPORT IMMIGRATION BOOTH BRANDING",
            link: "/our-canvas?service=AIRPORT IMMIGRATION BOOTH BRANDING",
            data: Array.from({ length: 4 }, (_, index) => ({
              id: index + 2002,
              category: "Stalls",
              type: "img",
              src: `/assets/img/home-01/portfolio/STALLS/AIRPORT IMMIGRATION BOOTH BRANDING/img (${index + 1}).jpg`,
              title: `Stalls Project ${index + 1}`,
            })),
          },
          {
            title: "FREEDOM - DITF STALL EXECUTION",
            link: "/our-canvas?service=FREEDOM - DITF STALL EXECUTION",
            data: Array.from({ length: 2 }, (_, index) => ({
              id: index + 2003,
              category: "Stalls",
              type: "img",
              src: `/assets/img/home-01/portfolio/STALLS/FREEDOM - DITF STALL EXECUTION/img (${index + 1}).jpg`,
              title: `Stalls Project ${index + 1}`,
            })),
          },
          {
            title: "GLOBAL BRAND STALL DESIGN AND EXECUTION",
            link: "/our-canvas?service=GLOBAL BRAND STALL DESIGN AND EXECUTION",
            data: Array.from({ length: 2 }, (_, index) => ({
              id: index + 2004,
              category: "Stalls",
              type: "img",
              src: `/assets/img/home-01/portfolio/STALLS/GLOBAL BRAND STALL DESIGN AND EXECUTION/img (${index + 1}).jpg`,
              title: `Stalls Project ${index + 1}`,
            })),
          },
          {
            title: "GUARDIAN STALL DESIGN AND EXECUTION",
            link: "/our-canvas?service=GUARDIAN STALL DESIGN AND EXECUTION",
            data: Array.from({ length: 2 }, (_, index) => ({
              id: index + 2005,
              category: "Stalls",
              type: "img",
              src: `/assets/img/home-01/portfolio/STALLS/GUARDIAN STALL DESIGN AND EXECUTION/img (${index + 1}).jpg`,
              title: `Stalls Project ${index + 1}`,
            })),
          },
          {
            title: "METAL – STALL DESIGN AND EXECUTION",
            link: "/our-canvas?service=METAL – STALL DESIGN AND EXECUTION",
            data: Array.from({ length: 4 }, (_, index) => ({
              id: index + 2006,
              category: "Stalls",
              type: "img",
              src: `/assets/img/home-01/portfolio/STALLS/METAL – STALL DESIGN AND EXECUTION/img (${index + 1}).jpg`,
              title: `Stalls Project ${index + 1}`,
            })),
          },
          {
            title: "RUPAYAN - STALL DESIGN & EXECUTION",
            link: "/our-canvas?service=RUPAYAN - STALL DESIGN & EXECUTION",
            data: Array.from({ length: 6 }, (_, index) => ({
              id: index + 2007,
              category: "Stalls",
              type: "img",
              src: `/assets/img/home-01/portfolio/STALLS/RUPAYAN - STALL DESIGN & EXECUTION/img (${index + 1}).png`,
              title: `Stalls Project ${index + 1}`,
            })),
          },
          {
            title: "SHANTA HOLDINGS – STALL DESIGN AND EXECUTION",
            link: "/our-canvas?service=SHANTA HOLDINGS – STALL DESIGN AND EXECUTION",
            data: Array.from({ length: 7 }, (_, index) => ({
              id: index + 2008,
              category: "Stalls",
              type: "img",
              src: `/assets/img/home-01/portfolio/STALLS/SHANTA HOLDINGS – STALL DESIGN AND EXECUTION/img (${index + 1}).jpg`,
              title: `Stalls Project ${index + 1}`,
            })),
          },
          {
            title: "TOTALGAZ - STALL DESIGN & EXECUTION",
            link: "/our-canvas?service=TOTALGAZ - STALL DESIGN & EXECUTION",
            data: Array.from({ length: 2 }, (_, index) => ({
              id: index + 2009,
              category: "Stalls",
              type: "img",
              src: `/assets/img/home-01/portfolio/STALLS/TOTALGAZ - STALL DESIGN & EXECUTION/img (${index + 1}).jpg`,
              title: `Stalls Project ${index + 1}`,
            })),
          },
        ],
      },
    ],
    icon: s_2,
  },
  {
    id: 3,
    title: "Digital",
    subItems: [
      {
        title: "Static",
        link: "/our-canvas?service=static",
        data: Array.from({ length: 45 }, (_, index) => ({
          id: index + 4001,
          category: "Digital",
          type: "img",
          src: `/assets/img/home-01/portfolio/Static/static (${index + 1}).png`,
          title: `Static Project ${index + 1}`,
        })),
      },
      {
        title: "Motion",
        link: "/our-canvas?service=motion",
        data: Array.from({ length: 30 }, (_, index) => ({
          id: index + 4101,
          category: "Digital",
          type: "video",
          src: `/assets/img/home-01/portfolio/Motion/motion (${index + 1}).mp4`,
          title: `Motion Project ${index + 1}`,
        })),
      },
      { title: "OVC", link: "/our-canvas?service=ovc", data: [] },
      {
        title: "Music Video",
        link: "/our-canvas?service=music-video",
        data: [],
      },
      {
        title: "Digital Campaign",
        link: "/our-canvas?service=digital-Campaign",
        data: [],
      },
    ],
    icon: s_3,
  },
];
