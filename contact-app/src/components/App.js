import React, {useState} from "react"
import './App.css';
import Header from './Header.js';
import AddContact from './AddContact';
import ContactList from './ContactList';

function App() {
  // const contacts = [{id: "1", name: "Mina", email: "minakshi9.in@gmail.com"},
  // {id: "2", name: "Dia", email: "dia.in@gmail.com"}, {id: "1", name: "pooja", email: "pooja.in@gmail.com"}]
  const [contacts, setContacts] = useState([])
  return (
    <div>
    <Header/>
    <AddContact/>
    {/* Example of sending props */}
    <ContactList contacts={contacts}/>
    </div>
  );
}

export default App;
