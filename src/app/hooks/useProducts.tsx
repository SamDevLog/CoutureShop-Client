import { useEffect } from 'react'
import { useAppSelector, useAppDispatch } from '../store/configureStore';
import { productSelectors, fetchProductsAsync, fetchFiltersAsync } from '../../features/catalog/catalogSlice';

export default function useProducts() {

    const products = useAppSelector(productSelectors.selectAll);
    const {productsLoaded, filtersLoaded, brands, types, metaData} = useAppSelector(state => state.catalog);
    const dispatch = useAppDispatch();
  
    useEffect(()=>{
      if(!productsLoaded) dispatch(fetchProductsAsync());
    }, [dispatch, productsLoaded])
  
    useEffect(()=>{
      if(!filtersLoaded) dispatch(fetchFiltersAsync());
  
    },[dispatch, filtersLoaded])

  return {products, productsLoaded, filtersLoaded, brands, types, metaData}
}
