import { Col, Container, Image, Row } from "react-bootstrap";
import { Link } from "react-router-dom";



function PortfolioHome(){

    return(
        <>
            <section className="portfolio">
                <Container>
                    <Row className="justify-content-center">
                        <Col md={12}>
                            <div className="head-section text-center">
                                <span className="flag-section">PORTFOLIO DEFAULT</span>
                                <h1>You Can Customize Everything!</h1>
                            </div>
                        </Col>
                        <Col md={4} xs={12}>
                            <div className="portfolio-item">
                                <Link to="/portfolio/portfolioItem">
                                    <div className="head-item">
                                        <Image src="https://i.imgur.com/BMQz4wW.png" className="img-fluid w-100" />
                                    </div>
                                </Link>
                                <div className="body-item">
                                    <Link to="/portfolio/portfolioItem">
                                        <h4>Graphic Design</h4>
                                    </Link>
                                    <p>graphic</p>
                                </div>
                            </div>
                        </Col>
                        <Col md={4} xs={12}>
                            <div className="portfolio-item">
                                <Link to="/portfolio/portfolioItem">
                                    <div className="head-item">
                                        <Image src="https://i.imgur.com/BMQz4wW.png" className="img-fluid w-100" />
                                    </div>
                                </Link>
                                <div className="body-item">
                                    <Link to="/portfolio/portfolioItem">
                                        <h4>Graphic Design</h4>
                                    </Link>
                                    <p>graphic</p>
                                </div>
                            </div>
                        </Col>
                        <Col md={4} xs={12}>
                            <div className="portfolio-item">
                                <Link to="/portfolio/portfolioItem">
                                    <div className="head-item">
                                        <Image src="https://i.imgur.com/BMQz4wW.png" className="img-fluid w-100" />
                                    </div>
                                </Link>
                                <div className="body-item">
                                    <Link to="/portfolio/portfolioItem">
                                        <h4>Graphic Design</h4>
                                    </Link>
                                    <p>graphic</p>
                                </div>
                            </div>
                        </Col>
                        <Col md={12}>
                            <div className="text-center btn-more">
                                <Link to='/portfolio' className="btn"><span>More Works</span></Link>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}


export default PortfolioHome;