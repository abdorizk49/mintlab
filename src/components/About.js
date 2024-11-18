import { Col, Container, Image, Row } from "react-bootstrap";
import { Link } from "react-router-dom";


function About(){
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
                                    <div className="foot-text">
                                        <Link to='/about' className="btn btn-about"><span>more about us</span></Link>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}


export default About;