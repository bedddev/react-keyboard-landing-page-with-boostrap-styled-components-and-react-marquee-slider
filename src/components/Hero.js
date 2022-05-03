import { Container, Row, Col, Image } from "react-bootstrap";
import Button from "./Button";
import img from "../assets/img/image-1.jpg";

export default function Hero() {
  return (
    
      <Container className="py-5">
        <Row>
          <Col lg={6} md={6} sm={12} className="d-flex align-items-center">
            <div className="text-lg-start text-md-start text-center">
              <h1 className="font-primary color-primary">
                Feel in every touch
              </h1>
              <p className="font-secondary color-secondary py-3">
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.{" "}
              </p>
              <Button text="Test Sound" icon="bi bi-arrow-right" />
            </div>
          </Col>
          <Col lg={6} md={6} className="d-none d-lg-block">
            <Image src={img} fluid />
          </Col>
        </Row>
      </Container>
  );
}
