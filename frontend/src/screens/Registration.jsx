import React,{useState} from 'react';
import { Container,Button,Form } from 'react-bootstrap';
import {useDispatch , useSelector} from 'react-redux';
import {registerUser} from "../actions/userAction";
import Loader from '../component/Loader';
import Error from '../component/Error';
import Success from '../component/Success';


const Registration = () => {
    const [name,setName] = useState('')
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const [confirmPassword,setConfirmPassword] = useState('')

  const registerState = useSelector(state => state.registerUserReducer)
  const {error,success,loading} = registerState

    const dispatch = useDispatch()
    
    const registerhandle = () => {
        if(password !== confirmPassword){
            alert('Password not match, Please enter correct password')
        }
        else{
            const user = {name,email,password,confirmPassword};
            dispatch(registerUser(user));
        }
    }
  return (
    <>
      <Container className='regbox'>
        {loading && <Loader/>}
        {success && <Success success='User Register successfully'/>}
        {error && <Error error='Something went wrong'/>}
      <Form className='formlogin'>
        <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder="Enter Name"
        value={name}
        onChange={e => setName(e.target.value)}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email"
         value={email}
         onChange={e => setEmail(e.target.value)} />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" 
         value={password}
         onChange={e => setPassword(e.target.value)}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicConfirmPassword">
        <Form.Label> Confirm Password</Form.Label>
        <Form.Control type="password" placeholder="Confirm Password"
         value={confirmPassword}
         onChange={e => setConfirmPassword(e.target.value)} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        
      </Form.Group>
      <Button variant="primary" onClick={registerhandle}>
        SignUp
      </Button>
      <br/>
      <h6 style={{height:'10px' , width:'190px'}}> Already have an account? </h6><a style={{ color: "#FF0080" }} href="/login"  className='sin'>
             Login
            </a>
    </Form>
      </Container>
    </>
  )
}

export default Registration
