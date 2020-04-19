import React from "react";
import "./Dialog.css";
class Dialog extends React.Component {
  constructor(props) {
    super(props);
    this.closeDialog = this.closeDialog.bind(this);
  }
  render() {
    return (
      <div id="dialog" className="dialog">
        <div className="dialog__content">
          <span onClick={this.closeDialog} className="dialog__close">&times;</span>
          {this.props.children}
        </div>
      </div>
    );
  }
  closeDialog() {
    this.props.closeDialog();
  }
}

export default Dialog;
