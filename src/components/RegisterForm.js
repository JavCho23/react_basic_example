import React from "react";
import "./Form.css";
import TextInput from "./TextInput";
import Button from "./Button";

class App extends React.Component {
  constructor(props) {
    super(props);
    let state = {
      name: "",
      email: "",
    };
    if (this.props.data) {
      state = {
        name: this.props.data.name,
        email: this.props.data.email,
      };
    }
    this.state = state;
    this.changeNameInputHandler = this.changeNameInputHandler.bind(this);
    this.changeEmailInputHandler = this.changeEmailInputHandler.bind(this);
    this.sendData = this.sendData.bind(this);
  }
  render() {
    return (
      <form onSubmit={this.sendData} className="form">
        <h1>{this.props.title}</h1>
        <TextInput
          value={this.state.name}
          label="Nombre"
          onChange={this.changeNameInputHandler}
        />
        <TextInput
          value={this.state.email}
          label="Correo"
          onChange={this.changeEmailInputHandler}
        />
        <Button class="form__button" label="Guardar" />
      </form>
    );
  }
  sendData(event) {
    this.props.sendData({ name: this.state.name, email: this.state.email });
    this.setState({ name: "", email: "" });
    event.preventDefault();
  }
  changeEmailInputHandler(email) {
    this.setState({
      email: email,
    });
  }
  changeNameInputHandler(name) {
    this.setState({
      name: name,
    });
  }
}

export default App;
