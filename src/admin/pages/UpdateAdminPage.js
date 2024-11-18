import { Button, Col, Form, InputGroup, Row } from "react-bootstrap";
import { useState } from "react";

function UpdateAdminPage() {
  document.title = "Update Admin Info";
  const [validated, setValidated] = useState(false);

  const handleSubmit = (e) => {
    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      e.preventDefault();
      e.stopPropagation();
    }
    setValidated(true);
  };

  return (
    <>
      <div className="head-section">
        <h2>Update Info</h2>
      </div>
      <Row className="justify-content-center">
        <Col md={4}>
          <Form
            className="row"
            noValidate
            validated={validated}
            onSubmit={handleSubmit}
          >
            <Col md={12}>
              <InputGroup hasValidation>
                <Form.Control
                  id="loginAdminEmail"
                  name="loginAdminEmail"
                  required
                  type="email"
                  placeholder="E-mail"
                />
                <Form.Control.Feedback type="invalid" className="text-start">
                  Please enter a valid E-mail.
                </Form.Control.Feedback>
              </InputGroup>
            </Col>
            <Col md={12}>
              <InputGroup hasValidation>
                <Form.Control
                  id="loginAdminPassword"
                  name="loginAdminPassword"
                  required
                  type="password"
                  placeholder="Password"
                />
                <Form.Control.Feedback type="invalid" className="text-start">
                  Please enter a valid Password.
                </Form.Control.Feedback>
              </InputGroup>
            </Col>
            <Col md={12} className="justify-content-center d-flex">
              <Button variant="" type="submit">
                <span>save</span>
              </Button>
            </Col>
          </Form>
        </Col>
      </Row>
    </>
  );
}

export default UpdateAdminPage;
