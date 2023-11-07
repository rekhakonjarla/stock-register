import React from 'react';

const MapComponent = () => {
  const handleMapClick = () => {
    const location = encodeURIComponent('Kakinada');
    const mapUrl = `https://www.google.com/maps?q=${location}&output=embed`;

    window.open(mapUrl, '_blank');
  };

  return (
    <div>
      <button onClick={handleMapClick}>Open Map for Kakinada</button>
    </div>
  );
};

export default MapComponent;
