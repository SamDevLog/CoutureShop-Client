import { Divider, Grid, Table, TableBody, TableCell, TableContainer, TableRow, TextField, Typography } from '@mui/material'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import NotFound from '../../app/errors/NotFound';
import LoadingComponent from '../../app/layout/LoadingComponent';
import { currencyFormat } from '../../app/util/util';
import { LoadingButton } from '@mui/lab';
import { useAppSelector, useAppDispatch } from '../../app/store/configureStore';
import { addBasketItemAsync, removeBasketItemAsync } from '../basket/basketSlice';
import { fetchProductAsync, productSelectors } from './catalogSlice';


export default function ProductDetails() {
  const {basket, status} = useAppSelector(state => state.basket);
  const {status: productStatus} = useAppSelector(state => state.catalog);
  const dispatch = useAppDispatch();
  const {id} = useParams<{id:string}>();

  const product = useAppSelector(state => productSelectors.selectById(state, id));

  const [quantity, setQuantity] = useState(0);

  const item = basket?.items.find(i => i.productId === product?.id);

  const inputChangeHandler = (e: any)=>{
    if(e.target.value >= 0){
      setQuantity(parseInt(e.target.value));
    }
  }

  const updateCartHandler = ()=> {
    if(!item || quantity > item.quantity)
    {
      const updatedQuantity = item ? quantity - item.quantity : quantity;
      dispatch(addBasketItemAsync({productId: product?.id!, quantity: updatedQuantity}));
    }else{
      const updatedQuantity = item.quantity - quantity;
      dispatch(removeBasketItemAsync({productId: product?.id!, quantity: updatedQuantity}));
    }
  }
  
  useEffect(()=>{
    if(item) setQuantity(item.quantity);

    if(!product) dispatch(fetchProductAsync(parseInt(id)));
    
  }, [id, item, dispatch, product])

  if(productStatus.includes('pending')) return <LoadingComponent message='Loading product...'/>

  if(!product) return <NotFound/>

  return (
    <Grid container flexDirection={{xs: 'column', md: 'row'}} mb={2} spacing={6}>
      <Grid item sx={{margin: {xs: 'auto', md: 'unset'}}} xs={9} md={6}>
        <img src={product.pictureUrl} alt={product.name} style={{width: '100%'}} />
      </Grid>
      <Grid item xs={12} md={6}>
        <Typography textAlign={{xs: 'center', md: 'left'}} variant='h3'>{product.name}</Typography>
        <Divider sx={{mb:2}}></Divider>
        <Typography variant='h3' textAlign={{xs: 'center', md: 'left'}} color='secondary'>{currencyFormat(product.price)}</Typography>
        <TableContainer>
          <Table>
            <TableBody>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell>{product.name}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Description</TableCell>
                <TableCell>{product.description}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Type</TableCell>
                <TableCell>{product.type}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Brand</TableCell>
                <TableCell>{product.brand}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Quantity in Stock</TableCell>
                <TableCell>{product.quantityInStock}</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <TextField
              onChange={inputChangeHandler}
              variant='outlined'
              type='number'
              label='Quantity in Cart'
              fullWidth
              value={quantity}
            />
          </Grid>
          <Grid item xs={6}>
            <LoadingButton
              disabled={item?.quantity === quantity || (!item && quantity === 0)}
              loading={status.includes('pending')}
              onClick={updateCartHandler}
              sx={{height: '55px'}}
              color='primary'
              size='large'
              variant='contained'
              fullWidth
            >
              {item ? 'Update Quantity' : 'Add to Cart'}
            </LoadingButton>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  )
}
