import { Container, Row } from "react-bootstrap";
import Collectionitem from "./Collectionitem";
import Img1 from "../assets/img/img-item-1.jpg";
import Img2 from "../assets/img/img-item-2.jpg";
import Img3 from "../assets/img/img-item-3.jpg";
import Img4 from "../assets/img/img-item-4.jpg";
import Img5 from "../assets/img/img-item-5.jpg";
import Img6 from "../assets/img/img-item-6.jpg";
import Img7 from "../assets/img/img-item-7.jpg";
import Img8 from "../assets/img/img-item-8.jpg";

export default function Collections() {
  return (
    <Container className="py-5">
      <h3 className="font-secondary color-primary fs-40">
        <u>Collections</u> <i class="bi bi-arrow-right"></i>
      </h3>
      <Row>
        <Collectionitem img={Img1} text="Tipe I" />
        <Collectionitem img={Img2} text="Tipe II" />
        <Collectionitem img={Img3} text="Tipe III" />
        <Collectionitem img={Img4} text="Tipe IV" />
        <Collectionitem img={Img5} text="Tipe V" />
        <Collectionitem img={Img6} text="Tipe VI" />
        <Collectionitem img={Img7} text="Tipe VII" />
        <Collectionitem img={Img8} text="Tipe VIII" />
      </Row>
    </Container>
  );
}
