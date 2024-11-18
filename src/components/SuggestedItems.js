import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import { Link } from "react-router-dom";


function SuggestedItems() {
    return(
        <>
            <section className="portfolio">
                <Container>
                    <Row className="justify-content-center">
                        <Col md={12}>
                            <div className="head-section text-center">
                                <h1>Related Projects</h1>
                            </div>
                        </Col>
                    </Row>
                    <Row className="justify-content-center">
                        <Col md={4} xs={12}>
                            <div className="portfolio-item">
                                <Link to="/portfolio/portfolioItem">
                                    <div className="head-item">
                                    <Image src="https://i.imgur.com/TOLoMCM.png" className="img-fluid w-100" />
                                    </div>
                                </Link>
                                <div className="body-item">
                                    <Link to="/portfolio/portfolioItem">
                                        <h4>Social Media</h4>
                                    </Link>
                                    <p>social</p>
                                </div>
                            </div>
                        </Col>
                        <Col md={4} xs={12}>
                            <div className="portfolio-item">
                                <Link to="/portfolio/portfolioItem">
                                    <div className="head-item">
                                    <Image src="https://i.imgur.com/TOLoMCM.png" className="img-fluid w-100" />
                                    </div>
                                </Link>
                                <div className="body-item">
                                    <Link to="/portfolio/portfolioItem">
                                        <h4>Social Media</h4>
                                    </Link>
                                    <p>social</p>
                                </div>
                            </div>
                        </Col>
                        <Col md={4} xs={12}>
                            <div className="portfolio-item">
                                <Link to="/portfolio/portfolioItem">
                                    <div className="head-item">
                                    <Image src="https://i.imgur.com/TOLoMCM.png" className="img-fluid w-100" />
                                    </div>
                                </Link>
                                <div className="body-item">
                                    <Link to="/portfolio/portfolioItem">
                                        <h4>Social Media</h4>
                                    </Link>
                                    <p>social</p>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}


export default SuggestedItems;
