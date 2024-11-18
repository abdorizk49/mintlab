import { Button, Col, Form, InputGroup } from "react-bootstrap";
import { useState } from "react";


function PortfolioUpdate(){
    document.title = "Portfolio Update 1"
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
                <h2>Update portfolio</h2>
            </div>
            <Form className="row justify-content-center" noValidate validated={validated} onSubmit={handleSubmit}>
                <Col md={4}>
                    <InputGroup hasValidation>
                        <Form.Control
                            id="portfolioTitleUpdate"
                            name="portfolioTitleUpdate"
                            required
                            type="text"
                            placeholder="Project Title"
                            value="graphic"
                        />
                        <Form.Control.Feedback type="invalid" className="text-start">
                            Please enter a valid Title.
                        </Form.Control.Feedback>
                    </InputGroup>
                </Col>
                <Col md={4}>
                    <InputGroup hasValidation>
                        <Form.Select 
                            id="portfolioCategoryUpdate"
                            name="portfolioCategoryUpdate"
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
                            id="portfolioDateUpdate"
                            name="portfolioDateUpdate"
                            required
                            type="month"
                            placeholder="Project Date"
                            value="10-2022"
                        />
                        <Form.Control.Feedback type="invalid" className="text-start">
                            Please enter a valid Date.
                        </Form.Control.Feedback>
                    </InputGroup>
                </Col>
                <Col md={4}>
                    <InputGroup hasValidation>
                        <Form.Control 
                            id="portfolioClientUpdate"
                            name="portfolioClientUpdate"
                            required
                            type="text"
                            placeholder="Project Client"
                            value="Company1"
                        />
                        <Form.Control.Feedback type="invalid" className="text-start">
                            Please enter a valid Client.
                        </Form.Control.Feedback>
                    </InputGroup>
                </Col>
                <Col md={4}>
                    <InputGroup hasValidation>
                        <Form.Control
                            id="portfolioUrlUpdate"
                            name="portfolioUrlUpdate"
                            required
                            type="url"
                            placeholder="Project URL"
                            value="http://www.themezaa.com/html/pofo/images/logo-white.png"
                        />
                        <Form.Control.Feedback type="invalid" className="text-start">
                            Please enter a valid URL.
                        </Form.Control.Feedback>
                    </InputGroup>
                </Col>
                <Col md={4}>
                    <InputGroup hasValidation>
                        <Form.Control
                            id="portfolioImageUpdate"
                            name="portfolioImageUpdate"
                            required
                            type="url"
                            placeholder="Project Image URL"
                            value="http://www.themezaa.com/html/pofo/images/logo-white.png"
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
                            id="portfolioDescriptionUpdate"
                            name="portfolioDescriptionUpdate"
                            rows={10}
                            placeholder="Project Description"
                            required
                            value="description"
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

export default PortfolioUpdate;