import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";
// import contactTypes from "./contact-types";
import * as actions from "../../redux/contact/contact-action";

// const initialState = {
//   contacts: {
//     items: [],
//     filter: "",
//   },
// };

const items = createReducer([], {
  [actions.addContact]: (state, { payload }) => [...state, payload],
  [actions.deleteContact]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
});

// const items = (state = [], { type, payload }) => {
//   switch (type) {
//     case contactTypes.ADD:
//       return [...state, payload];

//     case contactTypes.DEL:
//       return state.filter(({ id }) => id !== payload);

//     default:
//       return state;
//   }
// };

const filter = createReducer("", {
  [actions.filterContact]: (_, { payload }) => payload,
});
// (state = "", { type, payload }) => {
//   switch (type) {
//     case actions.filterContact:
//       return payload;
//     default:
//       return state;
//   }
// };

export default combineReducers({
  items,
  filter,
});
