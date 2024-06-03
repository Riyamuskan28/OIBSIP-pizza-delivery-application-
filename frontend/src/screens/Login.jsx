import React,{useState,useEffect} from 'react';
import {Container,Button,Form} from 'react-bootstrap'
import {useDispatch,useSelector} from 'react-redux'
import {loginUser} from '../actions/userAction'
const Login = () => {
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')
  const dispatch = useDispatch()
  
  useEffect(() => {
if(localStorage.getItem('currentUser')){
  window.location.href = "/"
}
  },[])

  const loginhandle = () =>{
    const user = {email,password}
    dispatch(loginUser(user))
  }
  return (
    <>
    <Container className='loginbox'>
    <Form className='formlogin'>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" 
        value={email}
        onChange={(e) => setEmail(e.target.value)}/>
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" 
        value={password}
        onChange={(e) => setPassword(e.target.value)}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
      </Form.Group>
      <Button variant="primary"  onClick={loginhandle} className='btn'>
        Login
      </Button>
      <br />
      <h6 style={{height:'10px' , width:'180px'}}> Dont't have an account? </h6><a style={{ color: "#FF0080" }} href="/registration"  className='log'>
             SignUp
            </a>
    </Form>
    </Container>
      
    </>
  )
}

export default Login
