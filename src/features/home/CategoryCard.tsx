import { Card, CardContent, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

export interface Props {
  img: string;
  title: string;
  height?: string;
}

export default function CategoryCard({img, title, height = "100%"}: Props) {

  const cardText = {
    position: 'absolute',
    top: '50%',
    right: '50%',
    transform: 'translate(50%, -50%)',
    color: 'white',
    zIndex: 2
  };

  return (
    <Card component={Link} to='catalog' sx={{height}}>
        <CardContent sx={{
          position: 'relative',
          backgroundImage: `url(${img})`,
          height: `${height}`,
          width: '100%',
          '&:hover':{
            transform: 'scale(1.02)',
            transition: 'all 400ms ease'
          },
          '&::after' :{
            content: '""',
            display: 'block',
            height: '100%',
            width: '100%',
            backgroundColor: 'rgba(0,0,0,0.6)',
            position: 'absolute',
            top: 0,
            left: 0
          }
        }} 
          component='div'
        >
          <Typography sx={cardText} textAlign='center' variant='h2' color="text.secondary">
              {title}
          </Typography>
        </CardContent>
    </Card>
  )
}
