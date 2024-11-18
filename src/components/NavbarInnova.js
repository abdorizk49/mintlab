import { Link } from 'react-router-dom';
import { Button, Container, Image, Nav, Navbar, Offcanvas } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import React, { useEffect, useState } from 'react';

function NavbarInnova() {

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  const [isActive, setIsActive] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setIsActive(true);
      } else {
        setIsActive(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Clean up event listener when component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navbarActive = isActive ? 'nav-active' : '';
  const navbarNavActive = isActive ? 'navbarNav-active' : '';
  const navbarLinks = (
    <>
      <Nav className={`${navbarNavActive}`}>
        <Link className='nav-link' to="/">Home</Link>
        <Link className='nav-link' to="/about">about us</Link>
        <Link className='nav-link' to="/services">our services</Link>
      </Nav>
      <Nav className={`${navbarNavActive}`}>
        <Link className='nav-link' to="/portfolio">our portfolio</Link>
        <Link className='nav-link' to="/contact">contact us</Link>
      </Nav>
    </>
  );
  return (
    <>
      <Navbar expand="lg" className={`navbar-desktop ${navbarActive}`}>
        <Container>
            <div className="header-scroll-content d-flex w-100">
              {React.cloneElement(navbarLinks)}
              <Link to='/' className="navbar-brand">
                <Image src="https://www.themezaa.com/html/pofo/images/logo.png" className="img-fluid" />
                <Image src="https://www.themezaa.com/html/pofo/images/logo.png" className="img-fluid" />
              </Link>
            </div>
        </Container>
      </Navbar>
      <Navbar expand="lg" className={`navbar-mobile ${navbarActive}`}>
        <Container>
            <div className="header-scroll-content d-flex w-100">
              <Link to='/' className="navbar-brand">
                <Image src="https://www.themezaa.com/html/pofo/images/logo.png" className="img-fluid" />
                <Image src="https://www.themezaa.com/html/pofo/images/logo.png" className="img-fluid" />
              </Link>
              <Nav className={`nav-barMob ${navbarNavActive}`}>
                  <Button className='bar-mob' variant="" onClick={handleShow}>
                    <FontAwesomeIcon icon={faBars} />
                  </Button>
              </Nav>
            </div>
        </Container>
        <Offcanvas show={show} onHide={handleClose}>
          <Offcanvas.Header closeButton>
              <Link to='/' className="navbar-brand">
                <Image src="https://www.themezaa.com/html/pofo/images/logo.png" className="img-fluid" />
              </Link>
          </Offcanvas.Header>
          <Offcanvas.Body>
            {React.cloneElement(navbarLinks)}
          </Offcanvas.Body>
        </Offcanvas>
      </Navbar>
    </>
  );
};

export default NavbarInnova;