import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Earth Day — Recognition for a more considered world",
  description:
    "A sustainability recognition concept helping brands communicate their environmental commitments with clarity, structure, and intention.",
  openGraph: {
    title: "Earth Day — Recognition for a more considered world",
    description:
      "A trusted mark for brands building with greater care.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}