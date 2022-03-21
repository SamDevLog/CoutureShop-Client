import {Box} from '@mui/material'
import CategoryCard from './CategoryCard'

export default function Categories() {
  return (
    <Box sx={{ 
      display: 'grid', 
      gridTemplateRows: {
        xs: 'repeat(3, 1fr)',
        md:'repeat(2, 1fr)'
      }, 
      gridTemplateColumns: {
        xs: 'repeat(1, 1fr)',
        md: 'repeat(12, 1fr)'
    },
      width: '75%', 
      margin: 'auto', 
      gap: '1rem' 
      }}>
        <Box sx={{
          gridColumn:{
            xs: 'span 1',
            md: 'span 8'
          }
        }}>
            <CategoryCard height='300px' title='Dresses' img='./images/products/dress6.jpg'/>
        </Box>
        <Box sx={{
          gridRow:{
            xs: 'span 1',
            md: 'span 2'
          },
          gridColumn:{
            xs: 'span 1',
            md: 'span 4'
          }
        }}>
          <CategoryCard title='Caftans' img='./images/products/caftan.webp'/>
        </Box>
        <Box sx={{
          gridColumn:{
            xs: 'span 1',
            md: 'span 8'
          }
        }}>
            <CategoryCard height='300px' title='Coats' img='./images/products/trenchcoat.jpg'/>
        </Box>
    </Box>
  )
}
