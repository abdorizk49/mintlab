import { Button, Col, Form, InputGroup } from "react-bootstrap";
import { useState } from "react";

function AddAboutMore(){
    document.title = "Add About More"
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
                <h2>Add About More</h2>
            </div>
                <Form className="row justify-content-center" noValidate validated={validated} onSubmit={handleSubmit}>
                <Col md={6}>
                    <InputGroup hasValidation>
                        <Form.Control
                            id="moreTitleAdd"
                            name="moreTitleAdd"
                            required
                            type="text"
                            placeholder="About More Title"
                        />
                        <Form.Control.Feedback type="invalid" className="text-start">
                            Please enter a valid Title.
                        </Form.Control.Feedback>
                    </InputGroup>
                </Col>
                <Col md={6}>
                    <InputGroup hasValidation>
                        <Form.Control
                            id="moreImageAdd"
                            name="moreImageAdd"
                            required
                            type="url"
                            placeholder="About More Image URL"
                        />
                        <small>The best size is 100*100</small>
                        <Form.Control.Feedback type="invalid" className="text-start">
                            Please enter a valid URL.
                        </Form.Control.Feedback>
                    </InputGroup>
                </Col>
                <Col md={12}>
                    <InputGroup>
                        <Form.Control as="textarea" rows={10}
                            id="moreDescriptionAdd"
                            name="moreDescriptionAdd"
                            type="url"
                            placeholder="About More Description"
                            maxLength={200}
                        />
                        <small className="text-muted">Maximum 200 characters</small>
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


export default AddAboutMore;