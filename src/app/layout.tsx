import type { Metadata } from "next";
import { Space_Grotesk, JetBrains_Mono, Cormorant_Garamond, Outfit } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";

// ☀️ Light Mode Fonts (The Engineer)
const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], variable: "--font-space" });
const jetbrains = JetBrains_Mono({ subsets: ["latin"], variable: "--font-jetbrains" });

// 🌙 Dark Mode Fonts (The Artist)
const cormorant = Cormorant_Garamond({ 
  subsets: ["latin"], 
  weight: ["400", "600", "700"], // Cormorant needs specific weights
  variable: "--font-cormorant" 
});
const outfit = Outfit({ subsets: ["latin"], variable: "--font-outfit" });

export const metadata: Metadata = {
  title: "Aditi N Pai | Systems Engineer & Mandala Artist",
  description: "A dual-personality portfolio: High-performance systems by day, geometric meditations by night.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      {/* We inject all 4 font variables into the body */}
      <body className={`${spaceGrotesk.variable} ${jetbrains.variable} ${cormorant.variable} ${outfit.variable} transition-colors duration-700`}>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}