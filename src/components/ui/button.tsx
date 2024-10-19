import styled from "styled-components";

const ButtonWrapper = styled.button`
  font-family: inherit;
  padding: 0 0.75rem;
  font-weight: 500;
  font-size: 0.875rem;
  line-height: 1.25rem;
  background-color: #1c2024;
  color: #fcfcfd;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 0;
  transition: background-color 0.3s, transform 0.2s, filter 0.3s;

  &:hover {
    filter: contrast(0.88) saturate(1.1) brightness(1.1);
  }
`;

interface IButton {
  children: React.ReactNode;
}

export default function Button({ children }: IButton) {
  return <ButtonWrapper>{children}</ButtonWrapper>;
}
