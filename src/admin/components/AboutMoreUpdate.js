import { Button, Col, Form, InputGroup } from "react-bootstrap";
import { useState } from "react";


function AboutMoreUpdate(){
    document.title = "About More Update"
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
                <h2>Update About More</h2>
            </div>
                <Form className="row justify-content-center" noValidate validated={validated} onSubmit={handleSubmit}>
                    <Col md={6}>
                        <InputGroup hasValidation>
                            <Form.Control
                                id="moreTitleUpdate"
                                name="moreTitleUpdate"
                                required
                                type="text"
                                placeholder="About More Title"
                                value="our vision"
                            />
                            <Form.Control.Feedback type="invalid" className="text-start">
                                Please enter a valid Title.
                            </Form.Control.Feedback>
                        </InputGroup>
                    </Col>
                    <Col md={6}>
                        <InputGroup hasValidation>
                            <Form.Control
                                id="moreImageUpdate"
                                name="moreImageUpdate"
                                required
                                type="url"
                                placeholder="About More Image URL"
                                value="https://i.imgur.com/co6QOeO.jpg"
                            />
                            <small>The best size is 100*100</small>
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
                                id="moreDescriptionUpdate"
                                name="moreDescriptionUpdate"
                                type="url"
                                placeholder="About More Description"
                                value="Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. They live in Bookmarksgrove right at the coast of the Semantics, a large language ocean0"
                            />
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

export default AboutMoreUpdate;