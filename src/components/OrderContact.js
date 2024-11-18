import { useState } from "react";
import { Button, Col, Container, Form, InputGroup, Row } from "react-bootstrap";



function OrderContact(){
    const [validated, setValidated] = useState(false);

    const handleSubmit = (e) => {
        const form = e.currentTarget;
        if (form.checkValidity() === false) {
          e.preventDefault();
          e.stopPropagation();
        }
        else{
          setValidated(true);
        }
    };


    return(
        <>
            <section className="ordercontact bg-gray">
                <Container>
                    <Row className="justify-content-center">
                        <Col md={12}>
                            <div className="head-section text-center">
                                <h1>Contact Request</h1>
                                <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration.</p>
                            </div>
                        </Col>
                        <Col md={6}>
                            <Form className="row" noValidate validated={validated} onSubmit={handleSubmit}>
                                <Col md={12}>
                                    <InputGroup>
                                        <Form.Control 
                                            id="orderContactName"
                                            name="orderContactName"
                                            type="text"
                                            placeholder="Full Name"
                                        />
                                        <Form.Control.Feedback type="invalid">
                                            Please enter a valid Name.
                                        </Form.Control.Feedback>
                                    </InputGroup>
                                </Col>
                                <Col md={12}>
                                    <InputGroup>
                                        <Form.Control
                                            id="orderContactPhone"
                                            name="orderContactPhone"
                                            type="number"
                                            placeholder="Phone Number"
                                        />
                                        <Form.Control.Feedback type="invalid">
                                            Please enter a valid Phone Number.
                                        </Form.Control.Feedback>
                                    </InputGroup>
                                </Col>
                                <Col md={12}>
                                    <InputGroup>
                                        <Form.Control
                                            id="orderContactEmail"
                                            name="orderContactEmail"
                                            type="email"
                                            placeholder="E-mail"
                                        />
                                        <Form.Control.Feedback type="invalid">
                                            Please enter a valid E-mail.
                                        </Form.Control.Feedback>
                                    </InputGroup>
                                </Col>
                                <Col md={12} className="justify-content-center d-flex">
                                    <Button variant="" type="submit">
                                        <span>Send</span>
                                    </Button>
                                </Col>
                            </Form>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}


export default OrderContact;