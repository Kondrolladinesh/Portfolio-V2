import type { Metadata } from "next";
import "./globals.css";
import React from "react";
import Navbar from "./components/Navbar";

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Kondrolla Dinesh Reddy Portfolio",
    icons: {
        icon: "/icon.svg",
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