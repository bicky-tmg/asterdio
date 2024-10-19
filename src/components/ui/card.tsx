import styled from "styled-components";
import Button from "./button";

const CardWrapper = styled.div`
  --tw-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
  --tw-shadow-colored: 0 4px 6px -1px var(--tw-shadow-color),
    0 2px 4px -2px var(--tw-shadow-color);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000),
    var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
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

interface ICard {
  imgSrc: string;
  title: string;
  price: number;
}

export default function Card({ imgSrc, title, price }: ICard) {
  return (
    <CardWrapper>
      <CardImageWrapper>
        <CardImage src={imgSrc} alt={title} />
      </CardImageWrapper>
      <Title>{title}</Title>
      <CardInfoWrapper>
        <Price>${price}</Price>
        <Button>View Details</Button>
      </CardInfoWrapper>
    </CardWrapper>
  );
}
