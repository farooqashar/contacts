import {  React, useState, useEffect } from "react";
import ContactCard from "./components/ContactCard.jsx";
import Header from "./components/header.jsx";

const App = () => {

  const [contacts, setContacts] = useState([]);

  useEffect(() => {

  fetch("https://randomuser.me/api/?results=50")
    .then(response => response.json())
    .then(data => {
      setContacts(data.results);
    })
    },[]);
  

  return (
    <>
      <head>
      <title>Contacts</title>
      </head>
      <Header/>
      {contacts.map(each_contact => 
        (<center><ContactCard
          avatar={each_contact.picture.large}
          name={each_contact.name.title + " " + each_contact.name.first + " " + each_contact.name.last}
          email={each_contact.email}
          age={each_contact.dob.age}
          phone = {each_contact.cell}
        /></center>)
    
      )}
    </>
  )

}

export default App;