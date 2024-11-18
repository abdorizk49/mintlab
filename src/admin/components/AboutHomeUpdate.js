import { Button, Col, Form, InputGroup } from "react-bootstrap";
import { useState } from "react";


function AboutHomeUpdate(){
    document.title = "About Home Update"
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
                <h2>Update About Home</h2>
            </div>
            <Form className="row justify-content-center" noValidate validated={validated} onSubmit={handleSubmit}>
                    <Col md={6}>
                        <InputGroup hasValidation>
                            <Form.Control
                                id="aboutHomeTitleUpdate"
                                name="aboutHomeTitleUpdate"
                                required
                                type="text"
                                placeholder="About Home Title"
                                value="about us"
                            />
                            <Form.Control.Feedback type="invalid" className="text-start">
                                Please enter a valid Title.
                            </Form.Control.Feedback>
                        </InputGroup>
                    </Col>
                    <Col md={6}>
                        <InputGroup hasValidation>
                            <Form.Control
                                id="aboutHomeImageUpdate"
                                name="aboutHomeImageUpdate"
                                required
                                type="url"
                                placeholder="About Home Image URL"
                                value="https://i.imgur.com/R9oeNkK.jpg"
                            />
                            <small>The best size is 750*750</small>
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
                                id="aboutHomeDescriptionUpdate"
                                name="aboutHomeDescriptionUpdate"
                                type="url"
                                placeholder="About Home Description"
                                value="Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. They live in Bookmarksgrove right at the coast of the Semantics, a large language ocean."
                            />
                            <Form.Control.Feedback type="invalid" className="text-start">
                                Please enter a valid Description.
                            </Form.Control.Feedback>
                        </InputGroup>
                    </Col>
                    <Col md={12}>
                        <InputGroup>
                            <Form.Control
                                as="textarea" 
                                rows={10}
                                id="aboutHomeDescription2Update"
                                name="aboutHomeDescription2Update"
                                type="url"
                                placeholder="About Home Description2"
                                value="A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences"
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

export default AboutHomeUpdate;