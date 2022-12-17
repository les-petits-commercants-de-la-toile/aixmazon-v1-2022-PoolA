import styled from "styled-components";
import Image from "next/image";
import { Product } from "../../utils/types/wooCommerceTypes";
import { useState } from "react";
import { Button } from "../../components/index";

interface Props {
    product: Product;
    onClickFunction: React.MouseEventHandler<HTMLButtonElement>;
  }
  
  const ProductDetailsSection = (props: Props) => {
    const { product } = props;
  
    const [isClicked, setIsClicked] = useState(false);

    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
      setIsClicked(true);
      props.onClickFunction(e);
      setTimeout(() => setIsClicked(false), 300);
    };

    return (
      <Details>
        <ImageContainer>
          <Image
            src={product.images[0].src}
            alt={product.images[0].alt}
            layout="fill"
            objectFit="cover"
          />
        </ImageContainer>
        <ProductDetailsInfo>
          <h2>{product.name}</h2>
          <h3>Description</h3>
          <p>{product.description}</p>
          <p>{product.regular_price}€</p>
          <Button onClickFunction={handleClick} isClicked={isClicked}>
            AJOUTER AU PANIER
          </Button>
        </ProductDetailsInfo>
      </Details>
    );
  };
  
  export default ProductDetailsSection;
  
  const Details = styled.main`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center
  `;

  const ImageContainer = styled.section`
    order: 1;
    width: 50%;
    /* height: 50%; */
    padding-bottom: 100%; /* forces square aspect ratio */
  `;

  const ProductDetailsInfo = styled.section`
    order: 2;
    display: flex;
    flex-direction: column;
  `;