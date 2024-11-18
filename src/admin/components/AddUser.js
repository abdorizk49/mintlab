import { Button, Col, Form, InputGroup } from "react-bootstrap";
import { useState } from "react";

function AddUser(){
    document.title = "Add User"
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
                <h2>Add User</h2>
            </div>
            <Form className="row justify-content-center" noValidate validated={validated} onSubmit={handleSubmit}>
                <Col md={6}>
                    <InputGroup hasValidation>
                        <Form.Control
                            id="userEmailAdd"
                            name="email"
                            required
                            type="email"
                            placeholder="User Email"
                        />
                        <Form.Control.Feedback type="invalid" className="text-start">
                            Please enter a valid Email.
                        </Form.Control.Feedback>
                    </InputGroup>
                </Col>
                <Col md={6}>
                    <InputGroup hasValidation>
                        <Form.Control
                            id="userUsernameAdd"
                            name="name"
                            required
                            type="text"
                            placeholder="User Username"
                        />
                        <Form.Control.Feedback type="invalid" className="text-start">
                            Please enter a valid Username.
                        </Form.Control.Feedback>
                    </InputGroup>
                </Col>
                <Col md={12}>
                    <InputGroup>
                        <Form.Control
                            id="userPasswordAdd"
                            name="password"
                            type="password"
                            placeholder="User Password"
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
        </>
    )

}


export default AddUser;