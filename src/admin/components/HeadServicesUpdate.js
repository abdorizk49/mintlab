import { Button, Col, Form, InputGroup } from "react-bootstrap";
import { useState } from "react";


function HeadServicesUpdate(){
    document.title = "Update  Head Services"
    const [validated, setValidated] = useState(false);

    const handleSubmit = (e) => {
        const form = e.currentTarget;
        if (form.checkValidity() === false) {
          e.preventDefault();
          e.stopPropagation();
        }
        setValidated(true);
    };



    return(
        <>
                <Form className="row justify-content-center" noValidate validated={validated} onSubmit={handleSubmit}>
                    <Col md={6}>
                        <InputGroup hasValidation>
                            <Form.Control
                                id="headservicesTitle"
                                name="headservicesTitle"
                                required
                                type="text"
                                placeholder="Head Services Title"
                                value="Services Provide For You."
                            />
                            <Form.Control.Feedback type="invalid" className="text-start">
                                Please enter a valid Head Services Title.
                            </Form.Control.Feedback>
                        </InputGroup>
                    </Col>
                    <Col md={6}>
                        <InputGroup hasValidation>
                            <Form.Control
                                id="headservicesSpan"
                                name="headservicesSpan"
                                required
                                type="text"
                                placeholder="Head Services Span"
                                value="WHAT WE CAN DO FOR YOU"
                            />
                            <Form.Control.Feedback type="invalid" className="text-start">
                                Please enter a valid URL.
                            </Form.Control.Feedback>
                        </InputGroup>
                    </Col>
                    <Col md={12}>
                        <InputGroup hasValidation>
                            <Form.Control 
                                as="textarea"
                                rows={10}
                                id="headservicesDescription"
                                name="headservicesDescription"
                                required
                                placeholder="Head Services Description"
                                value="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration."
                            />
                            <Form.Control.Feedback type="invalid" className="text-start">
                                Please enter a valid Head Services Description.
                            </Form.Control.Feedback>
                        </InputGroup>
                    </Col>
                    <Col md={12} className="justify-content-center d-flex">
                        <Button variant="" type="submit">
                            <span>save</span>
                        </Button>
                    </Col>
                </Form>
        </>
    )
}

export default HeadServicesUpdate;