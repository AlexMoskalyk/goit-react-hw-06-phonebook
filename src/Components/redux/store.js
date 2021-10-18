// import { combineReducers } from "redux";===REDUX
import { configureStore } from "@reduxjs/toolkit";

// import { composeWithDevTools } from "redux-devtools-extension";===REDUX
import contactsReducer from "./contacts/contacts-reducer";

//======================toolkit=======================
const store = configureStore({
  reducer: { contacts: contactsReducer },
  devTools: process.env.NODE_ENV === "development",
});
//========================redux==========================
// const store = createStore(rootReducer, composeWithDevTools());
// const rootReducer = combineReducers({
//   contacts: contactsReducer,
// });

export default store;
