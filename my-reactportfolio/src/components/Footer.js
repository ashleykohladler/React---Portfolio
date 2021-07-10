
import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

function Footer() {

return(
    <footer className="mt-5">
        <Container fluid={true}>
            <Row className="border-top justify-content-between p-3 ">
                
                <Col className="p-0 d-flex justify-content-end" md={3}>
                    This site was made by Ashley Kohl Adler.
                </Col>
                <Card body><a href="https://github.com/ashleykohladler"> Github</a></Card>
      <Card body><a href="https://www.linkedin.com/in/ashley-kohl-adler-0068727a/"> LinkedIn</a></Card>
      <Card body><a href="https://www.ashleykohladler.com/"> Life Before Code</a></Card>
            </Row>
        </Container>
    </footer>
)


}

export default Footer;