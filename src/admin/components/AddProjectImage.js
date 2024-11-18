import { useNavigate } from "react-router-dom";
import { Button, Col, Form, InputGroup } from "react-bootstrap";
import { useState } from "react";
import axios from "axios";

function AddProjectImage(){
    document.title = "Add Slider"
    const [validated, setValidated] = useState(false);
    const [title, setTitle] = useState("");
    const [link, setLink] = useState("");
    const [icon, setIcon] = useState("");
    const linksUrl = "http://localhost:9001/links"
    let navigate = useNavigate();
    const [isFormSubmitted, setIsFormSubmitted] = useState(false);

    const handleSubmit = (e) => {
        const form = e.currentTarget;
        if (form.checkValidity() === false) {
          e.preventDefault();
          e.stopPropagation();
        }
        else{
          setValidated(true);
          setIsFormSubmitted(true);
          axios({
            method: "POST",
            url: linksUrl,
            data: {
              title,
              link,
              icon,
            },
          }).then((data) => {
            console.log(data);
            navigate("/admin/links");
          });
        }
    };

    return(
        <>
            <div className="head-section">
                <h2>Add Link</h2>
            </div>
            {isFormSubmitted  ? '' : <Form className="row justify-content-center" noValidate validated={validated} onSubmit={handleSubmit}>
                <Col md={6}>
                    <InputGroup hasValidation>
                        <Form.Control
                            id="linkTitleAdd"
                            name="linkTitleAdd"
                            required
                            type="text"
                            placeholder="Title Link"
                            onChange={(e) => setTitle(e.target.value)}
                        />
                        <Form.Control.Feedback type="invalid" className="text-start">
                            Please enter a valid Title.
                        </Form.Control.Feedback>
                    </InputGroup>
                </Col>
                <Col md={6}>
                    <InputGroup hasValidation>
                        <Form.Control
                            id="linkLinkAdd"
                            name="linkLinkAdd"
                            required
                            type="url"
                            placeholder="Link Social"
                            onChange={(e) => setLink(e.target.value)}
                        />
                        <Form.Control.Feedback type="invalid" className="text-start">
                            Please enter a valid URL.
                        </Form.Control.Feedback>
                    </InputGroup>
                </Col>
                <Col md={12}>
                    <InputGroup>
                        <Form.Control
                            id="linkIconAdd"
                            name="linkIconAdd"
                            type="text"
                            placeholder="Link Icon"
                            onChange={(e) => setIcon(e.target.value)}
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
            </Form>}
            {isFormSubmitted && <div className="success-message">Form submitted successfully!</div>}
        </>
    )

}


export default AddProjectImage;