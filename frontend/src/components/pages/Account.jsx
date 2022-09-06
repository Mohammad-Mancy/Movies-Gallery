import React from 'react'
import NavBar from "./../NavBar";
import Button from 'react-bootstrap/Button';
import Stack from 'react-bootstrap/Stack';
import Form from 'react-bootstrap/Form';
import { Footer } from "./../Footer";
import { useSelector,useDispatch } from 'react-redux';
import jwt_decode from "jwt-decode";
import {reactLocalStorage} from'reactjs-localstorage';
import { setToken } from './../../features/user'

function Account() {

    const token = useSelector((state) => state.token.value)
    const dispatch = useDispatch();

    var decoded = jwt_decode(token);
    const userId = decoded._id

    const accessToken = JSON.stringify(token)

    const [name,setName] = React.useState(decoded.name)
    const [password,setPassword] = React.useState()
    const [newPassword,setNewPassword]  = React.useState(null)
    const [confirmPassword,setConfirmPassword] = React.useState(null)

    const [validated, setValidated] = React.useState(false);
    const [passNotification, setPassNotification] = React.useState(false);

    let handleSaveChanges = async (e) => {
        e.preventDefault()
        if (newPassword !== confirmPassword) {
            setValidated(true)
            return
        }
        setValidated(false)

        let res = await fetch('http://localhost:3000/api/user/auth/edit-profile',{
            method:'PUT',
            headers:{
                'Content-Type' : 'application/json',
                'authorization' : accessToken
            },
            body: JSON.stringify({
                id:userId,
                name:name,
                email:decoded.email,
                password:password,
                newPassword:newPassword
            })
        })
        const data = await res.json();
        if(res.status === 201) {
            setPassNotification(false)
            dispatch(setToken(data.newToken))
            reactLocalStorage.set('token',data.newToken)
            handleClose()
        }else if (res.status === 401 && data === false) {
            setPassNotification(true)
        }}

    let handleClose = () => {
        console.log('close function')
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
                placeholder="username" 
                onChange={ (e) => setName(e.target.value)}
                />
            </Form.Group>

            <Form.Group className="col-md-3 mx-auto label-input" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control 
                type="email" 
                placeholder={decoded.email}
                disabled
                />
                <Form.Text className='text-muted-app'>
                You can't change your email, Create new account!.
                </Form.Text>
            </Form.Group>

            <Form.Group  className="col-md-3 mx-auto label-input" controlId="formBasicPassword">
                <Form.Label>Your Password <span style={{color:'red'}}>*</span></Form.Label>
                <Form.Control 
                type="password" 
                placeholder="Enter your password" 
                onChange={ (e) => setPassword(e.target.value)}
                required
                />
                {
                    passNotification && <Form.Text style={{color:'red'}}>Invalid password please enter correct password!</Form.Text>
                }
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
                {
                    validated && <Form.Text style={{color:'red'}}>Does not match password before!</Form.Text>
                }
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