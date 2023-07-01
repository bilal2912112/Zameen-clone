import React from 'react';
import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {  BiPlus } from 'react-icons/bi';
import { MdOutlinePersonOutline } from "react-icons/md";
import { BsFillGearFill,BsHouseDoorFill } from "react-icons/bs";
import zameenLogo from '../../asset/zameen_logo.png'
import flag from '../../asset/flag.png'
import urdutext from '../../asset/Urdutext.svg'
import {  Link } from "react-router-dom";
const Navi = () => {
  return (
    <div> 
        <i class="bi bi-house-door-fill"></i>
     <header className="header">
      <div className="top-nav-bar-wrapper">
        <div className="top-primary-nav ">
          <Navbar expand="lg" bg="green" className="ps-4 pt-0 pb-0">
            <div className="container-fluid">
              <Navbar.Brand href="/"><BsHouseDoorFill /></Navbar.Brand>
              <Navbar.Toggle aria-controls="navbarSupportedContent" />
              <Navbar.Collapse id="navbarSupportedContent">
                <Nav className="me-auto mb-2 mb-lg-0">
                  <Link className="nav-link .text-dark" to="/property">PROPERTIES</Link>
                  <Nav.Link className="nav-link" href="https://www.zameen.com/plotfinder/">PLOT FINDER</Nav.Link>
                 
                  <Link className="nav-link"  to="/blog">BLOG</Link>
                  <Link className="nav-link"  to="/map">MAP</Link>
                  <NavDropdown title="TOOLS" id="navbarDropdown">
                    <NavDropdown.Item href="#">Home Loan Calculator</NavDropdown.Item>
                    <NavDropdown.Item href="#">Area Unit Converter</NavDropdown.Item>
                    <NavDropdown.Item href="#">Land Record Pages</NavDropdown.Item>
                  </NavDropdown>
                  <NavDropdown title="MORE" id="navbarDropdown">
                  <NavDropdown.Item > <Link className="nav-link"  to="/about">ABOUT</Link></NavDropdown.Item>
                    <NavDropdown.Item to="/contact"> <Link className="nav-link"  to="/contact">CONTACT</Link></NavDropdown.Item>
                  </NavDropdown>
                </Nav>
                <div className="top-right-logos">
                  <ul className="d-flex align-items-center">
                    <li className="mx-2"><input type="text" placeholder="Property ID" /></li>
                    <li className="mx-2">
                      <Button className="bg-white d-flex align-items-center">
                        <BiPlus /> Add Property
                      </Button>
                    </li>
                    <li className="mx-2"><a href="#"><img className="w-2 color-white" src={urdutext} alt="" /></a></li>
                    <li className="mx-2"><a href="#"><img className="w-175" src={flag} alt="" /></a></li>
                    <li className="mx-2"><a href="#"><BsFillGearFill className="color-white fs-4" /></a></li>
                    <li className="mx-2"><a href="#"><MdOutlinePersonOutline className="color-white fs-3" /></a></li>
                  </ul>
                </div>
              </Navbar.Collapse>
            </div>
          </Navbar>
        </div>
        <div className="top-secondary-nav pt-0 pb-2">
          <Navbar expand="lg" bg="second-nav" className="ps-4 pt-0 pb-0">
            <div className="container-fluid">
              <Navbar.Brand href="#"><img className="width-8" src={zameenLogo} alt="" /></Navbar.Brand>
              <Navbar.Toggle aria-controls="navbarSupportedContent" />
              <Navbar.Collapse id="navbarSupportedContent">
                <Nav className="me-auto mb-2 mb-lg-0">
                  <Nav.Link className="nav-link active pt-0 pb-0 font-small" href="#">BUY</Nav.Link>
                  <Nav.Link className="nav-link pt-0 pb-0 font-small" href="#">HOME</Nav.Link>
                  <Nav.Link className="nav-link pt-0 pb-0 font-small" href="#">PLOTS</Nav.Link>
                  <Nav.Link className="nav-link border-end pt-0 pb-0 font-small" href="#">COMMERCIAL</Nav.Link>
                  <Nav.Link className="nav-link border-end pt-0 pb-0 font-small" href="#">RENT</Nav.Link>
                  <Nav.Link className="nav-link border-end pt-0 pb-0 font-small" href="#" data-bs-toggle="dropdown">
                    AGENTS
                  </Nav.Link>
                  <NavDropdown title="NEW PROJECTS" id="navbarDropdown">
                    <NavDropdown.Item href="#">Pakistan</NavDropdown.Item>
                    <NavDropdown.Item href="#">International</NavDropdown.Item>
                  </NavDropdown>
                </Nav>
              </Navbar.Collapse>
            </div>
          </Navbar>
        </div>
      </div>
    </header>
    </div>
  )
}

export default Navi