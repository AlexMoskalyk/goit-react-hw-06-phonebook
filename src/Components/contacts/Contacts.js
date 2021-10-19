import React from "react";
// import { connect } from "react-redux";
// import { load, save } from "../../services/localStorage";
import ContactList from "../contactsList/ContacsList";
import Filter from "../filter/Filter";
import Form from "../form/Form";
import styles from "./Contacts.module.css";
// import {
//   addNewContact,
//   getAllContacts,
// } from "../redux/contacts/contacts-actions";
// import PropTypes from "prop-types";

const Contacts = ({ contacts, getAllContacts }) => {
  // useEffect(() => {
  //   const newContacts = load("contacts");
  //   getAllContacts(newContacts);
  // }, [getAllContacts]);

  // useEffect(() => {
  //   save("contacts", contacts);
  // }, [contacts]);

  return (
    <div className={styles.container}>
      <Form />
      <Filter />
      <ContactList />
    </div>
  );
};

// const mapDispatchToProps = {
//   addNewContact,
//   getAllContacts,
// };
// const mapStateToProps = (state) => {
//   return {
//     contacts: state.contacts.items,
//   };
// };

// Contacts.propTypes = {
//   contacts: PropTypes.array,
//   getAllContacts: PropTypes.func,
// };

// export default connect(mapStateToProps, mapDispatchToProps)(Contacts);
export default Contacts;
