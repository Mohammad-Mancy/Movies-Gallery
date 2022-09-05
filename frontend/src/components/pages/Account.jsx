import React from 'react'
import NavBar from "./../NavBar";
import Button from 'react-bootstrap/Button';
import Stack from 'react-bootstrap/Stack';
import Form from 'react-bootstrap/Form';

function Account() {
  return (
    <div>
        <NavBar />
        <h1>My Account</h1>
        {/* Form */}
        <Form>

            <Form.Group  className="col-md-3 mx-auto label-input" controlId="formBasicPassword">
                <Form.Label >Name</Form.Label>
                <Form.Control type="text" placeholder="Name" />
            </Form.Group>

            <Form.Group className="col-md-3 mx-auto label-input" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
                <Form.Text className='text-muted-app'>
                We'll never share your email with anyone else.
                </Form.Text>
            </Form.Group>

            <Form.Group  className="col-md-3 mx-auto label-input" controlId="formBasicPassword">
                <Form.Label>Your Password</Form.Label>
                <Form.Control type="password" placeholder="Enter your password" />
            </Form.Group>

            <Form.Group  className="col-md-3 mx-auto label-input" controlId="formNewPassword">
                <Form.Label>New Password</Form.Label>
                <Form.Control type="password" placeholder="Enter your new password" />
            </Form.Group>

            <Form.Group  className="col-md-3 mx-auto label-input" controlId="formNewPassword">
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control type="password" placeholder="Enter your confirmation password" />
            </Form.Group>

            <hr className="col-md-3 mx-auto"></hr>

            <Stack gap={2} className="col-md-3 mx-auto">
                <Button variant="success" type="submit">Save changes</Button>
                <Button variant="outline-danger">Cancel</Button>
            </Stack>
        </Form>
    </div>
  )
}

export default Account