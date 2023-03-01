import React, { useState } from 'react';
import './Jewellery.css'
import Carousel from 'react-bootstrap/Carousel'
import { Container, Row, Col } from 'react-bootstrap';

import imgBraceletsOne from '../../images/bracelets/kaput.jpg'
import imgBraceletsTwo from '../../images/bracelets/beads.jpg'
import imgBraceletsThree from '../../images/bracelets/narukvica.jpg'

import imgEarringsOne from '../../images/earrings/mix.jpg'
import imgEarringsTwo from '../../images/earrings/mindjuse1.jpg'
import imgEarringsThree from '../../images/earrings/mix.jpg'

import imgNecklacesOne from '../../images/necklaces/dzemper.jpg'
import imgNecklacesTwo from '../../images/necklaces/more.jpg'
import imgNecklacesThree from '../../images/necklaces/sisarka.jpg'



export default function Jewellery(){

        const [index, setIndex] = useState(0);
        const handleSelect = (selectedIndex, e) => {
            setIndex(selectedIndex);
        };

    return(
        <Container>
            <Row>
                <Col>
                    <div className="jewellery_section layout_padding">
                        <Carousel activeIndex={index} onSelect={handleSelect} className="jewellery_carousel">
                            <Carousel.Item interval={1000}>
                                <img
                                    className="d-block w-100 jewellery_img"
                                    src={imgBraceletsOne}
                                    alt="First slide"
                                />
                                <Carousel.Caption>
                                    
                                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item interval={500}>
                                <img
                                    className="d-block w-100 jewellery_img"
                                    src={imgBraceletsTwo}
                                    alt="Second slide"
                                />
                                <Carousel.Caption>
                                    
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100 jewellery_img"
                                    src={imgBraceletsThree}
                                    alt="Third slide"
                                />
                                <Carousel.Caption>
                                    
                                    <p>
                                        Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                                    </p>
                                </Carousel.Caption>
                            </Carousel.Item>
                        </Carousel>
                    </div>
                </Col>

                <Col>
                    <div className="jewellery_section layout_padding">
                        <Carousel activeIndex={index} onSelect={handleSelect} className="jewellery_carousel">
                            <Carousel.Item interval={1000}>
                                <img
                                    className="d-block w-100 jewellery_img"
                                    src={imgEarringsOne}
                                    alt="First slide"
                                />
                                <Carousel.Caption>
                                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item interval={500}>
                                <img
                                    className="d-block w-100 jewellery_img"
                                    src={imgEarringsTwo}
                                    alt="Second slide"
                                />
                                <Carousel.Caption>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100 jewellery_img"
                                    src={imgEarringsThree}
                                    alt="Third slide"
                                />
                                <Carousel.Caption>
                                    <p>
                                        Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                                    </p>
                                </Carousel.Caption>
                            </Carousel.Item>
                        </Carousel>
                    </div>
                </Col>

                <Col>
                    <div className="jewellery_section layout_padding">
                        <Carousel activeIndex={index} onSelect={handleSelect} className="jewellery_carousel">
                            <Carousel.Item interval={1000}>
                                <img
                                    className="d-block w-100 jewellery_img"
                                    src={imgNecklacesOne}
                                    alt="First slide"
                                />
                                <Carousel.Caption>
                                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item interval={500}>
                                <img
                                    className="d-block w-100 jewellery_img"
                                    src={imgNecklacesTwo}
                                    alt="Second slide"
                                />
                                <Carousel.Caption>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100 jewellery_img"
                                    src={imgNecklacesThree}
                                    alt="Third slide"
                                />
                                <Carousel.Caption>
                                    <p>
                                        Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                                    </p>
                                </Carousel.Caption>
                            </Carousel.Item>
                        </Carousel>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}