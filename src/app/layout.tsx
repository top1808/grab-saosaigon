import "./globals.css";
import { Inter } from "next/font/google";
import "sweetalert2/src/sweetalert2.scss";

const inter = Inter({ subsets: ["latin"] });

export async function generateMetadata() {
  const siteURL = 'https://www.grab-dangky.com';

  return {
    title: `Grab Việt Nam. Hướng dẫn, tư vấn đăng ký GrabCar, GrabBike.`,
    description: `Đăng ký để trở thành tài xế xe công nghệ GrabCar, GrabBike ngay hôm nay.`,
    alternates: {
      canonical: `${siteURL}/`,
    },
  };
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta
          name="google-site-verification"
          content="pMFIEMF3SncKf8h32hd0HhXUxvlaKL1IUODjKsVrOM8"
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
