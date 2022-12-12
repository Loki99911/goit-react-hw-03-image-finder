import React, { Component } from 'react';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Button } from './Button/Button';
import { apiGet } from 'Service/api';
// import { render } from '@testing-library/react';

export class App extends Component {
  state = {
    name: '',
    imgArr: [],
    page: 1,
    totalImg: 0,
  };

  componentDidUpdate(prevProps, prevState) {
    const newName = this.state.name;
    const currentPage = this.state.page;
console.log(this.state);
    if (prevState.name !== newName || prevState.page !== currentPage) {
      apiGet(newName, currentPage).then(data => {
        // console.log(data);
        this.setState(prevState => ({
          imgArr: [...prevState.imgArr, ...data.hits],
          totalImg: data.total,
        }));
      });
    }
  }

  handleSubmit = name => {
    this.setState({ name, imgArr: [], page: 1 });
  };

  changePage = () => {
    this.setState({ page: this.state.page + 1 });
  };

  render() {
    return (
      <div
      // style={{
      // // height: '100vh',
      // display: 'flex',
      // justifyContent: 'center',
      // alignItems: 'center',
      // fontSize: 40,
      // color: '#010101',
      // }}
      >
        <Searchbar onSubmitForm={this.handleSubmit} />
        <ImageGallery imgArr={this.state.imgArr} />
        {this.state.imgArr.length < this.state.totalImg && <Button page={this.changePage} />}
      </div>
    );
  }
}
