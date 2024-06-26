import React,{ useState } from 'react';
import {Card,Button,Row,Col,Modal} from 'react-bootstrap';
import { useDispatch,useSelector } from 'react-redux';
import { addToCart } from '../actions/cartAction';
import { IoRestaurantOutline } from "react-icons/io5";


const Pizza = ({pizza}) => {
const [varient, setVarient] = useState('Small')
const [quantity, setQuantity] = useState(1)
const [show, setShow] = useState(false);
const dispatch = useDispatch();
const addToCartHandler = () =>{
  dispatch(addToCart(pizza, quantity, varient))
}

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    
    <>
       <Card style={{ width: '23rem' , marginTop:'30px'}}>
      <Card.Img variant="top" src={pizza.image} style={{height:'250px', cursor:'pointer'}} 
      onClick={handleShow}/>
      <Card.Body>
        <Card.Title>{pizza.name}</Card.Title>
        <hr/>
        <Card.Text>
            <Row>
                <Col md={6}>
<h6>Varients</h6>
<select value={varient} onChange={(e) => setVarient(e.target.value)}>
    {pizza.varients.map((varient)=>(
        <option  >{varient}</option>
    ))}
</select>
                </Col>
                <Col md={6}>
            <h6>Quantity</h6>  
                  <select value={quantity}  onChange={(e) => setQuantity(e.target.value)}>
               {[...Array(10).keys()].map((v,i)=>(
                 <option value={i+1} >{i +1}</option>
                ))}
                </select>
                </Col>
            </Row>
        </Card.Text>
        <Row>
        <Col md={6}>Price: {pizza.prices[0][varient] * quantity }/-Rs</Col>
        <Col md={6}>
          <Button  onClick={addToCartHandler} className='btn'><IoRestaurantOutline />
Add to card</Button>
        </Col>
        </Row>
      </Card.Body>
    </Card>
   
      <Modal show={show} onHide={handleClose} >
        <Modal.Header closeButton style={{background:'cyan'}}>
          <Modal.Title>{pizza.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body style={{background:'pink'}}>
          <div>
          <Card.Img variant="top" src={pizza.image} style={{height:'250px'}} 
        />
        </div>
        <div><h5>Description:</h5>
        <h6>{pizza.description}</h6>
          </div>
        </Modal.Body>
        
      </Modal>
    </>
  );
};

export default Pizza;
