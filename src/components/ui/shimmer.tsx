import styled, { keyframes } from "styled-components";

const shimmerAnimation = keyframes`
    0% {
        background-position: -200px 0;
    }
    100% {
        background-position: 200px 0;
    }
`;

const ShimmerWrapper = styled.div<{ $height?: string; $width?: string }>`
  display: inline-block;
  height: ${(props) => props.$height};
  width: ${(props) => props.$width || "100%"};
  background: linear-gradient(to right, #eee 20%, #fafafa 50%, #eee 80%);
  background-size: 200px 100%;
  animation: ${shimmerAnimation} 1.5s infinite linear;
  border-radius: 8px;
`;

interface IShimmerProps {
  height?: number;
  width?: number;
}

export default function Shimmer({ height, width }: IShimmerProps) {
  return <ShimmerWrapper $height={`${height}px`} $width={`${width}px`} />;
}
