import React from "react";
import "./Modal.css";

export default class Modal extends React.Component {
  state = {
    isOpen: false,
  };

  render() {
    return (
      <React.Fragment>
        <button onClick={() => this.setState({isOpen: true})}>Открой меня</button>

        {this.state.isOpen && (
          <div className="modal">
            <div className="modal-body">
              <h1>Modal title</h1>
              <p>Some modal text</p>
              <button onClick={() => this.setState({isOpen: false})}>Закрой меня</button>
            </div>
          </div>
        )}
      </React.Fragment>
    );
  }
}
