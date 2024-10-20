import styled from "styled-components";
import Button, { ButtonWrapper } from "./button";
import { IProduct } from "../../types/product";
import { useState } from "react";

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 50;
`;

const DialogContainer = styled.div`
  background-color: white;
  border-radius: 8px;
  padding: 1.5rem;
  max-width: 40rem;
  width: 100%;
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: 50;
  box-shadow: 0 0 #0000, 0 0 #0000, 0 10px 15px -3px rgb(0 0 0 / 0.1),
    0 4px 6px -4px rgb(0 0 0 / 0.1);
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 1rem;
  right: 1rem;
  cursor: pointer;
  background: transparent;
  border: 0;
  color: #1c2024;
  font-size: 1rem;
  font-weight: 600;
`;

const DialogImage = styled.img.attrs((props) => ({
  src: props.src,
  alt: props.alt || "Image",
  width: 280,
  height: 270,
}))`
  border-radius: 3px;
  object-fit: contain;
  object-position: center;
  height: 350px;
`;

const DialogContent = styled.div`
  display: flex;
  gap: 2rem;
  align-items: center;
`;

const DialogDescription = styled.div`
  display: flex;
  flex-direction: column;
`;

const Title = styled.h1`
  font-size: 1.5rem;
  font-weight: 700;
  line-height: 1.875rem;
  margin-bottom: 0.5rem;
`;

const Description = styled.p`
  font-size: 0.875rem;
  line-height: 1.25rem;
  margin-bottom: 0.75rem;
`;

const Price = styled.div`
  font-size: 1rem;
  line-height: 1.875rem;
  font-weight: 700;
`;

const CtaWrapper = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1.5rem;
`;

const QuantityWrapper = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
  justify-content: center;
`;

const QuantityBtn = styled(ButtonWrapper)`
  background-color: #efefef;
  font-size: 1.5rem;
  color: inherit;
`;

const QuantityAmount = styled.span`
  width: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

interface IDialogProps {
  isOpen: boolean;
  handleDialogOpen: (state: boolean) => void;
  productDetail: IProduct | null;
}

export default function Dialog({
  isOpen,
  handleDialogOpen,
  productDetail,
}: IDialogProps) {
  const [quantity, setQuantity] = useState(0);

  const handleQuantityAdd = () => {
    setQuantity((prevQty) => prevQty + 1);
  };

  const handleQuantitySub = () => {
    setQuantity((prevQty) => {
      if (prevQty == 0) return prevQty;

      return prevQty - 1;
    });
  };

  if (!isOpen) return null;

  return (
    <>
      <Overlay />
      <DialogContainer>
        <CloseButton
          onClick={() => {
            handleDialogOpen(false);
            setQuantity(0);
          }}
        >
          X
        </CloseButton>
        <DialogContent>
          <DialogImage src={productDetail?.image} />
          <DialogDescription>
            <Title>{productDetail?.title}</Title>
            <Description>{productDetail?.description}</Description>
            <Price>${productDetail?.price}</Price>
            <CtaWrapper>
              <QuantityWrapper>
                <QuantityBtn onClick={handleQuantitySub}>-</QuantityBtn>
                <QuantityAmount>{quantity}</QuantityAmount>
                <QuantityBtn onClick={handleQuantityAdd}>+</QuantityBtn>
              </QuantityWrapper>

              <Button>Add to Cart</Button>
            </CtaWrapper>
          </DialogDescription>
        </DialogContent>
      </DialogContainer>
    </>
  );
}
