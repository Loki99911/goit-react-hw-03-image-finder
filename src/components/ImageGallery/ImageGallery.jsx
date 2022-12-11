import React, { Component } from 'react';
import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import { apiGet } from 'Service/api';
export class ImageGallery extends Component {
  state = {
    imgArr: [],
    page: 1,
  };
  // export const ImageGallery = () => {
  componentDidUpdate(prevProps, prevState) {
    const newName = this.props.name;
    const currentPage = this.state.page;

    if (prevProps.name !== newName || prevState.page !== currentPage) {
      apiGet(newName, currentPage).then(data =>
        this.setState(prevState => ({
          imgArr: [...prevState.imgArr, ...data.hits],
        }))
      );
      // const newImgs = apiGet(newName, currentPage)
      //   .then(response => {
      //   console.log(response);
      // });
      // console.log(newImgs);
      // this.setState(prevState => ({imgArr: [...prevState.imgArr, ...newImgs]}))
    }
  }

  render() {
    return (
      <ul className="gallery">
        {this.state.imgArr.map(img => {console.log(img); return <ImageGalleryItem
            key={img.id}
            url={img.webformatURL}
            text={img.tags}
          />;
        })}
      </ul>
    );
  }
}
