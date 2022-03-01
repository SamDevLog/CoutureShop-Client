import { useEffect } from 'react'
import LoadingComponent from '../../app/layout/LoadingComponent';
import { useAppDispatch, useAppSelector } from '../../app/store/configureStore';
import { fetchProductsAsync, productSelectors } from './catalogSlice';

import ProductList from './ProductList'

export default function Catalog() {
  const {productsLoaded, status} = useAppSelector(state => state.catalog)
  const products = useAppSelector(productSelectors.selectAll);
  const dispatch = useAppDispatch();

  useEffect(()=>{
    if(!productsLoaded)
    {
      dispatch(fetchProductsAsync());
    }
  }, [dispatch, productsLoaded])

  if(status.includes('pending')) return <LoadingComponent message='Loading Catalog...'/>

  return (
      <>
        <ProductList products={products} />
      </>
      )
}
