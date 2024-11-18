import { Button, Col, Form, InputGroup } from "react-bootstrap";
import { useState } from "react";


function HeadContactUpdate(){
    document.title = "Update  Head Contact"
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
                    <Col md={4}>
                        <InputGroup hasValidation>
                            <Form.Control
                                id="headContactTitle"
                                name="headContactTitle"
                                required
                                type="text"
                                placeholder="Head Contact Title"
                                value="Contact Us"
                            />
                            <Form.Control.Feedback type="invalid" className="text-start">
                                Please enter a valid Head Contact Title.
                            </Form.Control.Feedback>
                        </InputGroup>
                    </Col>
                    <Col md={4}>
                        <InputGroup hasValidation>
                            <Form.Control
                                id="headContactEmail"
                                name="headContactEmail"
                                required
                                type="text"
                                placeholder="Head Contact E-mail"
                                value="admin@gmail.com"
                            />
                            <Form.Control.Feedback type="invalid" className="text-start">
                                Please enter a valid Head Contact E-mail.
                            </Form.Control.Feedback>
                        </InputGroup>
                    </Col>
                    <Col md={4}>
                        <InputGroup hasValidation>
                            <Form.Control
                                id="headContactPhone"
                                name="headContactPhone"
                                required
                                type="text"
                                placeholder="Head Contact Phone"
                                value="012 3456 789"
                            />
                            <Form.Control.Feedback type="invalid" className="text-start">
                                Please enter a valid Head Contact Phone.
                            </Form.Control.Feedback>
                        </InputGroup>
                    </Col>
                    <Col md={6}>
                        <InputGroup hasValidation>
                            <Form.Control
                                id="headContactPhoneLink"
                                name="headContactPhoneLink"
                                required
                                type="url"
                                placeholder="Head Contact Phone Link"
                                value="+20123456789"
                            />
                            <Form.Control.Feedback type="invalid" className="text-start">
                                Please enter a valid Head Contact Phone Link.
                            </Form.Control.Feedback>
                        </InputGroup>
                    </Col>
                    <Col md={6}>
                        <InputGroup hasValidation>
                            <Form.Control
                                id="headContactLocation"
                                name="headContactLocation"
                                required
                                type="text"
                                placeholder="Head Contact Location"
                                value="Online0"
                            />
                            <Form.Control.Feedback type="invalid" className="text-start">
                                Please enter a valid Head Contact Location.
                            </Form.Control.Feedback>
                        </InputGroup>
                    </Col>
                    <Col md={4}>
                        <InputGroup hasValidation>
                            <Form.Control
                                id="headContactEmailImg"
                                name="headContactEmailImg"
                                required
                                type="url"
                                placeholder="Head Contact E-mail Image"
                                value="https://i.imgur.com/7Zl2sbw.png"
                            />
                            <small>The best size is 75*75</small>
                            <Form.Control.Feedback type="invalid" className="text-start">
                                Please enter a valid Head Contact E-mail Image.
                            </Form.Control.Feedback>
                        </InputGroup>
                    </Col>
                    <Col md={4}>
                        <InputGroup hasValidation>
                            <Form.Control
                                id="headContactPhoneImg"
                                name="headContactPhoneImg"
                                required
                                type="url"
                                placeholder="Head Contact Phone Image"
                                value="https://i.imgur.com/7Zl2sbw.png"
                            />
                            <small>The best size is 75*75</small>
                            <Form.Control.Feedback type="invalid" className="text-start">
                                Please enter a valid Head Contact Phone Image.
                            </Form.Control.Feedback>
                        </InputGroup>
                    </Col>
                    <Col md={4}>
                        <InputGroup hasValidation>
                            <Form.Control
                                id="headContactLocationImg"
                                name="headContactLocationImg"
                                required
                                type="url"
                                placeholder="Head Contact Location Image"
                                value="https://i.imgur.com/7Zl2sbw.png"
                            />
                            <small>The best size is 75*75</small>
                            <Form.Control.Feedback type="invalid" className="text-start">
                                Please enter a valid Head Contact Location Image.
                            </Form.Control.Feedback>
                        </InputGroup>
                    </Col>
                    <Col md={12}>
                        <InputGroup hasValidation>
                            <Form.Control 
                                as="textarea"
                                rows={10}
                                id="headContactDescription"
                                name="headContactDescription"
                                required
                                placeholder="Head Contact Description"
                                value="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration. Contact Us for more information.0000"
                            />
                            <Form.Control.Feedback type="invalid" className="text-start">
                                Please enter a valid Head Contact Description.
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

export default HeadContactUpdate;