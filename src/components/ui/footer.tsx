import styled from "styled-components";
import { DivContainer } from "../styles/container";

const FooterWrapper = styled.div`
  margin-top: 4rem;
  padding-top: 1rem;
  padding-bottom: 1rem;
  background-color: #1c2024;
  color: #fcfcfd;
  text-align: center;
  font-size: 0.75rem;
  line-height: 1.5;
  font-weight: 400;
`;

export default function Footer() {
  return (
    <FooterWrapper>
      <DivContainer>
        &copy; All rights Reserved. {new Date().getFullYear()}
      </DivContainer>
    </FooterWrapper>
  );
}
