import React, { useState } from "react";
import { ContactForm } from "../../components/contactForm/ContactForm";
import { TileList } from "../../components/tileList/TileList";

export const ContactsPage = ({ contacts, addContact }) => {
  
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');

  const isDuplicate = (contact) => {
    const names = contacts.map(contact => contact.name);
    if (names.includes(contact.name)) {
      return true;
    }
    return false;
  };

  const onNameChange = (e) => {
    setName(e.target.value);
  };

  const onEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const onPhoneChange = (e) => {
    setPhone(e.target.value);
  };

  const clearData = () => {
    setName('');
    setPhone('');
    setEmail('');
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isDuplicate === false) {
      addContact({ name, phone, email });
    }
    clearData();
  };

  return (
    <div>
      <section>
        <h2>Add Contact</h2>
        <ContactForm 
          name={name}
          setName={onNameChange}
          phone={phone}
          setPhone={onPhoneChange}
          email={email}
          setEmail={onEmailChange}
          handleSubmit={handleSubmit} />
      </section>
      <hr />
      <section>
        <h2>Contacts</h2>
        <TileList arr={contacts} />
      </section>
    </div>
  );
};
