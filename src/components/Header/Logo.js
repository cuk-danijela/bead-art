
import { Container, Row, Col, Image } from "react-bootstrap";
import logo from '../../images/logo.png'
import "./Header.css"


function Logo() {



    return (
        <div className="logo_section">
            <Container>
                <Row>
                    <Col>
                        <div className="logo">
                            <Image src={logo} />
                           </div>
                    </Col>
                </Row>
            </Container>
        </div>

    )


}

export default Logo;


