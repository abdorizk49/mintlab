import { Button, Col, Form, InputGroup } from "react-bootstrap";
import { useState } from "react";


function ServiceUpdate(){
    document.title = "Service Update 1"
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
            <div className="head-section">
                <h2>Update service</h2>
            </div>
                <Form className="row justify-content-center" noValidate validated={validated} onSubmit={handleSubmit}>
                    <Col md={6}>
                        <InputGroup hasValidation>
                            <Form.Control
                                id="serviceTitleUpdate"
                                name="serviceTitleUpdate"
                                required
                                type="text"
                                placeholder="Service Title"
                                value="service"
                            />
                            <Form.Control.Feedback type="invalid" className="text-start">
                                Please enter a valid Title.
                            </Form.Control.Feedback>
                        </InputGroup>
                    </Col>
                    <Col md={6}>
                        <InputGroup hasValidation>
                            <Form.Control
                                id="serviceImageUpdate"
                                name="serviceImageUpdate"
                                required
                                type="url"
                                placeholder="Service Image URL"
                                value="http://www.themezaa.com/html/pofo/images/logo-white.png"
                            />
                            <small>The best size is 300*300</small>
                            <Form.Control.Feedback type="invalid" className="text-start">
                                Please enter a valid URL.
                            </Form.Control.Feedback>
                        </InputGroup>
                    </Col>
                    <Col md={12}>
                        <InputGroup>
                            <Form.Control
                                as="textarea" 
                                rows={10}
                                id="serviceDescriptionUpdate"
                                name="serviceDescriptionUpdate"
                                type="url"
                                placeholder="Service Description"
                                maxLength={50}
                                value="description"
                            />
                            <small className="text-muted">Maximum 50 characters</small>
                            <Form.Control.Feedback type="invalid" className="text-start">
                                Please enter a valid Description.
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

export default ServiceUpdate;