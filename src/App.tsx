import styled from "styled-components";
import RootLayout from "./components/layout/RootLayout";
import { GlobalStyle } from "./components/styles/globalStyle";
import Card from "./components/ui/card";
import { SectionTitle } from "./components/styles/sectionTitle";
import Dialog from "./components/ui/dialog";
import { useCallback, useEffect, useRef, useState } from "react";
import { IProduct, Products } from "./types/product";
import Hero from "./components/ui/hero";

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
  const [products, setProducts] = useState<Products>([]);
  const productDetailRef = useRef<IProduct | null>(null);
  const featuredProducts = products?.filter(
    (product) => product?.rating?.rate > 4.6
  );

  useEffect(() => {
    const getProducts = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const result = await response.json();
        setProducts(result);
      } catch (error: unknown) {
        console.error(error);
      }
    };

    getProducts();
  }, []);

  const handleDialogOpen = useCallback((state: boolean) => {
    setIsOpen(state);
  }, []);

  return (
    <RootLayout>
      <GlobalStyle />
      <Dialog
        isOpen={isOpen}
        handleDialogOpen={handleDialogOpen}
        productDetail={productDetailRef.current}
      />
      <Hero />
      <SectionTitle>Featured Products</SectionTitle>
      <GridContainer>
        {featuredProducts?.map((product) => (
          <Card
            key={product.id}
            id={product.id}
            imgSrc={product.image}
            title={product.title}
            price={product.price}
            handleDialogOpen={() => {
              productDetailRef.current = product;
              handleDialogOpen(true);
            }}
          />
        ))}
      </GridContainer>
      <SectionTitle>All Products</SectionTitle>
      <GridContainer>
        {products?.map((product) => (
          <Card
            key={product.id}
            id={product.id}
            imgSrc={product.image}
            title={product.title}
            price={product.price}
            handleDialogOpen={() => {
              productDetailRef.current = product;
              handleDialogOpen(true);
            }}
          />
        ))}
      </GridContainer>
    </RootLayout>
  );
}

export default App;
