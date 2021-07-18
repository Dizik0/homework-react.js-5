import { v4 as uuidv4 } from "uuid";
import contactTypes from "./contact-types";

// export const addContact = ({ name, number }) => ({
//   type: contactTypes.ADD,
//   payload: {
//     name,
//     number,
//     id: uuidv4(),
//   },
// });

export const addContact = ({ name, number }) => ({
  type: contactTypes.ADD,
  payload: {
    name,
    number,
    id: uuidv4(),
  },
});

export const deleteContact = (todoId) => ({
  type: contactTypes.DEL,
  payload: todoId,
});

export const filterContact = (value) => ({
  type: contactTypes.FIL,
  payload: value,
});
