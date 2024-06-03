
import React, {useEffect} from 'react'
import {useDispatch,useSelector} from 'react-redux';
import{ Container,Row,Col,Table} from 'react-bootstrap';
import { getAllPizzas } from '../actions/pizzaAction';
import Loader from '../component/Loader';
import Error from '../component/Error';
import Pizza from '../component/Pizza';
import { FaEdit } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";
import { Link } from 'react-router-dom';
import { deletePizza } from '../actions/pizzaAction';

const PizzasList = () => {
  const dispatch = useDispatch()
  const pizzastate = useSelector(state => state.getAllPizzaReducer)
  const {loading, pizzas, error} = pizzastate
  useEffect(()=> {dispatch(getAllPizzas());},[dispatch]);
  return (
    <>
       
      {loading ? (
        <Loader/>
      )
               : error ? (
               <Error>

               <h1>Error while fetching pizzas</h1>
               </Error>)
               : ( 
                <div>
                 <Table striped bordered hover>
      <thead>
        <tr style={{textAlign:'center' }} >
          <th >Pizza Image</th>
          <th>Pizza Name</th>
          <th>Prices</th>
          <th>Category</th>
          <th>Action</th>

        </tr>
      </thead>
      <tbody>
        {
          pizzas && pizzas.map(pizza => (
            <tr>
              <td><img src ={pizza.image} alt = 'pizzaimg' width='100px' height='100px' style={{display:'block',marginLeft:'auto' , marginRight:'auto'}}/></td>
              <td style={{textAlign:'center'}}>{pizza.name}</td>
              <td style={{textAlign:'center'}}> Small: {pizza.prices[0]['Small']}<br/>
               Medium: {pizza.prices[0]['Medium']}<br/>
               Large: {pizza.prices[0]['Large']}</td>
              <td style={{textAlign:'center'}}>{pizza.category}</td>
              <td style={{textAlign:'center'}}>
                <Link to={`/admin/editpizza/${pizza._id}`}>
                <FaEdit style={{cursor:'pointer'}}/>
                </Link>
                 &nbsp; <MdDeleteForever style={{ color: "red", cursor: "pointer" }}
                        onClick={() => {
                          dispatch(deletePizza(pizza._id));
                        }}/></td>

            </tr>
          ))
        }
      </tbody>
    </Table>
                </div>
               )}
   
    
    </>
  )
}

export default PizzasList;
