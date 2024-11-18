import { faAddressCard, faImage, faMessage } from "@fortawesome/free-regular-svg-icons";
import { faAngleDown, faBriefcase, faGears, faHouse, faLink, faUser, faUserAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Accordion, Image, ListGroup } from "react-bootstrap";
import { Link } from "react-router-dom";

function Sidbar(){
    return (
        <>
            <div className="sidbar">
                <div className="sibar-content">
                    <div className="logoImg">
                        <Link to='/admin/dashboard'>
                            <Image src="http://www.themezaa.com/html/pofo/images/logo-white.png" className="img-fluid" />
                            <Image src="http://www.themezaa.com/html/pofo/images/logo-white.png" className="img-fluid" />
                        </Link>
                    </div>
                    <div className="adminUpdate">
                        <Link to='/admin/update' className="nav-link">
                            <FontAwesomeIcon icon={faUser} />
                            <span>Administrator</span>
                        </Link>
                    </div>
                    <div className="accordions">
                        <Accordion defaultActiveKey="0">
                            <Accordion.Item eventKey="1">
                                <Accordion.Header>
                                    <span className="text-icon"><FontAwesomeIcon icon={faHouse}></FontAwesomeIcon>Home</span>
                                    <span> <FontAwesomeIcon icon={faAngleDown}></FontAwesomeIcon> </span>
                                </Accordion.Header>
                                <Accordion.Body>
                                    <ListGroup>
                                        <ListGroup.Item>
                                            <Link to='/admin/sliders' className="nav-link"><span>sliders</span></Link>
                                        </ListGroup.Item>
                                        <ListGroup.Item>
                                            <Link to='/admin/aboutHome' className="nav-link"><span>about</span></Link>
                                        </ListGroup.Item>
                                        <ListGroup.Item>
                                            <Link to='/admin/orderContact' className="nav-link"><span>order contact</span></Link>
                                        </ListGroup.Item>
                                        <ListGroup.Item>
                                            <Link to='/admin/headContactRequest' className="nav-link"><span>head contact request</span></Link>
                                        </ListGroup.Item>
                                    </ListGroup>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="2">
                                <Accordion.Header>
                                    <span className="text-icon"><FontAwesomeIcon icon={faAddressCard}></FontAwesomeIcon>About</span>
                                    <span> <FontAwesomeIcon icon={faAngleDown}></FontAwesomeIcon> </span>
                                </Accordion.Header>
                                <Accordion.Body>
                                    <ListGroup>
                                        <ListGroup.Item>
                                            <Link to='/admin/about' className="nav-link"><span>about</span></Link>
                                        </ListGroup.Item>
                                    </ListGroup>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="3">
                                <Accordion.Header>
                                    <span className="text-icon"><FontAwesomeIcon icon={faGears}></FontAwesomeIcon>services</span>
                                    <span> <FontAwesomeIcon icon={faAngleDown}></FontAwesomeIcon> </span>
                                </Accordion.Header>
                                <Accordion.Body>
                                    <ListGroup>
                                        <ListGroup.Item>
                                            <Link to='/admin/headservices' className="nav-link"><span>head services</span></Link>
                                        </ListGroup.Item>
                                        <ListGroup.Item>
                                            <Link to='/admin/services' className="nav-link"><span>services</span></Link>
                                        </ListGroup.Item>
                                    </ListGroup>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="4">
                                <Accordion.Header>
                                    <span className="text-icon"><FontAwesomeIcon icon={faBriefcase}></FontAwesomeIcon>portfolio</span>
                                    <span> <FontAwesomeIcon icon={faAngleDown}></FontAwesomeIcon> </span>
                                </Accordion.Header>
                                <Accordion.Body>
                                    <ListGroup>
                                        <ListGroup.Item>
                                            <Link to='/admin/headportfolio' className="nav-link"><span>head portfolio</span></Link>
                                        </ListGroup.Item>
                                        <ListGroup.Item>
                                            <Link to='/admin/portfolio' className="nav-link"><span>all portfolio</span></Link>
                                        </ListGroup.Item>
                                        <ListGroup.Item>
                                            <Link to='/admin/orderPrice' className="nav-link"><span>order price</span></Link>
                                        </ListGroup.Item>
                                    </ListGroup>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="5">
                                <Accordion.Header>
                                    <span className="text-icon"><FontAwesomeIcon icon={faMessage}></FontAwesomeIcon>contact</span>
                                    <span> <FontAwesomeIcon icon={faAngleDown}></FontAwesomeIcon> </span>
                                </Accordion.Header>
                                <Accordion.Body>
                                    <ListGroup>
                                        <ListGroup.Item>
                                            <Link to='/admin/headcontact' className="nav-link"><span>head contact</span></Link>
                                        </ListGroup.Item>
                                        <ListGroup.Item>
                                            <Link to='/admin/messages' className="nav-link"><span>messages</span></Link>
                                        </ListGroup.Item>
                                    </ListGroup>
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                        <div className="linksOut">
                            <h2>
                                <Link to='/admin/logos' className="nav-link"><FontAwesomeIcon icon={faImage}></FontAwesomeIcon><span>logos</span></Link>
                            </h2>
                            <h2>
                                <Link to='/admin/subsliders' className="nav-link"><FontAwesomeIcon icon={faImage}></FontAwesomeIcon><span>sub sliders</span></Link>
                            </h2>
                            <h2>
                                <Link to='/admin/links' className="nav-link"><FontAwesomeIcon icon={faLink}></FontAwesomeIcon><span>links</span></Link>
                            </h2>
                            <h2>
                                <Link to='/admin/users' className="nav-link"><FontAwesomeIcon icon={faUserAlt}></FontAwesomeIcon><span>add user</span></Link>
                            </h2>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}


export default Sidbar;