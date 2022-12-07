import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { Product } from '../../utils/types/wooCommerceTypes'
import { findProductById } from '../../utils/wooCommerceApi'

const Post = () => {
    const router = useRouter()
    const { id } = router.query
    const [product, setProduct] = useState(null)

    useEffect (()=>{
      async function fetchProduct(){
        setProduct(await findProductById(id))
      }
      return fetchProduct()
    }, [])

    return ProductDetail(product)
  }

async function ProductDetail(product : Product){
  return (<p>{product.description}</p>)
}

export default Post