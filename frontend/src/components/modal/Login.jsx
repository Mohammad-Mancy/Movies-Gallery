import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import Signup from './Signup';
import { useDispatch } from 'react-redux'
import { setToken } from './../../features/user'
import {reactLocalStorage} from'reactjs-localstorage'

function Login() {

  const dispatch = useDispatch();

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  let handleSubmit = async (e) => {
    try {
      let res = await fetch('http://localhost:3000/api/user/auth/login',{
        method : 'POST',
        headers : {'Content-Type' : 'application/json'},
        body : JSON.stringify({
          email:email,
          password:password
        })
      })
      const data = await res.json()
      if (res.status === 200) {
        dispatch(setToken(data.token))
        reactLocalStorage.set('token',data.token)
        handleClose()
      }
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
      <Button variant="link" onClick={handleShow} className='login-btn yellow-color-font'>
        Login
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Login Form</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" >
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="name@example.com"
                onChange={e => setEmail(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" >
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                onChange={e => setPassword(e.target.value)}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
            <Signup />
          <Button variant="secondary" onClick={handleClose} className="btn-close-form">
            Close
          </Button>
          <Button variant="primary" onClick={handleSubmit} className="btn-login">
            Login
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Login