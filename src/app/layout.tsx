import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Rushikesh Karadbhajane | Data Engineer",
  description: "Portfolio of Rushikesh Karadbhajane — Data Engineer and System Engineer at Infosys (1.5+ years exp) specializing in PySpark, Airflow, Databricks, Kafka, and AWS, based in Bangalore, India.",
  authors: [{ name: "Rushikesh Karadbhajane", url: "https://github.com/RishiKaradbhajane" }],
  keywords: ["Rushikesh Karadbhajane", "Data Engineer", "System Engineer", "Infosys", "State Street", "PySpark", "Apache Airflow", "Apache Kafka", "Databricks", "AWS", "SQL", "Power BI", "Bangalore"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body suppressHydrationWarning className="min-h-full bg-bg-primary text-text-primary selection:bg-accent-mid/30 selection:text-highlight">
        <div className="noise-overlay" />
        {children}
      </body>
    </html>
  );
}
