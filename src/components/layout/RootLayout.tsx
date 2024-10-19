import Header from "../ui/header";
import { MainContainer as Container } from "../styles/container";

interface IRootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: IRootLayoutProps) {
  return (
    <>
      <Header />
      <Container>{children}</Container>
    </>
  );
}
