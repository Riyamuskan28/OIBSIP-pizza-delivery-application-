
import React from 'react';
import { Container,Row,Col, Button } from 'react-bootstrap';
import { useSelector, useDispatch} from 'react-redux';
import { IoMdAddCircle } from "react-icons/io";
import { FaMinusCircle } from "react-icons/fa";
import { addToCart,deleteFromCart } from '../actions/cartAction';
import { FaTrashAlt } from "react-icons/fa";
import Checkout from '../component/Checkout';
import { RiShoppingBag4Fill } from "react-icons/ri";
import { FcMoneyTransfer } from "react-icons/fc";


const CartScreen = () => {
    const cartState = useSelector(state => state.cartReducer)
    const cartItems = cartState.cartItems;
    const dispatch = useDispatch();
    const total = cartItems.reduce((x,item)=> x + item.price,0)
  return (
    <>
     <Container>
        <Row>
            <Col md={6}>
                <h1> My Cart < RiShoppingBag4Fill/> </h1>
                <Row>
                    {
                    cartItems.map((item) => (
                        <>
                        <Col md ={7}>
                            <h5>{item.name} [{item.varient}]</h5>
                            <h6> {" "}
                      Price : {item.quantity} x {item.prices[0][item.varient]} ={" "}
                      {item.price}
                      </h6> 
                      <h6> Quantity: < FaMinusCircle className='text-danger'  style={{cursor:"pointer"}} onClick={()=> {dispatch(addToCart(item,item.quantity-1,item.varient))}}/>
                      &nbsp;{item.quantity} &nbsp;<IoMdAddCircle className='text-success' size={'20px'} style={{cursor:"pointer"}} onClick={()=> {dispatch(addToCart(item,item.quantity+1,item.varient))}}/></h6>
                        </Col>
                        <Col md ={5}>
                            <img alt ={item.name} src={item.image} style={{width:'150px', height:'150x',marginTop:'20px'}}/>
                            < FaTrashAlt className='text-danger'  style={{cursor:"pointer",marginBottom:'110px',marginLeft:'20px'}} onClick={()=> {dispatch(deleteFromCart(item))}}/>
                        </Col>
                        <hr/>
                        </>
                    ))}
                </Row>
                </Col>
                <Col md={4}> <h1>Payment Info <FcMoneyTransfer/></h1>
                <h4>Sub Total</h4>
                <h4>Rs : {total}/-</h4>
             <Checkout total={total}/>
                </Col>
                </Row>
                </Container> 
    </>
  );
};

export default CartScreen;
