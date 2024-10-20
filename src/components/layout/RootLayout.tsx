import Header from "../ui/header";
import { MainContainer as Container } from "../styles/container";
import Footer from "../ui/footer";

interface IRootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: IRootLayoutProps) {
  return (
    <>
      <Header />
      <Container>{children}</Container>
      <Footer />
    </>
  );
}
