import React, { useState } from "react";
// import { connect } from "react-redux";
import { addNewContact } from "../redux/contacts/contacts-actions";
import styles from "./Form.module.css";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";

const initialState = {
  contactName: "",
  contactNumber: "",
};

const Form = () => {
  const [contact, setContact] = useState(initialState);
  const contacts = useSelector((state) => state.contacts.items);

  const dispatch = useDispatch();

  const isThereContact = (contactName, contactNumber) => {
    return (
      contacts.some(
        (contact) =>
          contact.contactName.toLowerCase() === contactName.toLowerCase()
      ) ||
      contacts.some(
        (contact) =>
          contact.contactNumber.toLowerCase() === contactNumber.toLowerCase()
      )
    );
  };

  const onHandleChange = (e) => {
    const { value, name } = e.target;

    setContact((prev) => ({ ...prev, [name]: value }));
  };

  const reset = () => {
    setContact(initialState);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isThereContact(contact.contactName, contact.contactNumber)) {
      return alert(
        `${contact.contactName} or ${contact.contactNumber} has been already in contact list  `
      );
    }

    dispatch(addNewContact(contact));

    reset();
  };

  return (
    <>
      <form className={styles.container} onSubmit={handleSubmit}>
        <label>
          Name
          <input
            className={styles.formInput}
            value={contact.contactName}
            onChange={onHandleChange}
            type="text"
            name="contactName"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
            required
          />
        </label>
        <label>
          Telefon
          <input
            className={styles.formInput}
            value={contact.contactNumber}
            onChange={onHandleChange}
            type="tel"
            name="contactNumber"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
            required
          />
        </label>

        <button className={styles.formBtn} type="submit">
          Add contact
        </button>
      </form>
    </>
  );
};

// const mapStateToProps = (state) => ({
//   contatcs: state.contacts.items,
// });

// const mapDispatchToProps = {
//   addNewContact,
// };

Form.propTypes = {
  contatcs: PropTypes.array,
  addNewContact: PropTypes.func,
};
export default Form;

// export default connect(mapStateToProps, mapDispatchToProps)(Form);
