import React from 'react';

export const ImageGalleryItem = ({ url, text, largeImg, funcToggle }) => {
  return (
    <li className="ImageGalleryItem" onClick={funcToggle}>
      <img src={url} alt={text} className="ImageGalleryItem-image" />
    </li>
  );
};
