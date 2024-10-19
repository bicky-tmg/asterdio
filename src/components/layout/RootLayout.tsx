import Header from "../ui/header";
import { MainContainer as Container } from "../styles/container";

interface IRootLayout {
  children: React.ReactNode;
}

export default function RootLayout({ children }: IRootLayout) {
  return (
    <>
      <Header />
      <Container>{children}</Container>
    </>
  );
}
