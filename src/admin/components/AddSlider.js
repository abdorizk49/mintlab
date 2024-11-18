import { Button, Col, Form, InputGroup } from "react-bootstrap";
import { useState } from "react";

function AddSlider(){
    document.title = "Add Slider"
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
                <h2>Add Slider</h2>
            </div>
            <Form className="row justify-content-center" noValidate validated={validated} onSubmit={handleSubmit}>
                <Col md={6}>
                    <InputGroup hasValidation>
                        <Form.Control
                            id="sliderTitleAdd"
                            name="sliderTitleAdd"
                            required
                            type="text"
                            placeholder="Slider Title"
                        />
                        <Form.Control.Feedback type="invalid" className="text-start">
                            Please enter a valid Title.
                        </Form.Control.Feedback>
                    </InputGroup>
                </Col>
                <Col md={6}>
                    <InputGroup hasValidation>
                        <Form.Control
                            id="sliderImageAdd"
                            name="sliderImageAdd"
                            required
                            type="url"
                            placeholder="Slider Image URL"
                        />
                        <small>The best size is 1920*1200</small>
                        <Form.Control.Feedback type="invalid" className="text-start">
                            Please enter a valid URL.
                        </Form.Control.Feedback>
                    </InputGroup>
                </Col>
                <Col md={12}>
                    <InputGroup>
                        <Form.Control as="textarea" rows={10}
                            id="sliderDescriptionAdd"
                            name="sliderDescriptionAdd"
                            type="url"
                            placeholder="Slider Description"
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


export default AddSlider;