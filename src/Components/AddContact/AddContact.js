import { Component } from "react";
import PropTypes from "prop-types";
import style from "./AddContact.module.scss";

import { connect } from "react-redux";
import * as actions from "../../redux/contact/contact-action";

class AddContact extends Component {
  state = {
    name: "",
    number: "",
  };

  alerError = () => {
    return this.props.contacts.items.find(({ name }) => {
      return name === this.state.name;
    });
  };

  // deleteTodo = (todoId) => {
  //   this.setState((prevState) => ({
  //     todos: prevState.todos.filter((todo) => todo.id !== todoId),
  //   }));
  // };

  submitformContact = (e) => {
    e.preventDefault();

    if (this.alerError()) {
      alert(`${this.state.name} is alreaady in contacts`);
      return;
    }
    this.props.stateTransfer(this.state);

    this.setState({ name: "", number: "" });
  };

  addContact = (e) => {
    const { value, name } = e.currentTarget;

    this.setState({ [name]: value });
  };

  render() {
    console.log(this.props.contacts);
    const { number, name } = this.state;
    return (
      <form
        onSubmit={this.submitformContact}
        htmlFor={this.props.uuidv4()}
        className={style.transparent}
      >
        <div className={style.formInner}>
          <label>
            Name
            <input
              onChange={this.addContact}
              type="text"
              value={name}
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
              required
            />
          </label>
          <label>
            Number
            <input
              onChange={this.addContact}
              type="tel"
              value={number}
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
              required
            />
          </label>
          <button className={style.buttom} type="submit">
            Add contact
          </button>
        </div>
      </form>
    );
  }
}

AddContact.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      number: PropTypes.string,
    })
  ),
  uuidv4: PropTypes.func,
  name: PropTypes.string,
  number: PropTypes.number,
  stateTransfer: PropTypes.func,
};
AddContact.defaultProps = {
  contacts: [],
};

const mapStateToProps = (state) => ({
  contacts: state.contact,
});

const mapDispatchToProps = (dispatch) => ({
  stateTransfer: (value) => dispatch(actions.addContact(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AddContact);
