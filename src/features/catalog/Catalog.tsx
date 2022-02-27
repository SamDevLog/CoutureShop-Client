import { useEffect, useState } from 'react'
import agent from '../../app/api/agent';
import LoadingComponent from '../../app/layout/LoadingComponent';
import { Product } from '../../app/layout/models/product'

import ProductList from './ProductList'

export default function Catalog() {
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(()=>{
    agent.Catalog.list().then(products => setProducts(products))
                .catch(error => console.log(error))
                .finally(()=> setLoading(false));
  }, [])

  if(loading) return <LoadingComponent message='Loading Catalog...'/>

  return (
      <>
        <ProductList products={products} />
      </>
      )
}
