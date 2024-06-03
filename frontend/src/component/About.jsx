import React from 'react'
import {Container,Row,Col} from 'react-bootstrap';
import { PiChefHatThin } from "react-icons/pi";

const About = () => {
  return (
    <>
      <Container style={{marginTop:'50px'}}>
        <h1>Who We Are</h1>
<p>At Pizza Lover, we're more than just a pizza delivery service – we're a team of passionate individuals dedicated to bringing you the best pizza experience possible. Let me introduce myself: I'm Riya Muskan, founder and pizza aficionado. My love for pizza started at a young age, and I've made it my mission to share that love with the world through our app.

But I'm not alone in this journey. Behind every delicious pie is a team of talented staff who share the same commitment to quality and customer satisfaction. From our expert pizza chefs who handcraft each pie with precision and care to our friendly delivery drivers who ensure your order arrives hot and fresh, every member of our team plays a crucial role in making your pizza dreams a reality.

What sets us apart is our dedication to excellence in every aspect of the pizza-making process. From sourcing the finest ingredients to perfecting our recipes, we never compromise on quality. And with our commitment to exceptional customer service, we strive to make every interaction with our app a delightful experience.

So whether you're craving a classic cheese pizza or a gourmet specialty pie, trust [Your Pizza Delivery App] and our team to deliver a slice of happiness to your doorstep every time. Welcome to the family!</p>        <h1>Our Speciality</h1>
        <Row>
            <Col md={6}>
              <p>Welcome to our special section dedicated to the timeless art of authentic Italian pizza! At Pizza Lover, we believe in honoring tradition, flavor, and quality. Dive into the world of true Italian pizza and experience a culinary journey like no other.</p>
<p>Experience the true taste of Italy with our authentic Italian pizza, crafted using traditional recipes and the finest ingredients. Our pizzas feature a thin, crisp crust, a rich tomato sauce made from San Marzano tomatoes, and fresh mozzarella cheese. We use hand-selected toppings such as basil, prosciutto, and artichokes, ensuring each bite delivers genuine Italian flavors. Perfectly baked in a wood-fired oven, our pizzas offer a delightful balance of simplicity and sophistication.</p>
 </Col>
            <Col md ={6}>
            <img src={require('./italian.jpg')}></img>
            </Col>
        </Row>
        <Row>
            <h1>Our chef <PiChefHatThin size={70}/></h1>
            <Col md={3}>
              <img src={require('./chef.jpg')} width={300} height={300}></img>
            </Col>
            <Col md={3}>
              <img src={require('./chef1.jpg')} width={300} height={300}></img>
            </Col>
            <Col md={3}>
              <img src={require('./chef2.jpg')} width={300} height={300}></img>
            </Col>
            <Col md={3}>
              <img src={require('./chef4.jpg')} width={300} height={300}></img>
            </Col>
        </Row>
      </Container>
    </>
  )
}

export default About;
