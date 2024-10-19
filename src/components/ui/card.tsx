import styled from "styled-components";
import Button from "./button";

const CardWrapper = styled.div`
  box-shadow: 0 0 #0000, 0 0 #0000, 0 4px 6px -1px rgb(0 0 0 / 0.1),
    0 2px 4px -2px rgb(0 0 0 / 0.1);
  border: 1px solid #e2e8f0;
  padding: 0.75rem;
  border-radius: 0.5rem;
  background-color: #ffffffb3;
  display: flex;
  flex-direction: column;
`;

const CardImageWrapper = styled.div`
  width: 100%;
  height: 270px;
  margin-bottom: 0.5rem;
`;

const CardImage = styled.img.attrs((props) => ({
  src: props.src,
  alt: props.alt || "Image",
  width: 280,
  height: 270,
}))`
  border-radius: 3px;
  object-fit: cover;
  object-position: top;
  width: 100%;
  height: 270px;
`;

const CardInfoWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: auto;
`;

const Title = styled.h3`
  font-size: 0.875rem;
  line-height: 1.25rem;
  font-weight: 400;
  margin-bottom: 0.5rem;
`;

const Price = styled.div`
  font-size: 1rem;
  line-height: 1.875rem;
  font-weight: 700;
`;

interface ICardProps {
  imgSrc: string;
  title: string;
  price: number;
  handleDialogOpen: () => void;
}

export default function Card({
  imgSrc,
  title,
  price,
  handleDialogOpen,
}: ICardProps) {
  return (
    <CardWrapper>
      <CardImageWrapper>
        <CardImage src={imgSrc} alt={title} />
      </CardImageWrapper>
      <Title>{title}</Title>
      <CardInfoWrapper>
        <Price>${price}</Price>
        <Button onClick={handleDialogOpen}>View Details</Button>
      </CardInfoWrapper>
    </CardWrapper>
  );
}
