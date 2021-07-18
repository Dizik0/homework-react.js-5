import { Component } from "react";
import PropTypes from "prop-types";
import style from "./ContactList.module.scss";

import { connect } from "react-redux";
import * as actions from "../../redux/contact/contact-action";

class ContactList extends Component {
  render() {
    const { filterTodos, deleteTodo, uuidv4 } = this.props;

    return (
      <ul className={style.list}>
        {filterTodos.map(({ name, number, id }) => (
          <li key={uuidv4()} className={style.listItem}>
            <p className={style.name}>{name}</p>
            <span className={style.number}>{number}</span>
            <button
              className={style.button}
              type="button"
              onClick={() => deleteTodo(id)}
            >
              Удалить
            </button>
          </li>
        ))}
      </ul>
    );
  }
}

ContactList.propTypes = {
  filterTodos: PropTypes.array,
  uuidv4: PropTypes.func,
  deleteTodo: PropTypes.func,
};

// const { filter, contacts } = this.state;

// const filterTodos = contacts.filter(({ name }) =>
//   name.toLowerCase().includes(filter)
// );

const mapStateToProps = (state) => {
  const { filter, items } = state.contact;

  const filterTodos = items.filter(({ name }) =>
    name.toLowerCase().includes(filter)
  );

  return {
    filterTodos: filterTodos,
  };
};

const mapDispatchToProps = (dispatch) => ({
  deleteTodo: (id) => dispatch(actions.deleteContact(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
