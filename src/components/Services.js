import { Col, Container, Image, Row } from "react-bootstrap";



function Services(){
    return(
        <>
            <section className="services bg-gray">
                <Container>
                    <Row className="justify-content-center">
                        <Col md={12}>
                            <div className="head-section text-center">
                                <span className="flag-section">WHAT WE CAN DO FOR YOU</span>
                                <h1>Services Provide For You.</h1>
                            </div>
                        </Col>
                        <Col md={4} xs={12}>
                            <div className="service-item">
                                <div className="head-service">
                                    <h4>Awarded Design</h4>
                                    <p>There are many variations variats.</p>
                                </div>
                                <div className="body-service">
                                    <Image src="https://i.imgur.com/ApHkQIT.jpg" className="img-fluid w-100" />
                                </div>
                            </div>
                        </Col>
                        <Col md={4} xs={12}>
                            <div className="service-item">
                                <div className="head-service">
                                    <h4>Awarded Design</h4>
                                    <p>There are many variations variats.</p>
                                </div>
                                <div className="body-service">
                                    <Image src="https://i.imgur.com/ApHkQIT.jpg" className="img-fluid w-100" />
                                </div>
                            </div>
                        </Col>
                        <Col md={4} xs={12}>
                            <div className="service-item">
                                <div className="head-service">
                                    <h4>Awarded Design</h4>
                                    <p>There are many variations variats.</p>
                                </div>
                                <div className="body-service">
                                    <Image src="https://i.imgur.com/ApHkQIT.jpg" className="img-fluid w-100" />
                                </div>
                            </div>
                        </Col>
                        <Col md={4} xs={12}>
                            <div className="service-item">
                                <div className="head-service">
                                    <h4>Awarded Design</h4>
                                    <p>There are many variations variats.</p>
                                </div>
                                <div className="body-service">
                                    <Image src="https://i.imgur.com/ApHkQIT.jpg" className="img-fluid w-100" />
                                </div>
                            </div>
                        </Col>
                        <Col md={4} xs={12}>
                            <div className="service-item">
                                <div className="head-service">
                                    <h4>Awarded Design</h4>
                                    <p>There are many variations variats.</p>
                                </div>
                                <div className="body-service">
                                    <Image src="https://i.imgur.com/ApHkQIT.jpg" className="img-fluid w-100" />
                                </div>
                            </div>
                        </Col>
                        <Col md={4} xs={12}>
                            <div className="service-item">
                                <div className="head-service">
                                    <h4>Awarded Design</h4>
                                    <p>There are many variations variats.</p>
                                </div>
                                <div className="body-service">
                                    <Image src="https://i.imgur.com/ApHkQIT.jpg" className="img-fluid w-100" />
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}
export default Services;