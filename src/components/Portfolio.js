import { useState } from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

function Portfolio() {
  const [activeCategory, setActiveCategory] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");

  const portfolio = [
    { id: 1, title: "Graphic Design", category: "graphic", image: "https://i.imgur.com/BMQz4wW.png" },
    { id: 2, title: "App Development", category: "app", image: "https://i.imgur.com/BMQz4wW.png" },
    { id: 3, title: "Social Media Design", category: "social", image: "https://i.imgur.com/BMQz4wW.png" },
    { id: 4, title: "Web Development", category: "web", image: "https://i.imgur.com/BMQz4wW.png" },
  ];

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    setActiveCategory(category);
  };

  // Filter portfolio items
  const filteredPortfolio = selectedCategory
    ? portfolio.filter((item) => item.category === selectedCategory)
    : portfolio;

  return (
    <>
      <section className="portfolio">
        <Container>
          <Row className="justify-content-center">
            <Col md={12} xs={12}>
              <div className="head-section text-center">
                <span className="flag-section">PORTFOLIO DEFAULT</span>
                <h1>You Can Customize Everything!</h1>
              </div>
              <div className="filters">
                <button
                  className={`btn ${activeCategory === "" ? "active" : ""}`}
                  onClick={() => handleCategoryChange("")}
                >
                  Show All
                </button>
                <button
                  className={`btn ${activeCategory === "app" ? "active" : ""}`}
                  onClick={() => handleCategoryChange("app")}
                >
                  App
                </button>
                <button
                  className={`btn ${activeCategory === "social" ? "active" : ""}`}
                  onClick={() => handleCategoryChange("social")}
                >
                  Social
                </button>
                <button
                  className={`btn ${activeCategory === "web" ? "active" : ""}`}
                  onClick={() => handleCategoryChange("web")}
                >
                  Web
                </button>
                <button
                  className={`btn ${activeCategory === "graphic" ? "active" : ""}`}
                  onClick={() => handleCategoryChange("graphic")}
                >
                  Graphic
                </button>
              </div>
            </Col>
            {filteredPortfolio.map((item) => (
              <Col md={4} xs={12} key={item.id}>
                <div className="portfolio-item">
                  <Link to="/portfolio/portfolioItem">
                    <div className="head-item">
                      <Image src={item.image} className="img-fluid w-100" />
                    </div>
                  </Link>
                  <div className="body-item">
                    <Link to="/portfolio/portfolioItem">
                      <h4>{item.title}</h4>
                    </Link>
                    <p>{item.category}</p>
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </>
  );
}

export default Portfolio;
