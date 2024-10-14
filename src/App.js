import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import CarouselComponent from "./components/Carousel/Carousel";

// double check code to see how to correctly show the carousel first and then take user to the form

function App() {
  const handleRSVPSuccess = (message) => {
    console.log(message);
  };

  return (
    <div className="background">
      <div className="content">
        <CarouselComponent onSubmitSuccess={handleRSVPSuccess} />
      </div>
    </div>
  );
}

export default App;
