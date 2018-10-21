import React, { Component } from 'react';
import './ErrorPopup.css';

class ErrorPopup extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="ErrorPopup">
        <div className="popup-inner">
          <h1>You have no favorites selected!</h1>
          <button
            onClick={this.props.closeError}
          >
X
          </button>
        </div>
      </div>
    );
  }
}

export default ErrorPopup;
