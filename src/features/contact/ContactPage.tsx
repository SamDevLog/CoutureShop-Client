import { Button, ButtonGroup, Typography } from '@mui/material'
import React from 'react'
import { useAppDispatch, useAppSelector } from '../../app/store/configureStore'
import { decrement, increment } from './counterSlice';

export default function ContactPage() {

  const {data, title} = useAppSelector((state)=> state.counter)
  const dispatch = useAppDispatch();
  
  

  return (
    <>
      <Typography variant='h2'>{title}</Typography>
      <Typography variant='h5'>The data is : {data}</Typography>
      <ButtonGroup>
        <Button variant='contained' color='primary' onClick={()=> dispatch(increment(1))}>Increment by 1</Button>
        <Button variant='contained' color='primary' onClick={()=> dispatch(increment(5))}>Increment by 5</Button>
        <Button variant='contained' color='error' onClick={()=> dispatch(decrement(1))}>Decrement by 1</Button>
      </ButtonGroup>
      
    </>
  )
}
