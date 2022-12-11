import React, { Component } from 'react';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
// import { render } from '@testing-library/react';

export class App extends Component {
  state = {
    name: '',
    error: null,
    status: 'idle',
  };

  handleSubmit = name => {
    this.setState({ name });
  };

  render() {
    return (
      <div
        // className={App}
        // style={{
        // // height: '100vh',
        // display: 'flex',
        // justifyContent: 'center',
        // alignItems: 'center',
        // fontSize: 40,
        // color: '#010101',
        // }}
      >
        <Searchbar onSubmit={this.handleSubmit} />
        <ImageGallery name={this.state.name} />
      </div>
    );
  }
}
