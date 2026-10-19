import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Earth Day | A clearer standard for environmental work",
  description:
    "An independent website concept exploring how a sustainability recognition platform could communicate criteria, evidence, and accountability more clearly.",
  openGraph: {
    title: "Earth Day | A clearer standard for environmental work",
    description:
      "A concept for making environmental commitments easier to understand through clear criteria and evidence.",
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
