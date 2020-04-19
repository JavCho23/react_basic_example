import React from "react";
import PersonList from "../../components/PersonList";
import RegisterForm from "../../components/RegisterForm";
import "./PersonsPanel.css";
import Dialog from "../../components/Dialog";
import Button from "../../components/Button";
class PersonsPanel extends React.Component {
  constructor(props) {
    super(props);
    this.registerPerson = this.registerPerson.bind(this);
    this.deletePerson = this.deletePerson.bind(this);
    this.editPerson = this.editPerson.bind(this);
    this.toggleShowForm = this.toggleShowForm.bind(this);
    this.state = {
      persons: [{ name: "Javier Chavez", email: "jchavezs@unprg.edu.pe" }],
      showRegister: false,
      editPerson: { name: "", email: "" },
      formAction: this.registerPerson,
    };
  }
  render() {
    const form = this.state.showRegister ? (
      <Dialog closeDialog={this.toggleShowForm}>
        <div className="content__form">
          <RegisterForm
            data={this.state.editPerson}
            title="Registrar una persona"
            sendData={this.registerPerson}
            data={this.state.editPerson}
            action={this.state.formAction}
          />
        </div>
      </Dialog>
    ) : null;
    return (
      <div className="app">
        <h1 className="app__header">Panel de personas</h1>
        <div className="app_content">
          <div className="content__add">
            <Button
              class="form__button"
              label="Agregar una persona"
              action={this.toggleShowRegisterForm}
            />
          </div>
          <div className="content__list">
            <h2>Lista de personas</h2>
            <PersonList
              persons={this.state.persons}
              actionDelete={this.deletePerson}
              actionEdit={this.editPerson}
            />
          </div>
          {form}
        </div>
      </div>
    );
  }
  editPerson(id) {
    this.setState((state) => ({
      editPerson: state.persons[id],
      formAction: this.editPerson,
    }));
    this.toggleShowForm();
  }
  registerPerson(person) {
    this.setState(function (state) {
      return {
        persons: state.persons.concat(person),
      };
    });
  }
  deletePerson(id) {
    const persons = this.state.persons.filter((person, index) => index !== id);
    this.setState({ persons: persons });
  }
  toggleShowForm() {
    this.setState((state) => ({
      showRegister: !state.showRegister,
    }));
  }
}

export default PersonsPanel;
