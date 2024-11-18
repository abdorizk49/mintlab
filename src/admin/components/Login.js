import { Button, Col, Container, Form, Image, InputGroup, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";


function Login(){
    const navigate = useNavigate();


    const handleSubmit = (e)=>{
        e.preventDefault();
        navigate("dashboard")
    }
    return(
        <>
            <section className="login">
                <Container>
                    <Row className="justify-content-center text-center">
                        <Col xl={4} md={4} xs={12}>
                            <div className="login-content">
                                <div className="logoImg">
                                    <Image src="https://www.themezaa.com/html/pofo/images/logo.png" className="img-fluid" />
                                    <Image src="https://www.themezaa.com/html/pofo/images/logo.png" className="img-fluid" />
                                </div>
                                <Form className="row" onSubmit={handleSubmit}>
                                    <Col md={12}>
                                        <InputGroup hasValidation>
                                            <Form.Control
                                                id="loginAdminEmail"
                                                name="email"
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
                                                name="password"
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
                                            <span>login</span>
                                        </Button>
                                    </Col>
                                </Form>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default Login;