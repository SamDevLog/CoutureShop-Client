import Slider from 'react-slick'
import { Product } from '../../../app/models/product';
import FeaturedProductCard from './FeaturedProductCard';

export interface Props {
    products: Product[]
}

export const FeaturedProductsSlider = ({products}: Props) => {

    const sliderSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        centerMode: true,
        arrows: true,
        autoplay: true,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                initialSlide: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
      };

  return (
    <Slider {...sliderSettings}>
        {
            products.map((p)=>{
                return (
                    <FeaturedProductCard product={p} key={p.id} />
                )
            })
        }
        
    </Slider>
  )
}
