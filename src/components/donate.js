import React from 'react';

function Donate() {
  return (
    <div>
      <h2>Donate</h2>
      <p>Please donate to help spread our message.</p>
      <a
        href="https://paypal.com/paypalme/TheHandBook1"
        target="_blank"
        rel="noopener noreferrer"
        className="donate-button"
      >
        Donate via PayPal
      </a>
    </div>
  );
}

export default Donate;
