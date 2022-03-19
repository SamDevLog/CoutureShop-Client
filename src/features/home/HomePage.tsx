import { Typography } from '@mui/material'
import { Box } from '@mui/system';
import React from 'react'
import Slider from 'react-slick';
import { FeaturedProducts } from './featured-products/FeaturedProducts';
import FeaturedCategories from './FeaturedCategories';

export default function HomePage() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true
  };

  return (
    <>
      <Slider {...settings}>
        <div>
          <img src='/images/hero1.webp' alt='hero' style={{display: 'block', width:'100%', maxHeight: 500 }} />
        </div>
        <div>
          <img src='/images/hero2.webp' alt='hero' style={{display: 'block', width:'100%', maxHeight: 500 }} />
        </div>
        <div>
          <img src='/images/hero3.webp' alt='hero' style={{display: 'block', width:'100%', maxHeight: 500 }} />
        </div>
      </Slider>

      <Box display='flex' justifyContent='center' sx={{p: 4}}>
        <Typography variant='h1'>
          Welcome to SDL-Store!
        </Typography>
      </Box>
      <FeaturedCategories/>
      <FeaturedProducts/>
    </>
  )
}
