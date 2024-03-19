import { useState } from 'react';

const messages = [
  'Learn React ⚛️',
  'Apply for jobs 💼',
  'Invest my new income 🤑',
];

export default function App() {
  return (
    <div>
      <Steps />
    </div>
  );
}
function Steps() {
  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);

  function handlePrevious() {
    if (1 < step) setStep((value) => value - 1);
  }

  function handleNext() {
    if (step < messages.length) setStep((value) => value + 1);
  }

  return (
    <div>
      <button className='close' onClick={() => setIsOpen((value) => !value)}>
        &times;
      </button>

      {isOpen && (
        <div className='steps'>
          <div className='numbers'>
            <div className={step >= 1 ? 'active' : ''}>1</div>
            <div className={step >= 2 ? 'active' : ''}>2</div>
            <div className={step >= 3 ? 'active' : ''}>3</div>
          </div>

          <StepMessage step={step}>
            {messages[step - 1]}

            <div className='buttons'>
              <Button
                bgColor='#e7e7e7'
                textColor='#333'
                onClick={() => alert('Hey you')}
              >
                Say hi
              </Button>
            </div>
          </StepMessage>

          <div className='buttons'>
            <Button textColor='#fff' bgColor='#7950f2' onClick={handlePrevious}>
              <span>◀️</span> Previous
            </Button>
            <Button textColor='#fff' bgColor='#7950f2' onClick={handleNext}>
              Next <span>▶️</span>
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}

function StepMessage({ step, children }) {
  return (
    <div className='message'>
      <h3>Step {step}</h3>
      {children}
    </div>
  );
}

function Button({ textColor, bgColor, onClick, children }) {
  return (
    <button
      style={{ color: textColor, backgroundColor: bgColor }}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
