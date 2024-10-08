import { Carousel, Button } from "react-bootstrap";
import img1 from "./assets/B&m-617.jpg"

function CarouselComponent({ onProceed }) {
  return (
    <div>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={img1}
            alt="First slide"
          />
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://via.placeholder.com/800x400"
            alt="Second slide"
          />
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://via.placeholder.com/800x400"
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>
      <Button variant="primary" className="mt-4" onClick={onProceed}>
        Next
      </Button>
    </div>
  );
}

export default CarouselComponent;
