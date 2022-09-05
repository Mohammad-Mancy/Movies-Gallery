import React from 'react'
import NavBar from "./../NavBar";
import Button from 'react-bootstrap/Button';
import Stack from 'react-bootstrap/Stack';
import Form from 'react-bootstrap/Form';
import { Footer } from "./../Footer";

function Account() {

    const [name,setName] = React.useState()
    const [email,setEmail] = React.useState()
    const [password,setPassword] = React.useState()
    const [newPassword,setNewPassword]  = React.useState()
    const [confirmPassword,setConfirmPassword] = React.useState()

    let handleSaveChanges = async (e) => {
        e.preventDefault()
        // After Appling API Code here
    }

  return (
    <div>
        <NavBar />
        <h1>My Account</h1>
        {/* Form */}
        <Form className='mg-bottom' onSubmit={handleSaveChanges}>

            <Form.Group  className="col-md-3 mx-auto label-input" controlId="formBasicName">
                <Form.Label >Name</Form.Label>
                <Form.Control 
                type="text" 
                placeholder="Name" 
                onChange={ (e) => setName(e.target.value)}
                />
            </Form.Group>

            <Form.Group className="col-md-3 mx-auto label-input" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control 
                type="email" 
                placeholder="Enter email"
                onChange={ (e) => setEmail(e.target.value)}
                />
                <Form.Text className='text-muted-app'>
                We'll never share your email with anyone else.
                </Form.Text>
            </Form.Group>

            <Form.Group  className="col-md-3 mx-auto label-input" controlId="formBasicPassword">
                <Form.Label>Your Password</Form.Label>
                <Form.Control 
                type="password" 
                placeholder="Enter your password" 
                onChange={ (e) => setPassword(e.target.value)}
                />
            </Form.Group>

            <Form.Group  className="col-md-3 mx-auto label-input" controlId="formNewPassword">
                <Form.Label>New Password</Form.Label>
                <Form.Control 
                type="password" 
                placeholder="Enter your new password"
                onChange={ (e) => setNewPassword(e.target.value)}
                />
            </Form.Group>

            <Form.Group  className="col-md-3 mx-auto label-input" controlId="formonfirmPassword">
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control 
                type="password" 
                placeholder="Enter your confirmation password" 
                onChange={ (e) => setConfirmPassword(e.target.value)}
                />
            </Form.Group>

            <hr className="col-md-3 mx-auto"></hr>

            <Stack gap={2} className="col-md-3 mx-auto">
                <Button variant="success" type="submit">Save changes</Button>
                <Button variant="outline-danger">Cancel</Button>
            </Stack>
        </Form>

        <Footer />
    </div>
  )
}

export default Account