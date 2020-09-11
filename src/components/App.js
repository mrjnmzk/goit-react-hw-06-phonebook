import React, { Component } from "react";
import ContactForm from "./contactForm/ContactForm";

import styles from "./App.module.css";
import { CSSTransition } from "react-transition-group";
import slidePhone from "../transitions/slidePhone.module.css";
import ContactList from "./contactsList/ContactList";
import Filter from "./filter/Filter";
import Notification from "./notification/Notification";

export default class App extends Component {
  state = {
    isRender: false,
    isRenderFilter: false,
    isRenderNotific: false,
  };

  componentDidMount() {
    const savedContactsInLocalStorage = localStorage.getItem("contacts");
    this.setState({ isRender: true, isRenderFilter: true });

    if (savedContactsInLocalStorage) {
      this.setState({ contacts: JSON.parse(savedContactsInLocalStorage) });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("prevState: ", prevState);
    console.log("this.state: ", this.state);

    if (prevState.contacts !== this.state.contacts) {
      localStorage.setItem("contacts", JSON.stringify(this.state.contacts));
    }
  }

  showNotification = () =>
    setTimeout(() => this.setState({ isRenderNotific: false }), 2000);

  render() {
    const { isRender, isRenderFilter, isRenderNotific } = this.state;
    return (
      <>
        <CSSTransition
          in={isRenderNotific}
          timeout={500}
          classNames={slidePhone}
          mountOnEnter
          unmountOnExit
        >
          <Notification />
        </CSSTransition>
        <CSSTransition in={isRender} timeout={500} classNames={slidePhone}>
          <h1 className={styles.header}>Phonebook</h1>
        </CSSTransition>

        <ContactForm />

        <h2 className={styles.headerPhone}>Contacts</h2>

        <CSSTransition
          in={isRenderFilter}
          timeout={500}
          classNames={slidePhone}
          unmountOnExit
        >
          <Filter />
        </CSSTransition>
        <ContactList />
      </>
    );
  }
}
