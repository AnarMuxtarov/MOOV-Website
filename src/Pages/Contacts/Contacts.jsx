import React from 'react'
import "../Contacts/Contacts.css"
import ContactForm from '../../Components/Contact/ContactForm/ContactForm'
import ContactMap from '../../Components/Contact/ContactMap/ContactMap'
import Membership from '../../Components/Main/Membership/Membership'
import ContactBanner from '../../Components/Contact/ContactBanner/ContactBanner'

const Contacts = () => {
  return (
    <> 
   <ContactBanner/>
    <ContactForm/>
    <ContactMap/>
    <Membership/>

    </>
  )
}

export default Contacts