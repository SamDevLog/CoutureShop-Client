import { Elements } from '@stripe/react-stripe-js'
import { loadStripe, StripeElementsOptions } from '@stripe/stripe-js'
import React, { useEffect, useState } from 'react'
import agent from '../../app/api/agent';
import LoadingComponent from '../../app/layout/LoadingComponent';
import { useAppDispatch } from '../../app/store/configureStore';
import { setBasket } from '../basket/basketSlice';
import CheckoutPage from './CheckoutPage'

const stripePromise = loadStripe("pk_test_51KagcSGEvbzaXqZ1yeBk9pMlsT77MLneH4jQ9TGoZn6ENfGcI8LEGZuJYKYRBr7z1rqgHw6X0NrQiXEUQWxoR0UK00fq2RzOG3");


export default function CheckoutWrapper() {
  const dispatch = useAppDispatch();
  const [loading, setLoading] = useState(true);

  const options:StripeElementsOptions = {
    appearance: {
      theme: 'night'
    }
  }

  useEffect(()=>{
    agent.Payments.createPaymentIntent()
      .then((basket)=> dispatch(setBasket(basket)))
      .catch(error => console.log(error))
      .finally(()=> setLoading(false));
  }, [dispatch])

  if(loading) return <LoadingComponent message='Loading checkout...' />


  return (
    <Elements options={options} stripe={stripePromise}>
        <CheckoutPage/>
    </Elements>
  )
}
