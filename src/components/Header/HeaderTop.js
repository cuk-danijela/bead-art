import { render } from "@testing-library/react";
import { Col, Container, Row } from "react-bootstrap";
// import { Link } from "react-router-dom";
import './Header.css'



function HeaderTop(){



    return(
        <Container>
            <div className="header_section_top">
                <Row>
                    <Col>
                        <div className="custom_menu">
                            <ul>
                                <li>Best Sellers</li>
                                <li>Gift Ideas</li>
                                <li>New Releases</li>
                                <li>Today's Deals</li>
                                <li>Customer Service</li>
                            </ul>
                        </div>
                    </Col>
                </Row>
            </div>
        </Container>

    )


}

export default HeaderTop;