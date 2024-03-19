import React from 'react'
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import '../../App.css'
import '../../assets/css/ytplayer.css'
import ReactPlayer from 'react-player'
import { Col, Container, Row } from 'react-bootstrap';

function Index11() {
    
  return (
    <div>
        {/* START HOME */}
        <section className="home-bg section h-100vh bg-dark" id="home">
            <ReactPlayer width={1000} height={1000} className="test" url='https://youtu.be/AYmZaEVOIIs' loop={true} controls={false} muted={true} playing={true}/>
            <div className="bg-overlay"></div>
            <Container className='position-relative'>
                <Row className=" justify-content-center">
                    <Col >
                        <div className="text-white text-center">
                            <h1 className="bus_home_title mx-auto">We Are Creative Landing Page Template</h1>    
                            <p className="bus_home_subtitle pt-4 mx-auto">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout look like readable English.</p>
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

export default Index11