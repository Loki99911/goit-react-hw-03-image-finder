import React from 'react';

export const ImageGalleryItem = ({url, text}) => {
  return (
    <li className="gallery-item">
      <img src={url} alt={text} />
    </li>
  );
};
