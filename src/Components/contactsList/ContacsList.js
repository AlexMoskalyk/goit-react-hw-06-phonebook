import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import styles from "../contactsList/ContactsList.module.css";
import { deleteContact } from "../redux/contacts/contacts-actions";

const ContactList = ({ contacts, deleteContact }) => {
  return (
    <ul className={styles.ul}>
      {contacts &&
        contacts.map((item) => (
          <li className={styles.li} key={item.id}>
            <span>{item.contactName}</span>
            <span>{item.contactNumber}</span>
            <button type="button" onClick={() => deleteContact(item.id)}>
              Delete
            </button>
          </li>
        ))}
    </ul>
  );
};

const getVisibleContacts = (allContacts, filter) => {
  const normalizedFilter = filter.toLowerCase();
  //   return allContacts.filter((contact) =>
  //     console.log(contact.contactName.toLowerCase().includes("roise"))
  //   );

  return allContacts.filter((contact) =>
    contact.contactName.toLowerCase().includes(normalizedFilter)
  );
};

const mapStateToProps = (state) => ({
  contacts: getVisibleContacts(state.contacts.items, state.contacts.filter),
});

// const mapStateToProps = (state) => {
//   return {
//     contacts: state.contacts,
//   };
// };
const mapDispatchToProps = {
  deleteContact,
};

ContactList.propTypes = {
  allContacts: PropTypes.string,
  filter: PropTypes.string,
};
export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
