import React from 'react';

export const ImageGalleryItem = ({url, text, largeImg}) => {
  return (
    <li className="ImageGalleryItem">
      <img src={url} alt={text} className="ImageGalleryItem-image" />
    </li>
  );
};
