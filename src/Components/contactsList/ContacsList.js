import React from "react";
// import { connect } from "react-redux";
// import PropTypes from "prop-types";
import styles from "../contactsList/ContactsList.module.css";
import { deleteContact } from "../../redux/contacts/contacts-actions";
import { useDispatch, useSelector } from "react-redux";

const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector((state) =>
    getVisibleContacts(state.contacts.items, state.contacts.filter)
  );

  const error = useSelector((state) => state.contacts.error);
  return (
    <>
      {error && <h2>Somthing was wrong !</h2>}
      <ul className={styles.ul}>
        {contacts &&
          contacts.map((item) => (
            <li className={styles.li} key={item.id}>
              <span>{item.contactName}</span>
              <span>{item.contactNumber}</span>
              <button
                type="button"
                onClick={() => dispatch(deleteContact(item.id))}
              >
                Delete
              </button>
            </li>
          ))}
      </ul>
    </>
  );
};

const getVisibleContacts = (allContacts, filter) => {
  const normalizedFilter = filter.toLowerCase();
  return allContacts.filter((contact) =>
    contact.contactName.toLowerCase().includes(normalizedFilter)
  );
};

// const mapStateToProps = (state) => ({
//   contacts: getVisibleContacts(state.contacts.items, state.contacts.filter),
// });

// const mapDispatchToProps = {
//   deleteContact,
// };

// ContactList.propTypes = {
//   allContacts: PropTypes.string,
//   filter: PropTypes.string,
// };
export default ContactList;
// export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
