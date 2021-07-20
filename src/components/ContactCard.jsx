import '../styles.css';
import { useState } from "react";

const ContactCard = ({ avatar, name, email, age, phone }) => {
  
  const [sendEmail, setSendEmail] = useState(true);
  const [call, setCall] = useState(true);


  return (
    <div className="contact-card">
      <head>
        <title>Contacts</title>
      </head>
      <img src={avatar} alt="avatar" />
      <center>
      <div className="user-details">
        <p>Name: {name}</p>
        <p>Age: {age}</p>
        {sendEmail === true ? <a href = {`mailto:${email}`}>Send Email</a> : null}
        <br/>
        {call === true ? <a href = {`tel:${phone}`}>Call</a> : null}
      </div>
      </center>
    </div>
  );
};


export default ContactCard;
