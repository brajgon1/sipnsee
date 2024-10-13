import { Carousel } from "react-bootstrap";
import "./Carousel.css";
import Header from "../Header/Header";
import RSVPForm from "../RSVP/RSVP";
import image1 from "../../photos/IMG_5166.jpeg";
import image2 from "../../photos/IMG_5199.jpeg";
import image3 from "../../photos/IMG_5225.jpeg";

function CarouselComponent({ onSubmitSuccess }) {
  return (
    <div className="carousel-container">
      <Header />
      <Carousel className="carousel">
        <Carousel.Item>
          <img src={image1} alt="First slide" />
        </Carousel.Item>

        <Carousel.Item>
          <img src={image2} alt="Second slide" />
        </Carousel.Item>

        <Carousel.Item>
          <img src={image3} alt="Third slide" />
        </Carousel.Item>
      </Carousel>
      {/* Pass onSubmitSuccess to RSVPForm */}
      <RSVPForm onSubmitSuccess={onSubmitSuccess} />
    </div>
  );
}

export default CarouselComponent;
