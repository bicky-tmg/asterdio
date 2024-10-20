import styled from "styled-components";
import TriangleAlert from "../../assets/TriangleAlert";

const ErrorWrapper = styled.div`
  border: 1px solid #ef444480;
  border-radius: 0.5rem;
  padding: 0.75rem 1rem;
  display: flex;
  color: #ef4444;
  gap: 1rem;
`;

const ErrorTextWrapper = styled.div`
  font-size: 0.875rem;
  line-height: 1.25rem;
  color: inherit;
`;

export default function ErrorComp() {
  return (
    <ErrorWrapper>
      <TriangleAlert />
      <ErrorTextWrapper>
        <h3>Error</h3>
        <p>Something went wrong. Please try again later.</p>
      </ErrorTextWrapper>
    </ErrorWrapper>
  );
}
