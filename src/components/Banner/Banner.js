import './Banner.css'
import { Button, Card, Container, Row, Col } from 'react-bootstrap';
import imgSlideOne from '../../images/bracelets/narukvica.jpg'

function Banner() {

    return (
        <div className="banner_section layout_padding">
            <Container>
                <Row>
                    <Col><Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={imgSlideOne} />
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card></Col>
                    <Col><Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={imgSlideOne} />
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card></Col>
                    <Col><Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={imgSlideOne} />
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card></Col>
                    <Col><Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={imgSlideOne} />
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card></Col>
                </Row>
            </Container>

        </div>
    );

}

export default Banner;
