import MLayout from "@/layout/MLayout";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "sweetalert2/src/sweetalert2.scss";
import Logo from "../../public/images/grab_logo.png"

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Grab Hồ Chí Minh",
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
        <MLayout>{children}</MLayout>
      </body>
    </html>
  );
}
