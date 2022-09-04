import React from "react";

export const ContactForm = ({
  name,
  setName,
  phone,
  setPhone,
  email,
  setEmail,
  handleSubmit
}) => {
  return (
    <form onSubmit={handleSubmit} >
      <input type='text' placeholder='Name' value={name} onChange={setName} />
      <input type='text' placeholder='Phone' pattern="^[2-9]\d{2}-\d{3}-\d{4}$" value={phone} onChange={setPhone} />
      <input type='text' placeholder='Email' value={email} onChange={setEmail} />
      <input type='submit' />
    </form>
  );
};
