import React, { useState } from "react";
import { Button, Col, Container, Form, Image, InputGroup, Row } from "react-bootstrap";



function Contact(){
    const [validated, setValidated] = useState(false);
    const handleSubmit = (event) => {
      const form = event.currentTarget;
      if (form.checkValidity() === false) {
        event.preventDefault();
        event.stopPropagation();
      }
      else{
        setValidated(true);
      }
    };

    return(
        <>
            <section className="ordercontact contact">
                <Container>
                    <Row>
                        <Col md={12}>
                            <div className="head-section text-center">
                                <h1>Contact Us</h1>
                                <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration. Contact Us for more information.0000</p>
                            </div>
                        </Col>
                        <Col md={4} xs={12}>
                            <div className="contact-item">
                                <div className="icon-item text-center">
                                    <Image src="https://i.imgur.com/7Zl2sbw.png" className="img-fluid" />
                                </div>
                                <div className="body-item text-center">
                                    <h5>Email Address</h5>
                                    <a href="mailto:admin@gmail.com">admin@gmail.com</a>
                                </div>
                            </div>
                        </Col>
                        <Col md={4} xs={12}>
                            <div className="contact-item">
                                <div className="icon-item text-center">
                                    <Image src="https://i.imgur.com/7Zl2sbw.png" className="img-fluid" />
                                </div>
                                <div className="body-item text-center">
                                    <h5>Phone Number</h5>
                                    <a href="tel:+20123456789">012 3456 789</a>
                                </div>
                            </div>
                        </Col>
                        <Col md={4} xs={12}>
                            <div className="contact-item">
                                <div className="icon-item text-center">
                                    <Image src="https://i.imgur.com/7Zl2sbw.png" className="img-fluid" />
                                </div>
                                <div className="body-item text-center">
                                    <h5>Our Location</h5>
                                    <a href>Online</a>
                                </div>
                            </div>
                        </Col>
                    </Row>
                    <Form className="row justify-content-center" noValidate validated={validated} onSubmit={handleSubmit} action="/contact">
                        <Col md={6}>
                            <InputGroup hasValidation>
                                <Form.Control 
                                    id="contactName"
                                    name="contactName"
                                    required
                                    type="text"
                                    placeholder="Full Name"
                                />
                                <Form.Control.Feedback type="invalid">
                                    Please enter a Name.
                                </Form.Control.Feedback>
                            </InputGroup>
                        </Col>
                        <Col md={6}>
                            <InputGroup hasValidation>
                                <Form.Control
                                    id="contactEmail"
                                    name="contactEmail"
                                    required
                                    type="email"
                                    placeholder="E-mail"
                                />
                                <Form.Control.Feedback type="invalid">
                                    Please enter a valid E-mail.
                                </Form.Control.Feedback>
                            </InputGroup>
                        </Col>
                        <Col md={6}>
                            <InputGroup hasValidation>
                                <Form.Control
                                    id="contactPhone"
                                    name="contactPhone"
                                    required
                                    type="number"
                                    placeholder="Phone Number"
                                />
                                <Form.Control.Feedback type="invalid">
                                    Please enter a Phone Number.
                                </Form.Control.Feedback>
                            </InputGroup>
                        </Col>
                        <Col md={6}>
                            <InputGroup hasValidation>
                                <Form.Control 
                                    id="contactSubject"
                                    name="contactSubject"
                                    required
                                    type="text"
                                    placeholder="Subject"
                                />
                                <Form.Control.Feedback type="invalid">
                                    Please enter a Subject.
                                </Form.Control.Feedback>
                            </InputGroup>
                        </Col>
                        <Col md={12}>
                            <InputGroup>
                                <Form.Control
                                    as="textarea"
                                    rows={6}
                                    id="contactMessage"
                                    name="contactMessage"
                                    type="text"
                                    placeholder="Message"
                                    required={false}
                                />
                            </InputGroup>
                        </Col>
                        <Col md={12} className="justify-content-center d-flex">
                            <Button variant="" type="submit">
                                <span>Send</span>
                            </Button>
                        </Col>
                    </Form>
                </Container>
            </section>
        </>
    )
}


export default Contact;