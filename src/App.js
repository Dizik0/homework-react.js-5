import "./App.css";
import { Component } from "react";
import { v4 as uuidv4 } from "uuid";
import AddContact from "./Components/AddContact";
import Filter from "./Components/Filter";
import ContactList from "./Components/ContactList";
import style from "./App.module.scss";
import axios from "axios";

class App extends Component {
  state = {
    // contacts: [],
    // name: "",
    // number: "",
    filter: "",
  };

  // componentDidUpdate() {
  //   localStorage.setItem("key-1", JSON.stringify(this.state.contacts));
  // }

  // componentDidMount() {
  //   if (JSON.parse(localStorage.getItem("key-1"))) {
  //     this.setState({ contacts: JSON.parse(localStorage.getItem("key-1")) });
  //   }
  // }

  // stateTransfer = ({ name, number }) => {
  //   const contact = {
  //     name,
  //     number,
  //     id: uuidv4(),
  //   };

  //   this.setState((prevState) => ({
  //     contacts: [contact, ...prevState.contacts],
  //   }));
  // };

  // filterContact = (e) => {
  //   this.setState({ filter: e.currentTarget.value });
  // };
  // deleteTodo = (todoId) => {
  //   this.setState((prevState) => ({
  //     contacts: prevState.contacts.filter((contact) => contact.id !== todoId),
  //   }));
  // };

  render() {
    return (
      <div className={style.box}>
        <h1 className={style.title}>Phonebook</h1>
        <AddContact
          uuidv4={uuidv4}
          // stateTransfer={this.stateTransfer}
          // contacts={contacts}
        />
        <h2 className={style.title}>Contacts</h2>

        <Filter
          uuidv4={uuidv4}
          // filterContact={this.filterContact}
          // filter={filter}
        />
        <ContactList
          // filterTodos={filterTodos}
          uuidv4={uuidv4}
          // deleteTodo={this.deleteTodo}
        />
      </div>
    );
  }
}

export default App;
