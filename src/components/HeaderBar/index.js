import React from "react";
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Navbar from 'react-bootstrap/Navbar';


function HeaderBar(props) {
    return (

        <Navbar bg="primary" className="text-light">
            <Navbar.Brand href="#home" className="text-light"> <b>Clicky Game!</b> </Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse className="justify-content-end">
                <Navbar.Text className="text-light">
                    {props.title}
                </Navbar.Text>
            </Navbar.Collapse>

            <Navbar.Collapse className="justify-content-end">
                <Navbar.Text className="text-light">
                    Score: {props.currentScore} | Top Score: {props.topScore}
                </Navbar.Text>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default HeaderBar;