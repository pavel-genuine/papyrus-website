import type { Metadata } from "next";
import { Syne, Aladin, Marcellus } from "next/font/google";
import { VideoProvider } from "@/provider/VideoProvider";
import localFont from "next/font/local";
import { ThemeProvider } from "next-themes";
import "swiper/css/bundle";
import "./globals.scss";

const gellery = localFont({
  src: [
    {
      path: "../../public/assets/fonts/gallerymodern-webfont.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/assets/fonts/gallerymodern-webfont.woff",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/assets/fonts/gallerymodern-webfont.woff2",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--tp-ff-gallery",
});

const aladin = Aladin({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--tp-ff-aladin",
});
const syne_body = Syne({
  weight: ["400", "500", "600", "700", "800"],
  subsets: ["latin"],
  variable: "--tp-ff-body",
});
const syne_heading = Syne({
  weight: ["400", "500", "600", "700", "800"],
  subsets: ["latin"],
  variable: "--tp-ff-heading",
});
const syne_p = Syne({
  weight: ["400", "500", "600", "700", "800"],
  subsets: ["latin"],
  variable: "--tp-ff-p",
});
const syne = Syne({
  weight: ["400", "500", "600", "700", "800"],
  subsets: ["latin"],
  variable: "--tp-ff-syne",
});
// const big_shoulders = Big_Shoulders_Display({
//   weight: ["400", "500", "600", "700", "800"],
//   subsets: ["latin"],
//   variable: "--tp-ff-shoulders",
// });
const marcellus = Marcellus({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--tp-ff-marcellus",
});

export const metadata: Metadata = {
  title: "Papyrus - IMC",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
          (function() {
            try {
              localStorage.setItem('theme', 'dark');
              document.documentElement.setAttribute('data-theme', 'dark');
            } catch(e) {}
          })();
        `,
          }}
        />
      </head>
      <body
        id="body"
        suppressHydrationWarning={true}
        className={`${gellery.variable} ${aladin.variable}
         ${syne_body.variable} ${syne_heading.variable} ${syne_p.variable}
          ${syne.variable} ${marcellus.variable}`}
      >
        <ThemeProvider
          attribute="data-theme"
          defaultTheme="dark"
          disableTransitionOnChange
          enableSystem={false}
        >
          <VideoProvider>{children}</VideoProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
