import { Button, Col, Form, InputGroup } from "react-bootstrap";
import { useState } from "react";


function LogoUpdate(){
    document.title = "Update Logo"
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
                            id="logoUpload"
                            name="logoUpload"
                            required
                            type="url"
                            placeholder="Logo URL"
                            value="https://www.themezaa.com/html/pofo/images/logo.png"
                        />
                        <small>The best size is 140*70</small>
                        <Form.Control.Feedback type="invalid" className="text-start">
                            Please enter a valid URL.
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

export default LogoUpdate;