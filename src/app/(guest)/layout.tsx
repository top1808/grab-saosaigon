import MLayout from "@/layout/MLayout";

export default function RootLayout({
    children,
  }: {
    children: React.ReactNode;
  }) {
    return (
      <MLayout>{children}</MLayout>
    );
  }