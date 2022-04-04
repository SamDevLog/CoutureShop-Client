import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Product } from '../../app/models/product';
import { Avatar, CardHeader } from '@mui/material';
import { Link } from 'react-router-dom';
import { LoadingButton } from '@mui/lab';
import { currencyFormat } from '../../app/util/util';
import { useAppDispatch, useAppSelector } from '../../app/store/configureStore';
import { addBasketItemAsync } from '../basket/basketSlice';

interface Props{
    product: Product
}

export default function ProductCard({product} : Props) {
  const {status} = useAppSelector(state => state.basket)
  const dispatch = useAppDispatch();

  return (
    <Card sx={{maxWidth: 350}}>
      <CardHeader titleTypographyProps={{ sx: { fontWeight: 'bold', color: 'contrastText' } }} avatar={ <Avatar sx={{bgcolor: 'primary.dark', width: 32, height: 32}} >{product.name.charAt(0).toUpperCase()}</Avatar> } title={product.name}/>
      <CardMedia
        component="img"
        height= '140'
        sx={{ objectFit: 'contain', bgcolor: 'primary.light' }}
        image={product.pictureUrl}
        alt={product.name}
        title={product.name}
      />
      <CardContent>
        <Typography gutterBottom sx={{color:'text'}} variant="h5">
          {currencyFormat(product.price)}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {product.brand} / {product.type}
        </Typography>
      </CardContent>
      <CardActions>
        <LoadingButton
              loading={status.includes('pendingAddItem' + product.id)} 
              onClick={()=> dispatch(addBasketItemAsync({productId: product.id}))} 
              size="small" sx={{color:'text'}}>
                <Typography color='secondary' variant="button">
                  Add to cart
                </Typography>
              </LoadingButton>
        
        <Button component={Link} to={`/catalog/${product.id}`} size="small">
          <Typography color='secondary' variant="button">
            View
          </Typography>
        </Button>
      </CardActions>
    </Card>
  )
}
