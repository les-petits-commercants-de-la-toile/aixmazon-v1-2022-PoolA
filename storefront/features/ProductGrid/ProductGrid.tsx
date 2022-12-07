import styled from "styled-components";
import { Product } from "../../utils/types/wooCommerceTypes";
import { ProductCard } from "../../containers";

interface Props {
  products: Product[];
}

const ProductGrid = (props: Props) => {
  const { products } = props;
  return (
    <Grid>
      {products.map((product) => {
        return <ProductCard product={product} key={product.id} />;
      })}
    </Grid>
  );
};

export default ProductGrid;

const Grid = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(5, 1fr);
  grid-column-gap: 30px;
  grid-row-gap: 30px;

  @media (orientation: portrait) {
    width: 70%;
    margin: auto;
    grid-template-columns: 1fr;
  }
`;
