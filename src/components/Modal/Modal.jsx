import React, { Component } from 'react';
const modalRoot = document.querySelector("modal-root")
export class Modal extends Component {
    state = {};
    

  render() {
    return (
      <div className="Overlay">
        <div className="Modal">
          <img src={this.props.thurl} alt={this.props.text} />
        </div>
      </div>
    );
  }
}
