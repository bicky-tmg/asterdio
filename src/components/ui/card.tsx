import styled from "styled-components";
import Button from "./button";
import Heart from "../../assets/Heart";
import { useEffect, useState } from "react";
import { useFavoriteStore } from "../../store/useFavoriteStore";

export const CardWrapper = styled.div`
  box-shadow: 0 0 #0000, 0 0 #0000, 0 4px 6px -1px rgb(0 0 0 / 0.1),
    0 2px 4px -2px rgb(0 0 0 / 0.1);
  border: 1px solid #e2e8f0;
  padding: 0.75rem;
  border-radius: 0.5rem;
  background-color: #ffffffb3;
  display: flex;
  flex-direction: column;
  position: relative;
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
  margin-bottom: 1rem;
`;

const Price = styled.div`
  font-size: 1rem;
  line-height: 1.875rem;
  font-weight: 700;
`;

const Favorite = styled.span`
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
  padding: 0.5rem;
  background-color: #e2e8f0;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

interface ICardProps {
  id: number;
  imgSrc: string;
  title: string;
  price: number;
  handleDialogOpen: () => void;
}

export default function Card({
  id,
  imgSrc,
  title,
  price,
  handleDialogOpen,
}: ICardProps) {
  const [favoriteActive, setFavoriteActive] = useState(false);
  const { favoriteProducts, addFavorite, deleteFavorite } = useFavoriteStore();

  useEffect(() => {
    favoriteProducts.some((fav) => fav?.id === id)
      ? setFavoriteActive(true)
      : setFavoriteActive(false);
  }, [favoriteProducts, id]);

  return (
    <CardWrapper>
      <Favorite
        onClick={() => {
          setFavoriteActive((prev) => !prev);
          favoriteActive
            ? deleteFavorite(id)
            : addFavorite({
                id,
                title,
                image: imgSrc,
              });
        }}
      >
        <Heart
          fill={favoriteActive ? "#e11d48" : "none"}
          strokeWidth={favoriteActive ? 0 : 2}
          width={18}
          height={18}
        />
      </Favorite>
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
