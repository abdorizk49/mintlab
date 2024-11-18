import { Carousel, Image } from "react-bootstrap";


function Slider(){

    return(
        <>
            <Carousel fade>
                <Carousel.Item>
                    <Image src="https://www.themezaa.com/html/pofo/images/homepage-9-slider-img-1.jpg" className="img-fluid" />
                    <Carousel.Caption>
                        <h3>slider 01</h3>
                        <p>Slider 01 Description</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <Image src="https://i.imgur.com/mi3qdr7.jpg" className="img-fluid" />
                    <Carousel.Caption>
                        <h3>slider 02</h3>
                        <p>Slider 02 Description</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <Image src="https://i.imgur.com/wLpthlc.jpg" className="img-fluid" />
                    <Carousel.Caption>
                        <h3>slider 03</h3>
                        <p>Slider 03 Description</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </>
    )
}


export default Slider;