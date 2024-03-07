import "./globals.css";
import { Inter } from "next/font/google";
import "sweetalert2/src/sweetalert2.scss";

const inter = Inter({ subsets: ["latin"] });

export async function generateMetadata() {
  const siteURL = 'https://www.grab-dangky.com';

  return {
    title: `Grab Việt Nam`,
    description: `Đăng ký để trở thành đối tác xe công nghệ Grab.`,
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
