import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import CarouselComponent from './components/Carousel/Carousel';
import RSVPForm from './components/RSVP/RSVP';

// double check code to see how to correctly show the carousel first and then take user to the form


function App() {

  const [step, setStep] = useState('carousel');
  const [message, setMessage] = useState('');

  const handleProceed = () => setStep('form')

  const handleSuccess = (successMessage) => {
    setMessage(successMessage);
    setStep('success');
  }

  return (
    <div className="background">
      {step === 'carousel' && <CarouselComponent onProceed={handleProceed} />}
      {step === 'form' && <RSVPForm onProceed={handleSuccess} />}
      {step === 'success' && (
        <div>
          <div className="text-center">
          <div style={{ fontSize: "4rem", color: "green" }}>✔️</div>
          <h2>{message || "Thank you for RSVPing!"}</h2>
        </div>
        </div>
      )}
    </div>
  );
}

export default App;
