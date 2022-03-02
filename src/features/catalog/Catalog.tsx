import { Checkbox, FormControlLabel, FormGroup, Grid, Pagination, Paper, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { useEffect } from 'react'
import CheckboxButtons from '../../app/components/CheckboxButtons';
import RadioButtonGroup from '../../app/components/RadioButtonGroup';
import LoadingComponent from '../../app/layout/LoadingComponent';
import { useAppDispatch, useAppSelector } from '../../app/store/configureStore';
import { fetchFiltersAsync, fetchProductsAsync, productSelectors, setProductParams } from './catalogSlice';

import ProductList from './ProductList'
import ProductSearch from './ProductSearch';

const sortOptions = [
  {value: 'name', label: 'Alphabetical'},
  {value: 'priceDesc', label: 'Price - High to Low'},
  {value: 'price', label: 'Price - Low to High'},
]

export default function Catalog() {
  const {productsLoaded, status, filtersLoaded, brands, types, productParams} = useAppSelector(state => state.catalog)
  const products = useAppSelector(productSelectors.selectAll);
  const dispatch = useAppDispatch();

  useEffect(()=>{
    if(!productsLoaded) dispatch(fetchProductsAsync());
  }, [dispatch, productsLoaded])

  useEffect(()=>{
    if(!filtersLoaded) dispatch(fetchFiltersAsync());

  },[dispatch, filtersLoaded])

  if(status.includes('pending')) return <LoadingComponent message='Loading Catalog...'/>

  return (
      <Grid container spacing={4}>
        <Grid item xs={3}>
          <Paper sx={{mb: 2}}>
            <ProductSearch />
          </Paper>

          <Paper sx={{mb: 2, p: 2}}>
            <RadioButtonGroup 
                selectedValue={productParams.orderBy} 
                options={sortOptions}
                onChange={e => dispatch(setProductParams({orderBy: e.target.value}))} />
          </Paper>

          <Paper sx={{mb: 2, p: 2}}>
            <CheckboxButtons 
                items={brands} 
                checked={productParams.brands}
                onChange={(items: string[])=> dispatch(setProductParams({brands: items}))} 
            />
          </Paper>

          <Paper sx={{mb: 2, p: 2}}>
          <CheckboxButtons 
                items={types} 
                checked={productParams.types}
                onChange={(items: string[])=> dispatch(setProductParams({types: items}))} 
            />
          </Paper>

        </Grid>
        <Grid item xs={9}>
          <ProductList products={products} />
        </Grid>
        <Grid item xs={3}></Grid>
        <Grid item xs={9}>
          <Box display='flex' justifyContent='space-between' alignItems='center'>
            <Typography>
              Displaying 1-6 of 20 items
            </Typography>
            <Pagination count={10} shape="rounded" color='secondary' size='large' sx={{mb: 2}} />
          </Box>
        </Grid>
      </Grid>
      )
}
