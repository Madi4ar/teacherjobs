import { Navbar } from '@/widgets/navbar';
import Footer from '@/widgets/footer/ui/Footer';
import { AuthProvider } from '@/shared/providers/AuthProvider';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <AuthProvider>
      <Navbar />
      <div className="mt-[72px] flex-1">{children}</div>
      <Footer />
    </AuthProvider>
  );
}
