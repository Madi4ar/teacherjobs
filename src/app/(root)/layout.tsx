import { Navbar } from "@/widgets/navbar";
import Footer from "@/widgets/footer/ui/Footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Navbar />
      <div className="mt-[72px] flex-1">{children}</div>
      <Footer />
    </>
  );
}
