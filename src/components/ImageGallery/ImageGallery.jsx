import React, { Component } from 'react';
import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import {apiGet} from 'Service/api';
export class ImageGallery extends Component {
  state = {
    imgArr: [],
    page: 1,
  };
  // export const ImageGallery = () => {
  componentDidUpdate(prevProps, prevState) { 
    const newName = this.props.name;
    const currentPage = this.state.page;
    if (prevProps !== newName) {
      const newImgs = apiGet(newName, currentPage);
      this.setState(prevState => ({imgArr: [...prevState.imgArr, ...newImgs]}))
    }
  }

  render() {
    return (
      <ul className="gallery">
        <ImageGalleryItem />
      </ul>
    );
  }
};


