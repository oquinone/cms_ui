import React from 'react'
import UiButton from '../Components/buttons';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import '../Styling/login.scss';

const Login = () => {
    return (
        <div id="form-container">
            <Form id="form">
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <UiButton variant="primary" type="submit" title="Submit"/>
            </Form>
        </div>
    );
}
export default Login;