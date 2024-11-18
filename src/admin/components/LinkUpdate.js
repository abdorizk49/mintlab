import { Button, Col, Form, InputGroup } from "react-bootstrap";
import { useState } from "react";


function LinkUpdate(){
    document.title = "Link Update"
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
                <h2>Update Link</h2>
            </div>
            <Form className="row justify-content-center" noValidate validated={validated} onSubmit={handleSubmit}>
                <Col md={6}>
                    <InputGroup hasValidation>
                        <Form.Control
                            id="linkTitleUpdate"
                            name="linkTitleUpdate"
                            required
                            type="text"
                            placeholder="Title Link"
                            value="facebook"
                        />
                        <Form.Control.Feedback type="invalid" className="text-start">
                            Please enter a valid Title.
                        </Form.Control.Feedback>
                    </InputGroup>
                </Col>
                <Col md={6}>
                    <InputGroup hasValidation>
                        <Form.Control
                            id="linkLinkUpdate"
                            name="linkLinkUpdate"
                            required
                            type="url"
                            placeholder="Link Social"
                            value="https://www.facebook.com/abdulrahmanrizk24"
                        />
                        <Form.Control.Feedback type="invalid" className="text-start">
                            Please enter a valid URL.
                        </Form.Control.Feedback>
                    </InputGroup>
                </Col>
                <Col md={12}>
                    <InputGroup>
                        <Form.Control
                            id="linkIconUpdate"
                            name="linkIconUpdate"
                            type="text"
                            placeholder="Link Icon"
                            value="<i class='fa-brands fa-facebook-f'></i>"
                        />
                        <Form.Control.Feedback type="invalid" className="text-start">
                            Please enter a valid Icon.
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

export default LinkUpdate;