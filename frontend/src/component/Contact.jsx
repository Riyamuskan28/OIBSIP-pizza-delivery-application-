import React from 'react'
import { Container ,Row , Col,Table} from'react-bootstrap'
import {FaPhoneVolume } from 'react-icons/fa6';
import { FaMobileScreen } from "react-icons/fa6";
import { TfiEmail } from "react-icons/tfi";

const Contact = () => {
  return (
    <div>
      <Container style={{marginTop:'50px'}}>
       <Row>
        <Col md={6}>
            <h1>Pizza Lover</h1>
<p>Discover the essence of authentic Italian pizza with every order from our kitchen. We take pride in crafting pizzas that embody the rich culinary traditions of Italy. Our dough is made fresh daily, hand-stretched to achieve the perfect thin and crispy crust. We use only the highest quality ingredients, including vine-ripened San Marzano tomatoes for our sauce and creamy mozzarella cheese. Each pizza is topped with fresh, locally sourced ingredients, from aromatic basil to savory prosciutto and flavorful artichokes. Baked to perfection in a traditional wood-fired oven, our pizzas offer an unparalleled taste experience that brings a slice of Italy to your table.
</p>
<p>

We value your feedback and are here to assist you with any questions or concerns. Reach out to us through any of the following methods:

- **Phone:** Call us at (123) 456-7890 for orders, inquiries, or assistance.
- **Email:** Send us a message at contact@ourpizzeria.com and we'll respond promptly.
- **Address:** Visit us at 123 Pizza Street, Food City, FC 45678.

Follow us on social media to stay updated on our latest offerings and special promotions. We look forward to serving you and making your pizza experience extraordinary.
      </p>
    <Table striped bordered hover className='text-center'>
      <thead>
        <tr>
          <th className='bg-warning' colSpan={3}>--- Contact Details ---</th>
          
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><FaPhoneVolume /></td>
          <td>Phone</td>
          <td>01234-56789</td>
         
        </tr>
       
        <tr>
          <td><FaMobileScreen /></td>
          <td>Call</td>
          <td>1234567809</td>
         
        </tr>
       
      
        <tr>
          <td><TfiEmail/></td>
          <td>Email</td>
          <td>pizza@gmail.com</td>
         
        </tr>
       
      </tbody>
    </Table>
    </Col>
    <Col md={6}>
    <img src={require('./pizzzza.jpg')} width={'100%'} height={'100%'} ></img></Col>
       </Row>
      </Container>
    </div>
  )
}

export default Contact;
