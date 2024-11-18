import { useState } from "react";
import { Button, Col, Container, Form, InputGroup, Row } from "react-bootstrap";



function OrderPrice(){
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

    const categories = [
        { id: 1, title: "graphic"},
        { id: 2, title: "app"},
        { id: 3, title: "social"},
        { id: 4, title: "web"},
    ];

    return(
        <>
            <section className="ordercontact bg-gray">
                <Container>
                    <Row className="justify-content-center">
                        <Col md={12}>
                            <div className="head-section text-center">
                                <span className="flag-section">Request a price</span>
                                <h1>Request a price</h1>
                            </div>
                        </Col>
                        <Col md={12}>
                            <Form className="row" noValidate validated={validated} onSubmit={handleSubmit}>
                                <Col md={6}>
                                    <InputGroup hasValidation>
                                        <Form.Control 
                                            id="orderPriceName"
                                            name="orderPriceName"
                                            required
                                            type="text"
                                            placeholder="Full Name"
                                        />
                                        <Form.Control.Feedback type="invalid">
                                            Please enter a valid Name.
                                        </Form.Control.Feedback>
                                    </InputGroup>
                                </Col>
                                <Col md={6}>
                                    <InputGroup hasValidation>
                                        <Form.Control
                                            id="orderPricePhone"
                                            name="orderPricePhone"
                                            required
                                            type="number"
                                            placeholder="Phone Number"
                                        />
                                        <Form.Control.Feedback type="invalid">
                                            Please enter a valid Phone Number.
                                        </Form.Control.Feedback>
                                    </InputGroup>
                                </Col>
                                <Col md={6}>
                                    <InputGroup hasValidation>
                                        <Form.Control
                                            id="orderPriceEmail"
                                            name="orderPriceEmail"
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
                                            id="orderPriceSubject"
                                            name="orderPriceSubject"
                                            required
                                            placeholder="Subject"
                                            aria-describedby="Subject Category"
                                            list="datalistOptions"
                                        />
                                        <datalist id="datalistOptions">
                                        {categories.map((item) => (
                                            <option value={item.title} key={item.id}>
                                                {item.title}
                                            </option>
                                            ))}
                                        </datalist>
                                        <Form.Control.Feedback type="invalid">
                                            Please enter a valid Subject.
                                        </Form.Control.Feedback>
                                    </InputGroup>
                                </Col>
                                <Col md={12}>
                                    <InputGroup hasValidation>
                                        <Form.Control
                                            as="textarea" 
                                            rows={10}
                                            id="orderPriceMessage"
                                            name="orderPriceMessage"
                                            required
                                            placeholder="Message"
                                        />
                                        <Form.Control.Feedback type="invalid">
                                            Please enter a valid Message.
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


export default OrderPrice;