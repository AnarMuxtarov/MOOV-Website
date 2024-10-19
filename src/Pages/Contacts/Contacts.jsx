import React from "react";
import ContactBanner from "../../Components/Contact/ContactBanner/ContactBanner";
import ContactForm from "../../Components/Contact/ContactForm/ContactForm";
import ContactMap from "../../Components/Contact/ContactMap/ContactMap";
import Membership from "../../Components/Main/Membership/Membership";
import "../Contacts/Contacts.css";

const Contacts = () => {
  return (
    <>
      <ContactBanner />
      <ContactForm />
      <ContactMap />
      <Membership />
    </>
  );
};

export default Contacts;
