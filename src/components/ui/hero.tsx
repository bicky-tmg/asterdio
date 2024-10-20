import styled from "styled-components";
import { DivContainer } from "../styles/container";
import HeroBg from "../../assets/HeroBg";

const HeroSectionWrapper = styled.section`
  position: relative;
  overflow: hidden;
  padding-top: 4rem;
  padding-bottom: 2rem;
  margin-top: 0;
  margin-bottom: 0;

  @media (min-width: 768px) {
    padding-bottom: 4rem;
  }

  @media (min-width: 1024px) {
    margin-top: 3.5rem;
    margin-bottom: 2.5rem;
    padding-top: 8rem;
    padding-bottom: 8rem;
  }
`;

const HeroBgImage = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  opacity: 1;
`;

const HeroTextContainer = styled.div`
  margin-left: auto;
  margin-right: auto;
  display: flex;
  max-width: 64rem;
  flex-direction: column;
  align-items: center;
`;

const HeroTextSubContainer = styled.div`
  z-index: 10;
  dispaly: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 1.5rem;
`;

const HeroTitle = styled.h1`
  font-size: 2rem;
  line-height: 2.25rem;
  margin-bottom: 1.5rem;
  text-wrap: pretty;
  font-weight: 700;

  @media (min-width: 1024px) {
    font-size: 3rem;
    line-height: 1;
  }
`;

const HeroDescription = styled.p`
  @media (min-width: 1024px) {
    font-size: 1.25rem;
    line-height: 1.75rem;
  }
`;

export default function Hero() {
  return (
    <HeroSectionWrapper>
      <DivContainer>
        <HeroBgImage>
          <HeroBg />
        </HeroBgImage>
        <HeroTextContainer>
          <HeroTextSubContainer>
            <HeroTitle>Unbeatable Deals, Unmatched Quality</HeroTitle>
            <HeroDescription>
              Find top-quality products at incredible prices. Shop now and enjoy
              fast, hassle-free delivery. Shop the latest trends in fashion,
              curated for you. Free shipping on all orders.
            </HeroDescription>
          </HeroTextSubContainer>
        </HeroTextContainer>
      </DivContainer>
    </HeroSectionWrapper>
  );
}
