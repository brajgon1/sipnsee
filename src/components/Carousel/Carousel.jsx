import { Carousel, Button } from "react-bootstrap";
import "./Carousel.css"
import Header from "../Header/Header";
import image1 from '../../photos/IMG_5166.jpeg';
import image2 from '../../photos/IMG_5199.jpeg';
import image3 from '../../photos/IMG_5225.jpeg';

// need to figure out how to get photos to appear in the carousel
// add photos to the file for the carousel

function CarouselComponent({ onProceed }) {
  return (
    <div className="carousel-container">
      <Header/>
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
      <Button variant="primary" className="carousel-button" onClick={onProceed}>
        Next
      </Button>
    </div>
  );
}

export default CarouselComponent;
