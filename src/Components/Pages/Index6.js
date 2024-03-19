import React from 'react'
import '../../assets/css/index.css'
import { Col, Container, Row } from 'react-bootstrap';
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import { TypeAnimation } from "react-type-animation";
function Index6() {
  return (
    <div>
         {/* START HOME */}
        <section className="home-bg section home-half" id="home">
            <Container >
                <Row className=" justify-content-center">
                    <Col >
                        <div className="text-white text-center">
                        <h1 className="bus_home_title mx-auto">
                  <span className="text-typed">
                    <TypeAnimation
                      sequence={[
                        "We Are Creative Landing Page Template",
                        1000,
                        "Professional Landing Page Template",
                        1000,
                        "We Are Creative And Modern Design",
                        1000,
                      ]}
                      speed={50}
                      repeat={Infinity}
                     
                    />
                  </span>
                </h1>   
                            <p className="bus_home_subtitle pt-4 text-white-50 mx-auto">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout look like readable English.</p>
                            <div className="bus_home_btn">
                            <Link to="/#" className="">
                    {" "}
                    <Button
                      variant="primary"
                      className="py-2 px-4 fs-6 rounded-5 mt-4 me-3"
                    >
                      Learn More
                    </Button>
                  </Link>
                  <span className="me-3">OR</span>

                  <Link to="https://vimeo.com/109054393" className="">
                    {" "}
                    <Button
                      variant="outline-light"
                      className="py-2 px-4 fs-6 rounded-5 mt-4 me-3"
                    >
                      Watch Video
                    </Button>
                  </Link>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>        
        </section>
        {/* END HOME */}
    </div>
  )
}

export default Index6