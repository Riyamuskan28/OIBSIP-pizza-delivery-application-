import React, {useEffect} from 'react'
import {useDispatch,useSelector} from 'react-redux';
import{ Container,Row,Col} from 'react-bootstrap';
import Pizza from '../component/Pizza';
import {getAllPizzas} from "../actions/pizzaAction";
import Loader from '../component/Loader';
import Error from '../component/Error';
import Filters from '../component/Filters';
// import AllPizza from "../pizza-data";

const HomeScreen = () => {
 const dispatch = useDispatch()
 const pizzastate = useSelector(state => state.getAllPizzaReducer)
 const {loading, pizzas, error} = pizzastate
 useEffect(()=> {dispatch(getAllPizzas());},[dispatch]);
  return(
    <>
    <Container>
      {loading ? (
        <Loader/>
      )
               : error ? (
               <Error>

               <h1>Error while fetching pizzas</h1>
               </Error>)
               : (  <Row> <Filters/>
                {pizzas.map((pizza) => (
                 <Col md={4}>
                    <Pizza pizza={pizza}/>
                 </Col>
                ))}
            </Row>)}
   
    </Container>
    </>
  );
};

export default HomeScreen;
