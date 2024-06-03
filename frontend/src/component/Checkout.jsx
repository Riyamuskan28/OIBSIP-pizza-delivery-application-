import React from 'react'
import { Button } from 'react-bootstrap';
import StripeCheckout from 'react-stripe-checkout';
import { useDispatch,useSelector } from 'react-redux';
import { placeOrder } from '../actions/orderAction';
import Loder from './Loader';
import Error from './Error';
import Success from './Success';
const Checkout = ({total}) => {
  const orderState = useSelector(state=> state.placeOrderReducer)
  const {loading,error,success} =orderState
    const dispatch = useDispatch()
  const  tokenHandle =(token) => {
    dispatch(placeOrder(token,total)
    )
        console.log(token);
    };
  return (
    <>
    {loading && (<Loder/>)}
    {error && (<Error error='Something went wrong'/>)}
    {success && (<Success success='order placed success'/>)}

    <StripeCheckout amount ={total * 100}
  shippingAddress
  token={tokenHandle}
stripeKey='pk_test_51PJIhlSFJHW9QsOIEFfxqyr8GPVp45ngHJldsl8t7yXdt9eunh7w34LtCwYXmkauIskm1sUgE7klsGwWOqbuCHhF00uu9uojsd'
  currency='INR'>
    <Button>Pay Now</Button>
  </StripeCheckout>
  </>
  )
}

export default Checkout;
