import React, { useState } from 'react';

const CookieBanner = () => {
  const [showBanner, setShowBanner] = useState(true); // State to control banner visibility

  const handleAccept = () => {
    console.log('Accept button clicked');
    localStorage.setItem('cookiesAccepted', true);
    setShowBanner(false); // Hide banner on accept
  };

  const handleReject = () => {
    console.log('Reject button clicked');
    localStorage.setItem('cookiesAccepted', false);
    setShowBanner(false); // Hide banner on reject
  };

  return (
    <div id="cookie-banner" className={showBanner ? '' : 'hide'}>
      <p>Utilizamos cookies para mejorar tu experiencia. <a href="/politica-de-cookies">Más información</a></p>
      <button id="accept-cookies" onClick={handleAccept}>Aceptar</button>
      <button id="reject-cookies" onClick={handleReject}>Rechazar</button>
    </div>
  );
};

export default CookieBanner;
