import React from 'react'
import { Row,Container,Col,Button,ButtonGroup } from 'react-bootstrap'
import {Routes,Route, useNavigate,Link} from 'react-router-dom'
import UserList from './UserList'
import AddNewPizza from './AddNewPizza'
import OrderList from './OrderList'
import PizzasList from './PizzasList'
import { useSelector } from 'react-redux'
import { useEffect } from 'react'
import EditPizza from './EditPizza'
import { GrUserAdmin } from "react-icons/gr";

const AdminScreen = () => {
 const userState = useSelector(state => state.loginUserReducer)
 const {currentUser} = userState;
 useEffect(() => {
  if (localStorage.getItem('currentUser') === null || !currentUser.isAdmin) {
    window.location.href = "/";
  }
}, []);

  return (
    <>
    <div className="row justify-content-center p-3">
    <div className="col-md-10">
    <h2 style={{ fontSize: "35px", textAlign:'center' }}>Admin Panel <GrUserAdmin color='#FF0080'/></h2>
    <ul className="adminfunctions">
            <li>
            <Link to={'/admin/pizzaslist'} style={{color: 'white'}}>Pizza List</Link>
            </li>
            <li>
            <Link to={'/admin/orderlist'} style={{color: 'white'}}>Order List</Link>
            </li>
            <li>
            <Link to={'/admin/addnewpizza'} style={{color: 'white'}}>Add New Pizza</Link>
            </li>
            <li>
            <Link to={'/admin/userlist'} style={{color: 'white'}}>User List</Link>
            </li>
            </ul>
            <img src={require('./eat.avif')} className='eatpizza'></img>
            <Routes>

            <Route path="/admin/pizzaslist" component={PizzasList} exact/>
            <Route path="/admin/orderslist" component={OrderList} exact/>
           <Route path="/admin/addnewpizza" component={AddNewPizza} exact/>
            <Route path="/admin/userlist" component={UserList} exact/>
            <Route path="/admin/editpizza/:pizzaId" element={EditPizza} exact />

            </Routes>

</div>
      </div>
    </>
  )
}

export default AdminScreen
