import { combineReducers } from "redux";

import contactTypes from "./contact-types";

// const initialState = {
//   contacts: {
//     items: [],
//     filter: "",
//   },
// };

const items = (state = [], { type, payload }) => {
  switch (type) {
    case contactTypes.ADD:
      return [...state, payload];

    case contactTypes.DEL:
      return state.filter(({ id }) => id !== payload);

    default:
      return state;
  }
};

const filter = (state = "", { type, payload }) => {
  switch (type) {
    case contactTypes.FIL:
      return payload;
    default:
      return state;
  }
};

export default combineReducers({
  items,
  filter,
});
