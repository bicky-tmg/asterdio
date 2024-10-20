import styled from "styled-components";
import { commonStyles as container } from "../styles/container";
import { Logo } from "../../assets/Logo";
import { ButtonWrapper } from "./button";
import Heart from "../../assets/Heart";
import { useFavoriteStore } from "../../store/useFavoriteStore";
import Dropdown from "./dropdown";
import { useEffect, useRef, useState } from "react";

const HeaderComp = styled.header`
  position: sticky;
  top: 0;
  z-index: 50;
  width: 100%;
  background-color: #fff;
  border-bottom: 1px solid #e2e8f0;
`;

const NavWrapper = styled.nav`
  display: flex;
  height: 3.5rem;
  align-items: center;
  ${container}
`;

const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 2rem;
`;

const NavList = styled.div`
  margin-left: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`;

const FavoriteItem = styled(ButtonWrapper)`
  background-color: inherit;
  border: 1px solid #e2e8f0;
  color: inherit;
  padding: 4px 8px;
`;

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const { favoriteProducts } = useFavoriteStore();

  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleClickOutside = (event: MouseEvent): void => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node)
    ) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <HeaderComp>
      <NavWrapper>
        <LogoWrapper>
          <Logo width="100%" height="100%" />
        </LogoWrapper>
        <NavList ref={dropdownRef}>
          <FavoriteItem
            onClick={() => {
              setIsOpen((prev) => !prev);
            }}
          >
            <Heart
              fill={favoriteProducts.length > 0 ? "#e11d48" : "none"}
              strokeWidth={favoriteProducts.length > 0 ? 0 : 2}
              width={20}
              height={20}
            />
          </FavoriteItem>
          {isOpen ? <Dropdown /> : null}
        </NavList>
      </NavWrapper>
    </HeaderComp>
  );
}
