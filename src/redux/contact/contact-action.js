import { v4 as uuidv4 } from "uuid";
// import contactTypes from "./contact-types";

import { createAction } from "@reduxjs/toolkit";

// export const addContact = ({ name, number }) => ({
//   type: contactTypes.ADD,
//   payload: {
//     name,
//     number,
//     id: uuidv4(),
//   },
// });

export const addContact = createAction("addContact", ({ name, number }) => ({
  payload: {
    name,
    number,
    id: uuidv4(),
  },
}));

//   ({ name, number }) => ({
//   type: contactTypes.ADD,
// payload: {
//   name,
//   number,
//   id: uuidv4(),
// },
// });

export const deleteContact = createAction("deleteContact");
//   (todoId) => ({
//   type: contactTypes.DEL,
//   payload: todoId,
// });

export const filterContact = createAction("filterContact");
//   (value) => ({
//   type: contactTypes.FIL,
//   payload: value,
// });
