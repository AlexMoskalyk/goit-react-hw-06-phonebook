import { combineReducers } from "redux";

import { createReducer } from "@reduxjs/toolkit";
import {
  changeFilter,
  deleteContact,
  getAllContacts,
  addNewContact,
} from "./contacts-actions";

//==============================toolkit============================

const items = createReducer(
  [
    { id: "id-1", contactName: "Rosie Simpson", contactNumber: "4591256" },
    { id: "id-2", contactName: "Hermione Kline", contactNumber: "4438912" },
    { id: "id-3", contactName: "Eden Clements", contactNumber: "6451779" },
    { id: "id-4", contactName: "Annie Copeland", contactNumber: "2279126" },
  ],
  {
    [addNewContact]: (state, action) => [...state, action.payload],
    [getAllContacts]: (state, action) => action.payload,
    [deleteContact]: (state, action) =>
      state.filter((contact) => contact.id !== action.payload),
  }
);

const filter = createReducer("", {
  [changeFilter]: (_, action) => action.payload,
});

//===========================redux======================================
// const items = (
//   state = [
//     { id: "id-1", contactName: "Rosie Simpson", contactNumber: "4591256" },
//     { id: "id-2", contactName: "Hermione Kline", contactNumber: "4438912" },
//     { id: "id-3", contactName: "Eden Clements", contactNumber: "6451779" },
//     { id: "id-4", contactName: "Annie Copeland", contactNumber: "2279126" },
//   ],

//   action
// ) => {
//   switch (action.type) {
//     case "contacts/addNewContact":
//       return [...state, action.payload];
//     case "contacts/getContacts":
//       return action.payload;
//     case "contacts/deleteContact":
//       return state.filter((contact) => contact.id !== action.payload);

//     default:
//       return state;
//   }
// };

// const filter = (state = "", action) => {
//   switch (action.type) {
//     case "contacts/changeFilter":
//       return action.payload;

//     default:
//       return state;
//   }
// };

export default combineReducers({
  items,
  filter,
});
