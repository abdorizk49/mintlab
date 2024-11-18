import { Button, Col, Form, InputGroup } from "react-bootstrap";
import { useState } from "react";


function HeadContactRequestUpdate(){
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
                    <Col md={12}>
                        <InputGroup hasValidation>
                            <Form.Control
                                id="headContactRequestTitle"
                                name="headContactRequestTitle"
                                required
                                type="text"
                                placeholder="Head Contact Request Title"
                                value="Contact Request"
                            />
                            <Form.Control.Feedback type="invalid" className="text-start">
                                Please enter a valid Head Contact Request Title.
                            </Form.Control.Feedback>
                        </InputGroup>
                    </Col>
                    <Col md={12}>
                        <InputGroup hasValidation>
                            <Form.Control 
                                as="textarea"
                                rows={10}
                                id="headContactRequestDescription"
                                name="headContactRequestDescription"
                                required
                                placeholder="Head Contact Request Description"
                                value="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration."
                            />
                            <Form.Control.Feedback type="invalid" className="text-start">
                                Please enter a valid Head Contact Request Description.
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

export default HeadContactRequestUpdate;