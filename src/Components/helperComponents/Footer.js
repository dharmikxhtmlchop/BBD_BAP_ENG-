import React from 'react'
import '../../App.css'
import { Container, Row,Col } from 'react-bootstrap'
import { MobileFriendly } from '@mui/icons-material'
import { Email } from '@mui/icons-material'
import { LocationOn } from '@mui/icons-material'
function Footer() {

    // Footer Get Yers
    const currentYear = new Date().getFullYear();
   
  return (
    <>
    {/* START FOOTER */}
      <footer className="bg-dark section pb-0">
            <Container >
                <Row >
                    <Col lg={4}>
                        <div className="text-center text-white">
                            <div className='contact-icon'>
                                <i>
                                <MobileFriendly fontSize='large'/>
                                </i>
                                
                            </div>
                            <div className="contact-detail mt-3">
                                <p className="mb-0">Call Us On</p>
                                <a className="text-secondary" href="tel:+985 123 7856">+985 123 7856</a>
                            </div>
                        </div>
                    </Col>
                    <Col lg={4}>
                        <div className="text-center text-white">
                            <div className='contact-icon'>
                               <i>

                                  <Email fontSize='large'/>
                               </i>
                                
                            </div>
                            <div className="contact-detail mt-3">
                                <p className="mb-0">Email Us At</p>
                                <a className="text-secondary" href="javacript:void(0)">Website.Busion@gmail.com</a>
                            </div>
                        </div>
                    </Col>
                    <Col lg={4} >
                        <div className="text-center text-white">
                            <div className='contact-icon'>
                                <i >
                                  <LocationOn fontSize='large'/>
                                </i>
                            </div>
                            <div className="contact-detail mt-3">
                                <p className="mb-0">Visit Office</p>
                                <address className="text-secondary mb-0">202, Grasselli Street , Conway.</address>
                            </div>
                        </div>
                    </Col>
                </Row>
                <div className="lan_footer_alt_border mt-5"></div>
                <Row >
                    <Col >
                        <div className="text-center pt-4 pb-4">
                            <p className="mb-0 text-white">
                            {currentYear}
                                 &copy; Busion. Design by <a className="text-white" href="https://themeforest.net/user/srbthemes" target="_blank">SRBThemes.</a>    
                            </p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </footer>
        {/* END FOOTER */}
    </>
  )
}

export default Footer