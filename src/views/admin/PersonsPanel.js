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
    this.toggleShowRegisterForm = this.toggleShowRegisterForm.bind(this);
    this.toggleShowEditForm = this.toggleShowEditForm.bind(this);
    this.state = {
      persons: [{ name: "Javier Chavez", email: "jchavezs@unprg.edu.pe" }],
      showRegister: false,
      showEdit: false,
      editPerson: { name: "", email: "" },
    };
  }
  render() {
    const formRegister = this.state.showRegister ? (
      <Dialog closeDialog={this.toggleShowRegisterForm}>
        <div className="content__form">
          <RegisterForm
            title="Registrar una persona"
            sendData={this.registerPerson}
          />
        </div>
      </Dialog>
    ) : null;
    const formEdit = this.state.showEdit ? (
      <Dialog closeDialog={this.toggleShowEditForm}>
        <div className="content__form">
          <RegisterForm
            data={this.state.editPerson}
            title="Editar una persona"
            sendData={this.editPerson}
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
              actionEdit={this.toggleShowEditForm}
            />
          </div>
          {formRegister}
          {formEdit}
        </div>
      </div>
    );
  }
  editPerson(person) {
    const persons = this.state.persons;
    persons[this.state.editPerson.id] = person;
    console.log(persons);
    this.setState(function () {
      return { persons: persons };
    });
    this.toggleShowEditForm();
  }
  registerPerson(person) {
    this.setState(function (state) {
      return {
        persons: state.persons.concat(person),
      };
    });
    this.toggleShowRegisterForm();
  }
  deletePerson(id) {
    const persons = this.state.persons.filter((person, index) => index !== id);
    this.setState({ persons: persons });
  }
  toggleShowRegisterForm() {
    this.setState((state) => ({
      showRegister: !state.showRegister,
    }));
  }
  toggleShowEditForm(id) {
    this.setState((state) => ({
      editPerson:
        id !== undefined ? { ...state.persons[id], id: id } : state.editPerson,
      showEdit: !state.showEdit,
    }));
  }
}

export default PersonsPanel;
