import { Button, Col, Form, InputGroup } from "react-bootstrap";
import { useState } from "react";

function AddPortfolio(){
    document.title = "Add Portfolio"
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

    const categories = [
        { id: 1, title: "graphic"},
        { id: 2, title: "app"},
        { id: 3, title: "social"},
        { id: 4, title: "web"},
    ];
    return(
        <>
            <div className="head-section">
                <h2>Add portfolio</h2>
            </div>
            <Form className="row justify-content-center" noValidate validated={validated} onSubmit={handleSubmit}>
                <Col md={4}>
                    <InputGroup hasValidation>
                        <Form.Control
                            id="portfolioTitleAdd"
                            name="portfolioTitleAdd"
                            required
                            type="text"
                            placeholder="Project Title"
                        />
                        <Form.Control.Feedback type="invalid" className="text-start">
                            Please enter a valid Title.
                        </Form.Control.Feedback>
                    </InputGroup>
                </Col>
                <Col md={4}>
                    <InputGroup hasValidation>
                        <Form.Select 
                            id="portfolioCategoryAdd"
                            name="portfolioCategoryAdd"
                            required
                        >
                        {categories.map((item) => (
                            <option value={item.title} key={item.id}>
                                {item.title}
                            </option>
                        ))}
                        </Form.Select>
                        <Form.Control.Feedback type="invalid" className="text-start">
                            Please enter a valid Title.
                        </Form.Control.Feedback>
                    </InputGroup>
                </Col>
                <Col md={4}>
                    <InputGroup hasValidation>
                        <Form.Control
                            id="portfolioDateAdd"
                            name="portfolioDateAdd"
                            required
                            type="month"
                            placeholder="Project Date"
                        />
                        <Form.Control.Feedback type="invalid" className="text-start">
                            Please enter a valid Date.
                        </Form.Control.Feedback>
                    </InputGroup>
                </Col>
                <Col md={4}>
                    <InputGroup hasValidation>
                        <Form.Control 
                            id="portfolioClientAdd"
                            name="portfolioClientAdd"
                            required
                            type="text"
                            placeholder="Project Client"
                        />
                        <Form.Control.Feedback type="invalid" className="text-start">
                            Please enter a valid Client.
                        </Form.Control.Feedback>
                    </InputGroup>
                </Col>
                <Col md={4}>
                    <InputGroup hasValidation>
                        <Form.Control
                            id="portfolioUrlAdd"
                            name="portfolioUrlAdd"
                            required
                            type="url"
                            placeholder="Project URL"
                        />
                        <Form.Control.Feedback type="invalid" className="text-start">
                            Please enter a valid URL.
                        </Form.Control.Feedback>
                    </InputGroup>
                </Col>
                <Col md={4}>
                    <InputGroup hasValidation>
                        <Form.Control
                            id="portfolioImageAdd"
                            name="portfolioImageAdd"
                            required
                            type="url"
                            placeholder="Project Image URL"
                        />
                        <small>The best size is 600*750</small>
                        <Form.Control.Feedback type="invalid" className="text-start">
                            Please enter a valid URL.
                        </Form.Control.Feedback>
                    </InputGroup>
                </Col>
                <Col md={12}>
                    <InputGroup hasValidation>
                        <Form.Control 
                            as="textarea"
                            id="portfolioDescriptionAdd"
                            name="portfolioDescriptionAdd"
                            rows={10}
                            placeholder="Project Description"
                            required
                        />
                        <Form.Control.Feedback type="invalid" className="text-start">
                            Please enter a valid Description.
                        </Form.Control.Feedback>
                    </InputGroup>
                </Col>
                <Col md={12} className="justify-content-center d-flex">
                    <Button variant="" type="submit">
                        <span>add</span>
                    </Button>
                </Col>
            </Form>
        </>
    )

}


export default AddPortfolio;