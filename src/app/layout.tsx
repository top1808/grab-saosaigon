import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "sweetalert2/src/sweetalert2.scss";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Grab Việt Nam",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta name="google-site-verification" content="c9YDAOf59-muAuwy5qWkjPYtQTVFHzaT_nsH3fh1_d4" />
      </head>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
