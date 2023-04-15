import { Toaster } from "react-hot-toast";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { AuthDialog } from "@/modules";

interface Props {
  children: React.ReactNode;
}
export default function Layout({ children }: Props) {
  return (
    <>
      <Header />
      <Toaster />
      <AuthDialog />
      <main>{children}</main>
      <Footer />
    </>
  );
}
