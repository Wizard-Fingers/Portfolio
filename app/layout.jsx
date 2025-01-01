import { JetBrains_Mono } from "next/font/google";
import "./globals.css";

// components
import Header from "@/components/Header";
import PageTransition from "@/components/PageTransition";
import StairTransition from "@/components/StairTransition";

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-jetbrainsMono",
});

export const metadata = {
  title: "ArtBeckett.dev | Frontend Developer",
  description:
    "Frontend Developer specializing in React and Next.js. Creating elegant, user-centered digital experiences with clean code and innovative solutions. Based in Swindon, UK.",
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png" }],
  },
  openGraph: {
    title: "ArtBeckett.dev | Frontend Developer",
    description:
      "Frontend Developer specializing in React and Next.js. Creating elegant, user-centered digital experiences with clean code and innovative solutions.",
    url: "https://artbeckett.dev",
    siteName: "ArtBeckett.dev",
    locale: "en_GB",
    type: "website",
  },
  keywords: [
    "Frontend Developer",
    "React Developer",
    "Next.js Developer",
    "UI/UX Design",
    "Web Development",
    "Software Engineer",
    "Swindon",
    "UK Developer",
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={jetbrainsMono.variable}>
        <Header />
        <PageTransition>
          <StairTransition />
          {children}
        </PageTransition>
      </body>
    </html>
  );
}
