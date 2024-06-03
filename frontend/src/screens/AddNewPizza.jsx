import React, { useState } from "react";
import { Form, Row, Col, Button } from "react-bootstrap";
import { addPizza } from "../actions/pizzaAction";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../component/Loader";
import Success from "../component/Success";
import Error from "../component/Error";
import { IoIosAddCircleOutline } from "react-icons/io";

const AddNewPizza = () => {
  const [name, setname] = useState("");
  const [smallPrice, setsmallPrice] = useState();
  const [largeprice, setlargeprice] = useState();
  const [mediumPrice, setmediumPrice] = useState();
  const [image, setimage] = useState("");
  const [description, setdescription] = useState("");
  const [category, setcategory] = useState("");

  const addPizzaState = useSelector((state) => state.addPizzaReducer);
  const { loading, error, success } = addPizzaState;

  const dispatch = useDispatch();
  const submitForm = (e) => {
    e.preventDefault();
    const pizza = {
      name,
      image,
      description,
      category,
      prices: {
        Small: smallPrice,
        Medium: mediumPrice,
        Large: largeprice,
      },
    };
    dispatch(addPizza(pizza));
  };
  return (
    <div className="new">
      <div className='box'>
        <h1 style={{textAlign:'center'}}>Add Pizza <IoIosAddCircleOutline color="#FF0080"/></h1>
</div>
      {loading && <Loader />}
      {error && <Error error="add new pizza error" />}
      {success && <Success success="Pizza Added Successfully" />}
      
      <Form onSubmit={submitForm} className="bg-light p-4">
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              value={name}
              onChange={(e) => setname(e.target.value)}
              placeholder="Enter Pizza Name"
            />
          </Form.Group>
          <Row className="mb-3 mt-3">
            <Form.Group as={Col} controlId="formGridCity">
              <Form.Label>Small Price</Form.Label>
              <Form.Control
                type="text"
                value={smallPrice}
                onChange={(e) => setsmallPrice(e.target.value)}
                placeholder="Enter Small Price"
              />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridState">
              <Form.Label>Medium Price</Form.Label>
              <Form.Control
                type="text"
                value={mediumPrice}
                onChange={(e) => setmediumPrice(e.target.value)}
                placeholder="Enter Medium Price"
              />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridZip">
              <Form.Label>Large Price</Form.Label>
              <Form.Control
                type="text"
                value={largeprice}
                onChange={(e) => setlargeprice(e.target.value)}
                placeholder="Enter Large price"
              />
            </Form.Group>
          </Row>
          <Form.Group as={Col} controlId="formGridPassword">
            <Form.Label>Image</Form.Label>
            <Form.Control
              type="text"
              value={image}
              onChange={(e) => setimage(e.target.value)}
              placeholder="Add Image URL"
            />
          </Form.Group>
        </Row>

        <Form.Group className="mb-3" controlId="formGridAddress1">
          <Form.Label>Description</Form.Label>
          <Form.Control
            type="text"
            value={description}
            onChange={(e) => setdescription(e.target.value)}
            placeholder="Enter Description"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formGridAddress2">
          <Form.Label>Category</Form.Label>
          <Form.Control
            type="text"
            value={category}
            onChange={(e) => setcategory(e.target.value)}
            placeholder="Enter Category"
          />
        </Form.Group>

        <Button variant="primary" type="submit" style={{display:'block', marginLeft:'350px'}}>
          Add New 
        </Button>
      </Form>
      </div>
  );
};

export default AddNewPizza;