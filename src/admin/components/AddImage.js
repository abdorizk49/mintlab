import { Button, Col, Form, InputGroup } from "react-bootstrap";
import { useState } from "react";

function AddImage(){
    document.title = "Add Portfolio Image"
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
                <h2>Add Image</h2>
            </div>
            <Form className="row justify-content-center" noValidate validated={validated} onSubmit={handleSubmit}>
                <Col md={12}>
                    <InputGroup>
                        <Form.Control
                            id="linkImageAdd"
                            name="linkImageAdd"
                            type="url"
                            placeholder="Link Image"
                        />
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


export default AddImage;