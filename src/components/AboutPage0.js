import { Col, Container, Image, Row } from "react-bootstrap";


function AboutPage0(){
    return(
        <>
            <section className='about'>
                <Container>
                    <Row>
                        <Col md={6} xs={12}>
                            <div className="img-about">
                                <Image src="https://i.imgur.com/R9oeNkK.jpg" className="img-fluid w-100" />
                            </div>
                        </Col>
                        <Col md={6} xs={12}>
                            <div className="overlay-text">
                                <div className="text-about">
                                    <div className="head-text">
                                        <h1>about us</h1>
                                    </div>
                                    <div className="body-text">
                                        <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. They live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
                                        <p>A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences</p>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={4} xs={12}>
                            <div className="about-item">
                                <div className="icon-item text-center">
                                    <Image src="https://i.imgur.com/co6QOeO.jpg" className="img-fluid" />
                                </div>
                                <div className="body-item text-center">
                                    <h4>our vision</h4>
                                    <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. They live in Bookmarksgrove right at the coast of the Semantics, a large language ocean</p>
                                </div>
                            </div>
                        </Col>
                        <Col md={4} xs={12}>
                            <div className="about-item">
                                <div className="icon-item text-center">
                                    <Image src="https://i.imgur.com/co6QOeO.jpg" className="img-fluid" />
                                </div>
                                <div className="body-item text-center">
                                    <h4>our mission</h4>
                                    <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. They live in Bookmarksgrove right at the coast of the Semantics, a large language ocean</p>
                                </div>
                            </div>
                        </Col>
                        <Col md={4} xs={12}>
                            <div className="about-item">
                                <div className="icon-item text-center">
                                    <Image src="https://i.imgur.com/co6QOeO.jpg" className="img-fluid" />
                                </div>
                                <div className="body-item text-center">
                                    <h4>our message</h4>
                                    <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. They live in Bookmarksgrove right at the coast of the Semantics, a large language ocean</p>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}


export default AboutPage0;