import React from 'react'
import "../Contacts/Contacts.css"
import ContactForm from '../../Components/ContactForm/ContactForm'
import ContactMap from '../../Components/ContactMap/ContactMap'
import Membership from '../../Components/Main/Membership/Membership'
import ContactBanner from '../../Components/ContactBanner/ContactBanner'

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