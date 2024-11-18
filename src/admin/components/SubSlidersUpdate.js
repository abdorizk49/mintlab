import { Button, Col, Form, InputGroup } from "react-bootstrap";
import { useState } from "react";


function SubSlidersUpdate(){
    document.title = "Sub Slider Update 1"
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
                <h2>Update Sub Slider</h2>
            </div>
            <Form className="row justify-content-center" noValidate validated={validated} onSubmit={handleSubmit}>
                <Col md={6}>
                    <InputGroup hasValidation>
                        <Form.Control
                            id="sliderImageUpdate"
                            name="sliderImageUpdate"
                            required
                            type="url"
                            placeholder="Slider Image URL"
                            value="https://www.themezaa.com/html/pofo/images/homepage-9-slider-img-1.jpg"
                        />
                        <small>The best size is 1920*800</small>
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

export default SubSlidersUpdate;