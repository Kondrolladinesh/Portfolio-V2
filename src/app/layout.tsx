import type { Metadata } from "next";
import "./globals.css";
import React from "react";
import Navbar from "./components/Navbar";

export const metadata: Metadata = {
    title: "Kondrolla Dinesh Reddy | Full Stack Developer",
    description: "Software Development Engineer with 2+ years of experience in Angular, React, Next.js, and Node.js. Building scalable web applications and delivering impactful digital solutions.",
    keywords: [
        "Kondrolla Dinesh Reddy",
        "Full Stack Developer",
        "Software Engineer",
        "Angular Developer",
        "Node.js Developer",
        "React Developer",
        "Web Developer",
        "DailyObjects",
        "Gurugram",
        "Hyderabad",
    ],
    authors: [{ name: "Kondrolla Dinesh Reddy" }],
    creator: "Kondrolla Dinesh Reddy",
    publisher: "Kondrolla Dinesh Reddy",

    openGraph: {
        type: "website",
        locale: "en_US",
        url: "https://kondrolladinesh.vercel.app",
        siteName: "Kondrolla Dinesh Reddy Portfolio",
        title: "Kondrolla Dinesh Reddy | Full Stack Developer",
        description: "Software Development Engineer with 2+ years of experience building scalable web applications using Angular, React, Next.js, and Node.js.",
        images: [
            {
                url: "/portfolio-og-image.png", // You'll need to add this image
                width: 1200,
                height: 630,
                alt: "Kondrolla Dinesh Reddy - Full Stack Developer",
            },
        ],
    },

    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },
    icons: {
        icon: "/favicon.ico",
        apple: "/apple-touch-icon.png",
    },
};

export default function RootLayout({
                                     children,
                                   }: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <html lang="en" suppressHydrationWarning>
      <head>
        {/* Prevent flash of unstyled content */}
        <script
            dangerouslySetInnerHTML={{
              __html: `
              (function() {
                try {
                  const darkMode = localStorage.getItem('darkMode') === 'true';
                  if (darkMode) {
                    document.documentElement.classList.add('dark');
                  }
                } catch (e) {}
              })();
            `,
            }}
        />
      </head>
      <body
          className="min-h-screen
          bg-white dark:bg-gray-950
          text-gray-900 dark:text-gray-50
          transition-colors duration-300
          antialiased
        "
      >
      <Navbar />
      <div className="w-full max-w-full overflow-x-hidden">
        {children}
      </div>
      </body>
      </html>
  );
}