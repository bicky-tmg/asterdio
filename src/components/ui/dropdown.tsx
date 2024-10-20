import styled from "styled-components";
import { CardWrapper } from "./card";
import { useFavoriteStore } from "../../store/useFavoriteStore";
import { CloseButton } from "./dialog";
import { ScrollArea } from "../styles/scrollArea";

const DropdownContainer = styled(CardWrapper)`
  padding: 6px;
  width: 20rem;
  border-radius: 6px;
  position: absolute;
  top: 110%;
  right: 0;
  background-color: #fff;
`;

const DropdownHeader = styled.h3`
  font-size: 0.875rem;
  font-weight: 600;
  line-height: 1.25rem;
  padding: 6px 8px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const DropdownSeperator = styled.div`
    height: 1px;
    margin-left: -0.25rem 
    margin-right: -0.25rem 
    margin-top: 0.25rem;
    margin-bottom: 0.25rem;
    background-color: #f1f5f9;
`;

const DropdownContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 100%;
  margin-top: 0.25rem;
`;

const FavoriteCard = styled(CardWrapper)`
  padding: 4px;
  width: 100%;
  border-radius: 4px;
  display: flex;
  box-shadow: none;
  flex-direction: row;
  padding-right: 10px;
`;

const FavoriteImage = styled.img.attrs((props) => ({
  src: props.src,
  alt: props.alt || "Image",
  width: 35,
  height: 35,
}))`
  border-radius: 3px;
  width: 35px;
  height: 35px;
  flex-shrink: 0;
`;

const FavoriteTitle = styled(DropdownHeader)`
  padding-top: 0;
  padding-bottom: 0;
  padding-right: 0;
  font-size: 0.75rem;
  align-items: stretch;
  line-height: 1.5;
`;

const FavoriteClosebutton = styled(CloseButton)`
  top: 4px;
  right: 6px;
  font-size: 11px;
  font-weight: 400;
`;

const NoDataText = styled(FavoriteTitle)`
  color: #64748b;
  font-weight: 400;
`;

export default function Dropdown() {
  const { favoriteProducts, deleteFavorite } = useFavoriteStore();
  return (
    <DropdownContainer>
      <DropdownHeader>
        Favorites{" "}
        <span>{favoriteProducts.length > 0 && favoriteProducts.length}</span>
      </DropdownHeader>
      <DropdownSeperator />
      <ScrollArea>
        <DropdownContent>
          {favoriteProducts.length > 0 ? (
            favoriteProducts.map((favProduct) => (
              <FavoriteCard>
                <FavoriteClosebutton
                  onClick={() => deleteFavorite(favProduct.id)}
                >
                  X
                </FavoriteClosebutton>
                <FavoriteImage src={favProduct.image} alt={favProduct.title} />
                <FavoriteTitle>{favProduct.title}</FavoriteTitle>
              </FavoriteCard>
            ))
          ) : (
            <NoDataText>No favorites yet.</NoDataText>
          )}
        </DropdownContent>
      </ScrollArea>
    </DropdownContainer>
  );
}
