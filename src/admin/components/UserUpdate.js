import { Button, Col, Form, InputGroup } from "react-bootstrap";
import { useState } from "react";


function UserUpdate(){
    document.title = "User Update 1"
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
                <h2>Update Link</h2>
            </div>
            <Form className="row justify-content-center" noValidate validated={validated} onSubmit={handleSubmit}>
                <Col md={6}>
                    <InputGroup hasValidation>
                        <Form.Control
                            id="userEmailUpdate"
                            name="userEmailUpdate"
                            required
                            type="email"
                            placeholder="User Email"
                            value="admin@gmail.com"
                        />
                        <Form.Control.Feedback type="invalid" className="text-start">
                            Please enter a valid Email.
                        </Form.Control.Feedback>
                    </InputGroup>
                </Col>
                <Col md={6}>
                    <InputGroup hasValidation>
                        <Form.Control
                            id="userUsernameUpdate"
                            name="userUsernameUpdate"
                            required
                            type="text"
                            placeholder="User Username"
                            value="username"
                        />
                        <Form.Control.Feedback type="invalid" className="text-start">
                            Please enter a valid Username.
                        </Form.Control.Feedback>
                    </InputGroup>
                </Col>
                <Col md={12}>
                    <InputGroup>
                        <Form.Control
                            id="userPasswordUpdate"
                            name="userPasswordUpdate"
                            type="text"
                            placeholder="User Password"
                            value="0123456798"
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

export default UserUpdate;