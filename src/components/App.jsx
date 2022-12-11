import React, { Component } from 'react';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Button } from './Button/Button';

// import { render } from '@testing-library/react';

export class App extends Component {
  state = {
    name: '',
    imgArr: [],
    page: 1,
    // error: null,
    // status: 'idle',
  };

  handleSubmit = name => {
    // const { name, imgArr, page } = stateObj;
    console.log(this.state.imgArr);
    this.setState({ name, imgArr: [], page: 1 });
    console.log(this.state.imgArr);
  };

  changePage = () => {
    this.setState({ page: this.state.page + 1 });
  };

  // arrUpdate = () => {
  //   this.setState({ imgArr: this.props.imgArr });
  // };

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
        <ImageGallery
          name={this.state.name}
          // arr={this.state.imgArr}
          page={this.state.page}
        />
        {this.state.imgArr.length > 0 && <Button page={this.changePage} />}
      </div>
    );
  }
}
