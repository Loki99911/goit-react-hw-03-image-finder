import React from 'react'; //, { Component }
import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';

export const ImageGallery = ({ imgArr }) => {
  return (
    <ul className="ImageGallery">
      {imgArr.map(img => {
        return (
          <ImageGalleryItem
            key={img.id}
            url={img.webformatURL}
            text={img.tags}
          />
        );
      })}
    </ul>
  );
};
// }
