import React from 'react';

export const ImageGalleryItem = ({url, text, largeImg}) => {
  return (
    <li className="ImageGalleryItem" onClick={largeImg => {}}>
      <img src={url} alt={text} className="ImageGalleryItem-image" />
    </li>
  );
};
