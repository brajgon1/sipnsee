import { Carousel, Button } from "react-bootstrap";
import "./Carousel.css"

// need to figure out how to get photos to appear in the carousel
// add photos to the file for the carousel

function CarouselComponent({ onProceed }) {
  return (
    <div className="carousel-container">
      <Carousel className="carousel">
        <Carousel.Item>
          <img src="https://via.placeholder.com/800x400" alt="First slide" />
        </Carousel.Item>

        <Carousel.Item>
          <img src="https://via.placeholder.com/800x400" alt="Second slide" />
        </Carousel.Item>

        <Carousel.Item>
          <img src="https://via.placeholder.com/800x400" alt="Third slide" />
        </Carousel.Item>
      </Carousel>
      <Button variant="primary" className="carousel-button" onClick={onProceed}>
        Next
      </Button>
    </div>
  );
}

export default CarouselComponent;
