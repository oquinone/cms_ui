import React from 'react';
import Button from 'react-bootstrap/Button';
import "../Styling/navbar.scss";

const Navbar = () => {
    return(
        <div id="navbar">
            <ul>
                <li><Button variant="primary">Home</Button></li>
                <li><Button variant="primary">Two</Button>{' '}</li>
                <li><Button variant="primary">Three</Button>{' '}</li>
            </ul>
        </div>
    )
}

export default Navbar;
