import { hasPointerEvents } from '@testing-library/user-event/dist/utils';
import React, { Component } from 'react';
// import PropTypes from 'prop-types';

export class Searchbar extends Component {
  state = {
    name: '',
  };

  formChange = event => {
    const searchName = event.currentTarget.value.toLowerCase();
    this.setState({ name: searchName });
  };

  formSubmit = event => {
    event.preventDefault();
    if (this.state.name.trim()===""){
      return alert("FUUCK!!")
    } this.props.onSubmit(this.state.name);
  };

  render() {
    return (
      <header className="searchbar">
        <form
          className="form"
          onSubmit={this.formSubmit}
        >
          <button type="submit" className="button">
            <span className="button-label">Search</span>
          </button>

          <input
            className="input"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={this.state.name}
            onChange={this.formChange}
          />
        </form>
      </header>
    );
  }
}
