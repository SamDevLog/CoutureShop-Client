import { Grid, Typography } from '@mui/material'
import {Box} from '@mui/system'
import React from 'react'
import Categories from './Categories'

export default function FeaturedCategories() {
  return (
    <>
        <Grid container spacing={2}>
            <Grid item xs={12}>
                <Box display='flex' justifyContent='center' alignItems='center' flexDirection='column' sx={{p: 4}}>
                    <Typography variant="overline" display="block">
                    Fashion Collections
                    </Typography>
                    <Typography variant='h3'>
                        Featured Categories
                    </Typography>
                </Box>
            </Grid>
            <Grid item xs={12} sx={{margin: 'auto'}}>
                <Categories/>
            </Grid>
        </Grid>
    </>
  )
}
