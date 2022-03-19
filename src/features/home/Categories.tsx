import {Grid} from '@mui/material'
import CategoryCard from './CategoryCard'

export default function Categories() {
  return (
    <Grid display="grid" gridTemplateRows="repeat(2, 1fr)" gridTemplateColumns="repeat(12, 1fr)" width='75%' margin='auto' gap={2} marginBottom={4}>
        <Grid gridColumn="span 8">
            <CategoryCard height='300px' title='Dresses' img='./images/products/dress6.jpg'/>
        </Grid>
        <Grid gridRow="span 2" gridColumn="span 4">
          <CategoryCard title='Caftans' img='./images/products/caftan.webp'/>
        </Grid>
        <Grid gridColumn="span 8">
            <CategoryCard height='300px' title='Coats' img='./images/products/trenchcoat.jpg'/>
        </Grid>
    </Grid>
  )
}
