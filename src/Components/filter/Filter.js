import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import styles from "./Filter.module.css";
import { changeFilter } from "../redux/contacts/contacts-actions";

const Filter = ({ value, onChange }) => {
  return (
    <label className={styles.label}>
      Search
      <input
        onChange={onChange}
        value={value}
        type="text"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
        required
      />
    </label>
  );
};

const mapStateToProps = (state) => ({
  value: state.contacts.filter,
});

const mapDispatchToProps = {
  onChange: (e) => changeFilter(e.target.value),
};

Filter.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
};
export default connect(mapStateToProps, mapDispatchToProps)(Filter);
