import { Component } from "react";
import PropTypes from "prop-types";
import style from "./Filter.module.scss";
export class Filter extends Component {
  state = {
    filter: "",
  };

  render() {
    const { filterContact, filter } = this.props;
    return (
      <input
        className={style.lable}
        type="text"
        onChange={filterContact}
        value={filter}
      />
    );
  }
}

Filter.propTypes = {
  filterContact: PropTypes.func,
  filter: PropTypes.string,
};
