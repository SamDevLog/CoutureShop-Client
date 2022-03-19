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
      <Grid container>
        <Grid item xs={6}/>
        <Grid item xs={6}>
          <BasketSummary/>
          <Button
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
