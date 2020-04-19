import React from "react";

class PersonRow extends React.Component {
  constructor(props) {
    super(props);
    this.actionDelete = this.actionDelete.bind(this);
    this.actionEdit = this.actionEdit.bind(this);
  }
  render() {
    return (
      <li className="list__item">
        <span>{this.props.name}</span>
        <span>{this.props.email}</span>
        <span
          role="img"
          aria-label="delete"
          className="item__action"
          onClick={this.actionDelete}
        >
          ❌
        </span>
        <span
          role="img"
          aria-label="edit"
          className="item__action"
          onClick={this.actionEdit}
        >
          📝
        </span>
      </li>
    );
  }
  actionDelete() {
    this.props.actionDelete(this.props.id);
  }
  actionEdit() {
    this.props.actionEdit(this.props.id);
  }
}

export default PersonRow;
