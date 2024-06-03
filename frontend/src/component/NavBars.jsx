import React from 'react';
import {Nav,Navbar,Container} from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { useDispatch,useSelector } from 'react-redux';
import { FaOpencart } from "react-icons/fa";
import { NavDropdown } from 'react-bootstrap';
import {logoutUser} from "../actions/userAction";

const NavBars = () => {
  const dispatch = useDispatch() 
  const cartState = useSelector((state => state.cartReducer))
  const userState = useSelector(state => state.loginUserReducer);
  const {currentUser} = userState
  const isAdmin = currentUser?.isAdmin;

  return (
    <>
      <Navbar collapseOnSelect  bg='light' variant='light'>
      <Container>
        <Navbar.Brand >
           <div className='logo'>
            <h2>Pizza</h2><h2 className='text'> L🤍ver🍕</h2>
           </div>
        </Navbar.Brand>
        
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            {
              currentUser ? (
                <LinkContainer to="/">
           
            <NavDropdown title={currentUser.name} id="nav-dropdown">
            {isAdmin ? (
                   <LinkContainer to="/admin">
                   <NavDropdown.Item >Dashboard</NavDropdown.Item>
                     </LinkContainer>
                  ) : null}
            <LinkContainer to="/orders">
            <NavDropdown.Item >Orders</NavDropdown.Item>
              </LinkContainer>
        
        <NavDropdown.Item onClick={() => {dispatch(logoutUser())}}>Logout</NavDropdown.Item>
       
      </NavDropdown>
            </LinkContainer>
              ) : (<>  <LinkContainer to="/login">
              <Nav.Link >Login</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/registration">
              <Nav.Link >SignUp</Nav.Link>
              </LinkContainer></>)
            }
          
            <LinkContainer to="/cart">
            <Nav.Link ><FaOpencart /> {cartState.cartItems.length}</Nav.Link>
            </LinkContainer>
           
          </Nav>
         
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  )
}

export default NavBars;
