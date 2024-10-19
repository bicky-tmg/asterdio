import styled from "styled-components";
import { commonStyles as container } from "../styles/container";
import { Logo } from "../../assets/Logo";

const HeaderComp = styled.header`
  position: sticky;
  top: 0;
  z-index: 50;
  width: 100%;
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

export default function Header() {
  return (
    <HeaderComp>
      <NavWrapper>
        <LogoWrapper>
          <Logo width="100%" height="100%" />
        </LogoWrapper>
      </NavWrapper>
    </HeaderComp>
  );
}
