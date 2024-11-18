import { Button, Col, Form, InputGroup } from "react-bootstrap";
import { useState } from "react";


function HeadPortfolioUpdate(){
    document.title = "Update Head Portfolio"
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
                <Col md={12}>
                    <InputGroup hasValidation>
                        <Form.Control
                            id="headPortfolioTitleHome"
                            name="headPortfolioTitleHome"
                            required
                            type="text"
                            placeholder="Head Portfolio Title Home"
                            value="You Can Customize Everything!"
                        />
                        <Form.Control.Feedback type="invalid" className="text-start">
                            Please enter a valid Head Portfolio Title.
                        </Form.Control.Feedback>
                    </InputGroup>
                </Col>
                <Col md={6}>
                    <InputGroup hasValidation>
                        <Form.Control
                            id="headPortfolioTitleInner"
                            name="headPortfolioTitleInner"
                            required
                            placeholder="Head Portfolio Title Inner"
                            value="Related Projects"
                        />
                        <Form.Control.Feedback type="invalid" className="text-start">
                            Please enter a valid Head Portfolio Title Inner.
                        </Form.Control.Feedback>
                    </InputGroup>
                </Col>
                <Col md={6}>
                    <InputGroup hasValidation>
                        <Form.Control
                            id="headPortfolioSpan"
                            name="headPortfolioSpan"
                            required
                            type="text"
                            placeholder="Head Portfolio Span"
                            value="PORTFOLIO DEFAULT"
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

export default HeadPortfolioUpdate;