import styled from "styled-components";
import RootLayout from "./components/layout/RootLayout";
import { GlobalStyle } from "./components/styles/globalStyle";
import Card from "./components/ui/card";
import { SectionTitle } from "./components/styles/sectionTitle";
import Dialog from "./components/ui/dialog";
import { useCallback, useState } from "react";

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`;

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const handleDialogOpen = useCallback((state: boolean) => {
    setIsOpen(state);
  }, []);

  return (
    <RootLayout>
      <GlobalStyle />
      <Dialog isOpen={isOpen} handleDialogOpen={handleDialogOpen} />
      <SectionTitle>All Products</SectionTitle>
      <GridContainer>
        <Card
          imgSrc="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
          title="Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops"
          price={109.95}
          handleDialogOpen={handleDialogOpen}
        />
        <Card
          imgSrc="https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg"
          title="Mens Casual Premium Slim Fit T-Shirts "
          price={22.3}
          handleDialogOpen={handleDialogOpen}
        />
      </GridContainer>
    </RootLayout>
  );
}

export default App;
