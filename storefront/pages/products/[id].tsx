import { GetStaticPaths, GetStaticProps } from 'next';
import { useRouter } from 'next/router'
import { MouseEvent, Props, useEffect, useState } from 'react'
import { Product } from '../../utils/types/wooCommerceTypes'
import { fetchProducts, findProductById } from '../../utils/wooCommerceApi'
import ProductDetailsSection from '../../features/ProductDetails/ProductDetailsSection';
import { useAppDispatch } from '../../store/hooks';
import { addLineItem } from '../../store/slices/cartSlice';

/*const Post = ({product}) => {
    /*const router = useRouter()
    const { id } = router.query
    const str_id = String(id)
    const [data, setData] = useState("");

    useEffect(() => {
      (async () => {
        const data = await findProductById(str_id);
        setData(data);
      })();*/
    //const [product, setProduct] = useState(null)

    /*useEffect (()=>{
      async function fetchProduct(){
        setProduct(await findProductById(id))
      }
      return fetchProduct()
    }, [])
    findProductById(String({id}))
    .then(response => console.log(response))
    return () => {
      ProductDetail(String(id))
    }
    
  },[]);
  return ProductDetail()
}*/

interface Props {
  product: Product;
}

export default function ProductDetail(props: Props) {
  const dispatch = useAppDispatch();

  const lineItem = {
    name: props.product.name,
    product_id: props.product.id,
    quantity: 1,
    price: props.product.regular_price,
  };

  const handleIncrement = () => {
    dispatch(addLineItem(lineItem));
  };
  
  return (
    <ProductDetailsSection 
      product={props.product} 
      onClickFunction={handleIncrement}
    />
  );
}



//export default Post