import { defineType, defineField } from "sanity";

export const serviceData = defineType({
  name: "our-canvas",
  title: "Our Canvas Data",
  type: "document",

  fields: [
    defineField({
      name: "name",
      title: "Canvas Item Title",
      type: "string",
    }),

    defineField({
      name: "item",
      title: "Canvas Category",
      type: "string",
      description: "Select the category",
      options: {
        list: [
          { title: "ATL", value: "ATL" },
          { title: "BTL", value: "BTL" },
          { title: "Digital", value: "Digital" },
        ],
      },
    }),

    // 🔽 ১ম লেয়ার (Sub Items - e.g., Logo, Events)
    defineField({
      name: "subItems",
      title: "Sub Items (1st Layer)",
      type: "array",

      of: [
        {
          type: "object",
          name: "subItem",
          title: "Sub Item",
          fields: [
            defineField({
              name: "atlSub",
              title: "ATL Items",
              type: "string",
              options: {
                list: [
                  { title: "Logo", value: "Logo" },
                  { title: "Packaging", value: "Packaging" },
                  { title: "Press Ad", value: "Press Ad" },
                  {
                    title: "Billboard - Out-door",
                    value: "Billboard - Out-door",
                  },
                  { title: "Leaflet - Flyer", value: "Leaflet - Flyer" },
                  {
                    title: "Brochure - Catalogue",
                    value: "Brochure - Catalogue",
                  },
                  { title: "Calendar", value: "Calendar" },
                  { title: "Annual Report", value: "Annual Report" },
                  { title: "TVC", value: "TVC" },
                  { title: "AV", value: "AV" },
                  { title: "PR", value: "PR" },
                  { title: "Others", value: "Others" },
                ],
              },
              // 🟢 parent এর বদলে document ব্যবহার করা হয়েছে এবং সরাসরি string চেক করা হয়েছে
              hidden: ({ document }) => document?.item !== "ATL",
            }),
            defineField({
              name: "btlSub",
              title: "BTL Items",
              type: "string",
              options: {
                list: [
                  { title: "Events", value: "Events" },
                  { title: "Activations", value: "Activations" },
                  { title: "Stall", value: "Stall" },
                ],
              },
              // 🟢 parent এর বদলে document
              hidden: ({ document }) => document?.item !== "BTL",
            }),
            defineField({
              name: "digitalSub",
              title: "Digital Items",
              type: "string",
              options: {
                list: [
                  { title: "Static", value: "Static" },
                  { title: "Motion", value: "Motion" },
                  { title: "OVC", value: "OVC" },
                  { title: "Music Video", value: "Music Video" },
                ],
              },
              // 🟢 parent এর বদলে document
              hidden: ({ document }) => document?.item !== "Digital",
            }),

            defineField({
              name: "atlLinks",
              title: "URL Link",
              type: "string",
              options: {
                list: [
                  { title: "Logo Link", value: "/our-canvas?service=logo" },
                  {
                    title: "Packaging Link",
                    value: "/our-canvas?service=packaging",
                  },
                  {
                    title: "Press Ad Link",
                    value: "/our-canvas?service=press-ad",
                  },
                  {
                    title: "Billboard Link",
                    value: "/our-canvas?service=bill-board",
                  },
                  {
                    title: "Leaflet Link",
                    value: "/our-canvas?service=leaflet",
                  },
                  {
                    title: "Brochure Link",
                    value: "/our-canvas?service=brochure-catalogue",
                  },
                  {
                    title: "Calendar Link",
                    value: "/our-canvas?service=calendar",
                  },
                  {
                    title: "Annual Report Link",
                    value: "/our-canvas?service=annual-report",
                  },
                  { title: "TVC Link", value: "/our-canvas?service=TVC" },
                  { title: "AV Link", value: "/our-canvas?service=av" },
                  {
                    title: "PR Link",
                    value: "/our-canvas?service=pr-media-buying",
                  },

                  { title: "Others Link", value: "/our-canvas?service=others" },
                ],
              },
              hidden: ({ document }) => document?.item !== "ATL",
            }),
            defineField({
              name: "btlLinks",
              title: "URL Link",
              type: "string",
              options: {
                list: [
                  {
                    title: "Events Link",
                    value: "/our-canvas?service=campaign",
                  },
                  {
                    title: "Activations Link",
                    value: "/our-canvas?service=activations",
                  },
                  { title: "Stall Link", value: "/our-canvas?service=stall" },
                ],
              },
              hidden: ({ document }) => document?.item !== "BTL",
            }),
            defineField({
              name: "digitalLinks",
              title: "URL Link",
              type: "string",
              options: {
                list: [
                  { title: "Static Link", value: "/our-canvas?service=static" },
                  { title: "Motion Link", value: "/our-canvas?service=motion" },
                  { title: "OVC Link", value: "/our-canvas?service=ovc" },
                  {
                    title: "Music Video Link",
                    value: "/our-canvas?service=music-video",
                  },
                ],
              },
              hidden: ({ document }) => document?.item !== "Digital",
            }),
            defineField({
              name: "data",
              title: "Canvas Items (Direct Grid Items)",
              type: "array",
              of: [{ type: "portfolioItem" }],
            }),

            // 🔽 ২য় লেয়ার (Sub Sub Items - e.g., Inside Events)
            {
              name: "subItems",
              title: "Sub Sub Items (2nd Layer)",
              type: "array",
              of: [
                {
                  type: "object",
                  name: "nestedItem",
                  title: "Sub Sub Item",
                  fields: [
                    defineField({
                      name: "title",
                      title: "Title (Select Sub Sub Category)",
                      type: "string",
                      options: {
                        list: [
                          {
                            title: "Manikganj School",
                            value: "Manikganj School",
                          },
                          {
                            title: "Kia Sportage 2026",
                            value: "Kia Sportage 2026",
                          },
                          {
                            title: "EC Daily Package",
                            value: "EC Daily Package",
                          },
                          {
                            title: "Finlay South City",
                            value: "Finlay South City",
                          },
                          {
                            title: "Forland Metal Motors",
                            value: "Forland Metal Motors",
                          },
                          { title: "Akij Plastics", value: "AKIJ PLASTICS" },
                          {
                            title: "ACI Stall Design",
                            value: "ACI – STALL DESIGN AND EXECUTION",
                          },
                          { title: "Bank Asia", value: "Bank Asia" },
                        ],
                      },
                    }),
                    // 🎯 ২য় লেয়ারের সব লিংক এক এক করে হার্ডকোড করে দেওয়া হলো
                    defineField({
                      name: "link",
                      title: "Query Link",
                      type: "string",
                      options: {
                        list: [
                          {
                            title: "Manikganj Link",
                            value:
                              "/our-canvas?service=manikganj-school-100-years",
                          },
                          {
                            title: "Kia Sportage Link",
                            value: "/our-canvas?service=kia-sportage-2026",
                          },
                          {
                            title: "EC Daily Package Link",
                            value:
                              "/our-canvas?service=ec-daily-package-revealed",
                          },
                          {
                            title: "Finlay South City Link",
                            value:
                              "/our-canvas?service=finlay-south-city-launch",
                          },
                          {
                            title: "Forland Metal Motors Link",
                            value:
                              "/our-canvas?service=forland-metal-motors-automotive-show",
                          },
                          {
                            title: "Akij Plastics Link",
                            value: "/our-canvas?service=AKIJ PLASTICS",
                          },
                          {
                            title: "ACI Stall Design Link",
                            value:
                              "/our-canvas?service=ACI – STALL DESIGN AND EXECUTION",
                          },
                          {
                            title: "Bank Asia Link",
                            value: "/our-canvas?service=bank-asia-limited",
                          },
                        ],
                      },
                    }),
                    defineField({
                      name: "data",
                      title: "Portfolio Items",
                      type: "array",
                      of: [{ type: "portfolioItem" }],
                    }),

                    // 🔽 ৩য় লেয়ার (Deep Sub Items - e.g., Inside Bank Asia)
                    {
                      name: "deepItems",
                      title: "Deep Sub Items (3rd Layer)",
                      type: "array",
                      of: [
                        {
                          type: "object",
                          name: "deepSubItem",
                          title: "Deep Sub Item",
                          fields: [
                            defineField({
                              name: "title",
                              title: "Title (e.g., Airport Branding)",
                              type: "string",
                            }),
                            defineField({
                              name: "link",
                              title: "Query Link",
                              type: "string",
                              description:
                                "Enter or map the third-layer link manually if needed",
                            }),
                            defineField({
                              name: "data",
                              title: "Portfolio Items",
                              type: "array",
                              of: [{ type: "portfolioItem" }],
                            }),
                          ],
                        },
                      ],
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    }),
  ],
});

export const portfolioItem = defineType({
  name: "portfolioItem",
  title: "Portfolio Item",
  type: "object",

  fields: [
    // { name: "title", title: "Grid Item Name", type: "string" },
    {
      name: "mediaType",
      title: "File Type",
      type: "string",
      options: {
        list: [
          { title: "Image", value: "img" },
          { title: "Local Video (.mp4)", value: "video" },
          { title: "YouTube Video", value: "youtube" },
        ],
        layout: "dropdown",
      },
    },
    {
      name: "src",
      title: "File Upload (Image or Local Video)",
      type: "file",
      options: { hotspot: true },
    },
    {
      name: "youtubeUrl",
      title: "YouTube URL",
      type: "url",
      hidden: ({ parent }) => parent?.mediaType !== "youtube",
    },
  ],
});
