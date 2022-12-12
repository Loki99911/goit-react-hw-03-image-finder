import React, { Component } from 'react';

export class Modal extends Component {
    state = {};
    
    
  render() {
    return (
      <div className="Overlay">
        <div className="Modal">
          <img src={url} alt={text} />
        </div>
      </div>
    );
  }
}
