import React, { Component } from "react";
import { connect } from "react-redux";
import { addContact } from "../redux/contactsActionsTypes";
import styles from "./ContactForm.module.css";
import PropTypes from "prop-types";

class ContactForm extends Component {
  state = {
    name: "",
    number: "",
  };

  handlerChangeInput = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handlerSubmitForm = (e) => {
    this.props.onItemAdded({ ...this.state });
    e.preventDefault();
    this.reset();
  };

  reset = () => {
    this.setState({
      name: "",
      number: "",
    });
  };

  render() {
    const { name, number } = this.state;
    return (
      <div className={styles.containerForm}>
        <form className={styles.phoneForm} onSubmit={this.handlerSubmitForm}>
          <label className={styles.phoneHeader}>
            Name
            <input
              className={styles.inputForm}
              onChange={this.handlerChangeInput}
              type="text"
              required
              name="name"
              placeholder="Please, enter Contact's Name"
              value={name}
            ></input>
          </label>
          <label className={styles.phoneHeader}> Number </label>
          <input
            className={styles.inputForm}
            onChange={this.handlerChangeInput}
            type="text"
            name="number"
            placeholder="xxx-xxx"
            required
            value={number}
          ></input>
          <button className={styles.buttonForm} type="submit">
            Add contact
          </button>
        </form>
      </div>
    );
  }
}

ContactForm.propTypes = {
  name: PropTypes.string,
  number: PropTypes.string,
};

const mapDispatchToProps = {
  onItemAdded: addContact,
};

export default connect(null, mapDispatchToProps)(ContactForm);
