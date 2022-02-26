import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Product } from '../../app/layout/models/product';
import { Avatar, CardHeader } from '@mui/material';
import { Link } from 'react-router-dom';

interface Props{
    product: Product
}

export default function ProductCard({product} : Props) {
  return (
    <Card>
      <CardHeader titleTypographyProps={{ sx: { fontWeight: 'bold', color: 'primary.main' } }} avatar={ <Avatar sx={{bgcolor: 'secondary.main'}} >{product.name.charAt(0).toUpperCase()}</Avatar> } title={product.name}/>
      <CardMedia
        component="img"
        height= '140'
        sx={{ objectFit: 'contain', bgcolor: 'primary.light' }}
        image={product.pictureUrl}
        alt={product.name}
        title={product.name}
      />
      <CardContent>
        <Typography gutterBottom color='secondary' variant="h5">
          ${(product.price / 100).toFixed(2)}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {product.brand} / {product.type}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Add to cart</Button>
        <Button component={Link} to={`/catalog/${product.id}`} size="small">View</Button>
      </CardActions>
    </Card>
  )
}
