import styled from "styled-components";
import {Container, Row, Col} from 'react-bootstrap'

export default function Footer() {
  const Line = styled.div`
    border-top: 2.5px solid #6debb5;
  `;

  return (
    <>
      <Line />
      <Container className="py-5">
        <Row>
          <Col lg={6} md={6} sm={12} xs={12}>
            <h1 className="font-primary color-primary text-lg-start text-md-start text-center">Keyx</h1>
            <p className="font-secondary color-secondary text-lg-start text-md-start text-center">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. </p>
          </Col>
          <Col lg={3} md={3} sm={6} xs={6} className="font-secondary color-secondary">
            <h4><u>Support</u></h4>
            <p>FAQ</p>
            <p>Shipping & Returns</p>
            <p>Warranty</p>
          </Col>
          <Col lg={3} md={3} sm={6} xs={6} className="font-secondary color-secondary">
            <h4><u>Contact Us</u></h4>
            <p><i class="bi bi-telephone"></i> 088 7857 3783</p>
            <p><i class="bi bi-envelope"></i> hello@keyx.com</p>
            <p><i class="bi bi-facebook"></i> <i class="bi bi-instagram"></i> <i class="bi bi-twitter"></i></p>
          </Col>
        </Row>
      </Container>
    </>
  );
}
