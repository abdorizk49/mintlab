import { Container, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import "@fortawesome/fontawesome-free/css/all.min.css"
import { faInstagram, faLinkedinIn, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


function Footer(){

    return(
        <>
            <footer>
                <Container>
                <div className="content-footer text-center">
                    <div className="img-footer">
                        <Image src="http://www.themezaa.com/html/pofo/images/logo-white.png" />
                        <Image src="http://www.themezaa.com/html/pofo/images/logo-white.png" />
                    </div>
                    <ul className="list-unstyled d-flex justify-content-center list-links">
                        <li>
                            <Link to="/"><span>Home</span></Link>
                        </li>
                        <li>
                            <Link to="/about"><span>about us</span></Link>
                        </li>
                        <li>
                            <Link to="/services"><span>our services</span></Link>
                        </li>
                        <li>
                            <Link to="/portfolio"><span>our portfolio</span></Link>
                        </li>
                        <li>
                            <Link to="/contact"><span>contact us</span></Link>
                        </li>
                    </ul>
                    <ul className="list-unstyled d-flex justify-content-center list-social">
                        <li><a href="https://twitter.com/abdulrahman_rizk17" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faTwitter} /></a></li>
                        <li><a href="https://www.linkedin.com/in/abdorizk/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faLinkedinIn} /></a></li>
                        <li><a href="https://www.instagram.com/abdulrahman_rizk17/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faInstagram} /></a></li>
                    </ul>
                    <p>
                        <strong>INNOVA</strong> © 2024. All Right Reserved
                    </p>
                </div>
                </Container>
            </footer>
        </>
    )
}


export default Footer;