// import { v4 as uuidv4 } from "uuid";

import {
  ADD_NEW_CONTACT,
  GET_ALL_CONTACTS,
  DELETE_CONTACT,
  CHANGE_FILTER,
} from "../contacts/contacts-types";

import { createAction, nanoid } from "@reduxjs/toolkit";

//=======================toolkit========================

export const changeFilter = createAction(CHANGE_FILTER);
export const deleteContact = createAction(DELETE_CONTACT);
export const getAllContacts = createAction(GET_ALL_CONTACTS);
export const addNewContact = createAction(ADD_NEW_CONTACT, (contact) => {
  return {
    payload: {
      id: nanoid(),
      contactName: contact.contactName,
      contactNumber: contact.contactNumber,
    },
  };
});

//=======================redux===========================
// export const addNewContact = (contact) => {
//   return {
//     type: ADD_NEW_CONTACT,
//     payload: {
//       id: uuidv4(),
//       contactName: contact.contactName,
//       contactNumber: contact.contactNumber,
//     },
//   };
// };

// export const getAllContacts = (contacts) => {
//   return {
//     type: GET_ALL_CONTACTS,
//     payload: contacts,
//   };
// };

// export const deleteContact = (id) => {
//   return {
//     type: DELETE_CONTACT,
//     payload: id,
//   };
// };

// export const changeFilter = (value) => ({
//   type: CHANGE_FILTER,
//   payload: value,
// });
