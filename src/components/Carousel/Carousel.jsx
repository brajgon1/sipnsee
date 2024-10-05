import { Carousel } from 'react-bootstrap';

function CarouselComponent() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://via.placeholder.com/800x400"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First Slide</h3>
          <p>This is the first slide description.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://via.placeholder.com/800x400"
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3>Second Slide</h3>
          <p>This is the second slide description.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://via.placeholder.com/800x400"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>Third Slide</h3>
          <p>This is the third slide description.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselComponent;
