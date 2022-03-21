import { Grid, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import { useAppSelector } from '../../app/store/configureStore';
import BasketSummary from './BasketSummary';
import BasketTable from './BasketTable';

export default function BasketPage() {
  const {basket} = useAppSelector(state => state.basket);
    if(!basket) return <Typography variant='h4' textAlign='center'>Wow! Your basket is empty! <br/> Go add some products! It's free...just for you!</Typography>

  return (
    <>
      <BasketTable items={basket.items} />
      <Grid mb={3} container>
        <Grid item md={6} display={{xs: 'none', md: 'block'}} />
        <Grid item xs={12} md={6}>
          <BasketSummary/>
          <Button
            sx={{marginTop: 2}}
            component={Link}
            to='/checkout'
            variant='contained'
            size='large'
            fullWidth
          >
            Checkout
          </Button>
        </Grid>
      </Grid>

    </>
  )
}
