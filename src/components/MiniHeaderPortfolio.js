import { Breadcrumb, Container } from "react-bootstrap";


function MiniHeaderPortfolio(){

  return (
    <>
    <div className="miniheader" style={{backgroundImage: `url(https://www.themezaa.com/html/pofo/images/homepage-9-slider-img-1.jpg)`}}>
        <div className="overlay-miniheader">
            <Container>
                <div className="head-breadcrumb">
                    <h1>Portfolio</h1>
                </div>
                <Breadcrumb>
                    <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
                    <Breadcrumb.Item href="/portfolio">Portfolio</Breadcrumb.Item>
                    <Breadcrumb.Item active>Portfolio Page</Breadcrumb.Item>
                </Breadcrumb>
            </Container>
        </div>
    </div>
    </>
  );
};

export default MiniHeaderPortfolio;