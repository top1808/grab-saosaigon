import "./globals.css";
import { Inter } from "next/font/google";
import "sweetalert2/src/sweetalert2.scss";

const inter = Inter({ subsets: ["latin"] });

export async function generateMetadata() {
  const siteURL = 'https://www.grab-saosaigon.com';

  return {
    title: `Grab Việt Nam. Hướng dẫn tư vấn đăng ký GrabCar.`,
    description: `Hotline đăng ký Grab: 0343577939 - Đăng ký Grabcar, đăng ký grab van ngay hôm nay để trở thành tài xế thời công nghệ. Thu nhập lên đến 35 triệu đồng/tháng khi hoạt động`,
    metadataBase: new URL(siteURL),
    alternates: {
      canonical: "/",
    },
    openGraph: {
      title: 'Đăng ký Grab car, đăng ký Grab van tại Thành phố Hồ Chí Minh, Hà Nội và 1 số tỉnh thành khác | Grab Việt Nam.',
      description: 'Hotline đăng ký Grab: 0343577939 - Đăng ký Grabcar, đăng ký grab van ngay hôm nay để trở thành tài xế thời công nghệ. Thu nhập lên đến 35 triệu đồng/tháng khi hoạt động',
      url: siteURL,
      siteName: 'Đăng ký grab',
      type: 'website',
    },
    keywords: ['Grab', "Đăng ký Grab", "Grab car", "Grab van", "Hướng dẫn đăng ký grab"]
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
