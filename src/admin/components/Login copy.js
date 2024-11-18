import { useEffect, useState } from "react";
import { Button, Col, Container, Form, Image, InputGroup, Row } from "react-bootstrap";


function Login(){

    const [validated, setValidated] = useState(false);
    const [logo, setLogo] = useState();
    const logoUrl = "http://localhost:9001/logo";




    const handleSubmit = (event) => {
      const form = event.currentTarget;
      if (form.checkValidity() === false) {
        event.preventDefault();
        event.stopPropagation();
      }
    //   event.preventDefault();
      setValidated(true);
    };

    const getLogo = () => {
        fetch(logoUrl)
          .then((res) => res.json())
          .then((data) => {
            setLogo(data);
        });
    };
    useEffect(() => {
        getLogo();
    }, []);
    const logoImg = logo?.map((logo) => {
        return(
            <Image key={logo.id} src={logo.image} className="img-fluid" />
        )
    })
    return(
        <>
            <section className="login">
                <Container>
                    <Row className="justify-content-center text-center">
                        <Col xl={4} md={4} xs={12}>
                            <div className="login-content">
                                <div className="logoImg">
                                    {logoImg}
                                </div>
                                <Form className="row" noValidate validated={validated} onSubmit={handleSubmit} action="/admin/dashboard">
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