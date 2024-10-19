import styled, { css } from "styled-components";

export const commonStyles = css`
  width: 100%;
  margin-right: auto;
  margin-left: auto;
  padding-right: 2rem;
  padding-left: 2rem;

  @media (min-width: 1400px) {
    max-width: 1400px;
  }
`;

export const MainContainer = styled.main`
  ${commonStyles}
`;

export const DivContainer = styled.div`
  ${commonStyles}
`;
