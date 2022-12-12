import React, { Component } from 'react';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Button } from './Button/Button';
import { Loader } from './Loader/Loader';
import { Modal } from './Modal/Modal';
import { apiGet } from 'Service/api';

export class App extends Component {
  state = {
    name: '',
    imgArr: [],
    page: 1,
    totalImg: 0,
    loaderOn: false,
    showModal: false,
  };

  componentDidUpdate(prevProps, prevState) {
    const newName = this.state.name;
    const currentPage = this.state.page;
    if (prevState.name !== newName || prevState.page !== currentPage) {
      this.setState({ loaderOn: true });
      apiGet(newName, currentPage)
        .then(data => {
          if (data.hits.length === 0) {
            this.setState({ loaderOn: false });
            alert(`Sorry((( Nothing found for your request ${newName} `);
        }
          this.setState(prevState => ({
            imgArr: [...prevState.imgArr, ...data.hits],
            totalImg: data.total,
            loaderOn: false,
            largeImg: '',
            text: '',
          }));
        })
        .catch(error => alert(`${error.massage}`));
    }
  }

  handleSubmit = name => {
    this.setState({ name, imgArr: [], page: 1 });
  };

  changePage = () => {
    this.setState({ page: this.state.page + 1 });
  };

  toggleModal = (largeImg, text) => {
    this.setState({
      showModal: !this.state.showModal,
      largeImg,
      text,
    });
  };

  render() {
    return (
      <div
        style={{
          // height: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          width: '100%',
          fontSize: 40,
          color: '#010101',
        }}
      >
        <Searchbar onSubmitForm={this.handleSubmit} />
        <ImageGallery
          imgArr={this.state.imgArr}
          funcToggle={this.toggleModal}
        />
        {this.state.loaderOn && <Loader />}
        {this.state.imgArr.length < this.state.totalImg && (
          <Button page={this.changePage} />
        )}
        {this.state.showModal && (
          <Modal
            url={this.state.largeImg}
            text={this.state.text}
            funcCloseClick={this.toggleModal}
          />
        )}
      </div>
    );
  }
}
