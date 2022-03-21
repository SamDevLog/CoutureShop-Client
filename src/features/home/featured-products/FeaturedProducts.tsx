import { Grid, Typography } from '@mui/material'
import { Box } from '@mui/system';
import useProducts from '../../../app/hooks/useProducts';
import { FeaturedProductsSlider } from './FeaturedProductsSlider';

export const FeaturedProducts = () => {
    const {products} = useProducts();

  return (
    
    <Grid container width='100%' sx={{backgroundColor: 'grey.900', margin: '2rem 0 2rem 0', justifyContent: 'center',
    alignItems: 'center'}} >
        <Grid item xs={12} md={9}>
            <Box display='flex' justifyContent='center' alignItems='center' flexDirection='column' sx={{p: 4}}>
                <Typography variant="overline" display="block" color='white'>
                Fashion Collections
                </Typography>
                <Typography variant='h3' color='white'>
                    Featured Products
                </Typography>
            </Box>
        </Grid>
        <Grid
        item
        xs={12}
        md={9}
        sx={{
            margin: '2rem 0 2rem 0',
            height: '450px'
        }} 
        component='div' 
        >
            <FeaturedProductsSlider products={products}/>
        </Grid>
    </Grid>
  )
}
