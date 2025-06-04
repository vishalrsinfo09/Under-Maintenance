// app/layout.js
import "./globals.css";
import { Geist, Geist_Mono } from "next/font/google";

// Load fonts with CSS variables
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

// Default metadata (used by Next.js head manager)
export const metadata = {
  title: "Under Maintenance",
  keywords: "maintenance, under maintenance, website down",
  description: "This website is currently under maintenance. Please check back later.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
