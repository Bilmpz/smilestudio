import localFont from "next/font/local";
import "./globals.css";

const roobert = localFont({
  src: "../public/fonts/RoobertRegular.ttf",
  variable: "--font-roobert",
  display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="da" className={roobert.variable}>
      <body>{children}</body>
    </html>
  );
}