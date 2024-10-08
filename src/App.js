import React, { useState } from 'react';
import './App.css';
import CarouselComponent from './components/Carousel/Carousel';
import RSVPForm from './components/RSVP/RSVP';

function App() {

  const [step, setStep] = useState('carousel');
  const [message, setMessage] = useState('');

  const handleProceed = () => setStep('form')

  const handleSuccess = (successMessage) => {
    setMessage(successMessage);
    setStep('success');
  }

  return (
    <div className="App">
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
