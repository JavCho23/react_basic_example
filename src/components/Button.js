import React from "react";

class Button extends React.Component {
  constructor(props) {
    super(props);
    this.action = this.action.bind(this);
  }
  render() {
    return (
      <button className={this.props.class} onClick={this.action}>
        {this.props.label}
      </button>
    );
  }
  action() {
    if (this.props.action) {
      this.props.action();
    }
  }
}

export default Button;
