import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

function Signup() {

  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [notification,setNotification] = useState(false);

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  let handleSubmit = async (e) => {
    try {
      let res = await fetch('http://localhost:3000/api/user/auth/register',{
        method : 'POST',
        headers : {'Content-Type' : 'application/json'},
        body : JSON.stringify({
          name:name,
          email:email,
          password:password
        })
      })
      const data = await res.json()
      if (res.status === 200) {
        setNotification(true)
      }
    } catch (error) {
      console.log(error)
    }
    setTimeout(() => {
      setNotification(false)
      handleClose()
    },2000)
  }

  return (
    <>
      <h6 onClick={handleShow} className='signup-link'>Create New Account</h6>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Signup Form</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
          <Form.Group className="mb-3">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Full Name"
                onChange={e => setName(e.target.value)}
                onKeyDown={e => e.stopPropagation()}
              />
            </Form.Group>
            <Form.Group className="mb-3" >
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="name@example.com"
                onChange={e => setEmail(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="min 6 character"
                onChange={e => setPassword(e.target.value)}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        {notification &&
            <div><h6 style={{color:'green',textAlign:'center'}}>Account created successfully</h6></div>}
        <Modal.Footer>
          <h6 className='signup-link' onClick={handleClose}>Already Have An Account</h6>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSubmit}>
            Signup
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Signup