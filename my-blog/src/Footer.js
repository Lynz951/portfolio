import React from 'react';
// import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import './index.css'

function Footer() {

    return (
    
    <Container>
        <Row>
            <div className="col-sm-12 col-md-6">
                <h6>About</h6>
                <h6 className="text-justify">I am a web development student at Awesome, Inc. in Lexington, Kentucky</h6>
            </div>
        </Row>
        <Row>
            <div className="col-xs-6 col-md-3">
                <h6>Quick Links</h6>
                <ul className="footer-links">
                    <li><a href="../About/about.html/">About Me</a></li>
                    <li><a href="mailto:lynzhaddix951@gmail.com">Email Me</a></li>
                </ul>
            </div>
        </Row>
        <Row>
            <div className="col-md-4 col-sm-6 col-xs-12">
                <ul className="social-icons">
                    <li><a className="facebook" href="https://www.facebook.com/lindsay.w.haddix/"><i className="fa fa-facebook"></i></a></li>
                    <li><a className="linkedin" href="https://www.linkedin.com/in/lindsay-haddix-754294252/"><i className="fa fa-linkedin"></i></a></li>   
                </ul>
            </div>
        </Row>
    
    </Container>
    
     );
}

export default Footer
