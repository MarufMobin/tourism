import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import './Header.css'

const Header = () => {
  const {user,logOut} = useAuth()
    return ( 
        <Navbar className="header-color" expand="lg" sticky="top">
        <Container>
          <Navbar.Brand style={{fontFamily: "cursive",fontWeight : "600",color:"#fff"}}> <Link style={{textDecoration:"none",color:"#fff"}} to="/">ZulZanaTravel</Link> </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
                    <Nav.Link className="cutom-navlink"  ><Link to="/home"  >Home</Link></Nav.Link>
                    
                    <Nav.Link className="cutom-navlink me-3">  <Link to="/trips" >Trips</Link></Nav.Link>
                    <Nav.Link className="cutom-navlink" ><Link to="/about"  >About</Link></Nav.Link>
                    
                    <Nav.Link className="cutom-navlink ">  <Link to="/contact" >Contact</Link></Nav.Link>
                    <Nav.Link className="cutom-navlink ">  <Link to="/registration" >registration</Link></Nav.Link>
                  {
                    user.email &&   <Nav.Link className="cutom-navlink ">  <Link to="/manageuser" >My Orders</Link></Nav.Link>
                  }
                    {/* <Nav.Link className="cutom-navlink ">  <Link to="/login" >Login</Link> {user?.displayName} <img style={{width:"30px",height:"30px",borderRadius:"50%"}} src={user?.photoURL} alt="" /></Nav.Link> */}
                      {user.email && <div><img style={{width:"30px",height:"30px",borderRadius:"50%"}} src={user?.photoURL} alt="" /> <span>{user.displayName}</span> </div>}
                {
                    user.email ?
                        <button onClick={logOut} className="ms-4 custom-btn-header">log out</button>
                        :
                        <NavLink to="/login"><span className="custom-btn-header my-2" style={{textDecoration:"none"}}>Login</span></NavLink>}
                     
                </Nav>
               
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
};

export default Header;