import React from "react";
import PersonRow from "./PersonRow";
import "./PersonList.css";
class PersonList extends React.Component {
  render() {
    return (
      <ul className="list">
        {this.props.persons.map((person, index) => (
          <PersonRow
            key={index}
            id={index}
            name={person.name}
            email={person.email}
            actionDelete={this.props.actionDelete}
            actionEdit={this.props.actionEdit}
          />
        ))}
      </ul>
    );
  }
}

export default PersonList;
