// import { useEffect, useState } from "react";
// import { nanoid } from 'nanoid';
import { FormContact } from "./FormContact/FotmContact";
import { Contacts } from "./Contacts/Contacts";
import "@fontsource/rajdhani";
// import { useDispatch, useSelector } from "react-redux";
// import { getContacts, getFilter } from "./Redux/selectors";

// const defaultContact = [
//   {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
//   {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
//   {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
//   {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'}
// ]

// const getInitialsContactState = () => {
//   const savedContacts = localStorage.getItem('contacts')
//     if (savedContacts !== null) {
//       const parsedContacts = JSON.parse(savedContacts)
//       return parsedContacts
//     } else {
//       return defaultContact
//     }
// }

export const App = () => {

  // const dispatch = useDispatch()

  // const contacts = useSelector(getContacts);
  // const filter = useSelector(getFilter);


  
  // const [contacts, setContacts] = useState(getInitialsContactState);
  // const [filter, setFilter] = useState('');

  // const recordFilter = (evnt) => {
  //   setFilter(evnt.target.value)
  // }

  // const addContact = (nameContact, numberContact) => {
  //   const include = contacts.some(({name}) => name.toLowerCase() === nameContact.toLowerCase())
  //   if (include) {
  //     return alert(`${nameContact} is already in contacts.`)
  //   } else {
  //     const newContact = {id: nanoid(), name: nameContact, number: numberContact}
  //     setContacts(state => [...state, newContact])
  //   }
  // }

  // const deleteContact = (id) => {
  //   setContacts(contacts.filter((contact) => contact.id !==id))
  // }

  // const getVisibleContact = () => {
  //   return contacts.filter(({name}) => name.toLowerCase().includes(filter.toLowerCase()))
  // }

  // useEffect(()=>{
  //   localStorage.setItem('contacts', JSON.stringify(contacts))
  // },[contacts])
  

  return (
    <div style={{fontSize: 40,}}>
      <h2>Phonebook</h2> 
        <FormContact 
          // onAddContact = {addContact}
        />
      <h3>Contacts</h3>
        <Contacts 
        // onSearch = {recordFilter}
        // contacts = {getVisibleContact()}
        // onDeleteContact = {deleteContact}
      />
    </div>
  );
}


// export class App extends Component {
  
//   state = {
//     contacts: [
//       {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
//       {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
//       {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
//       {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'}
//       ],
//     filter: ''
//   }

//   recordFilter = (evnt) => {
//     this.setState({filter: evnt.target.value})
//   }

//   addContact = (nameContact, numberContact) => {
//     const include = this.state.contacts.some(({name}) => name.toLowerCase() === nameContact.toLowerCase())
//     if (include) {
//       return alert(`${nameContact} is already in contacts.`)
//     } else {
//       const contact = {id: nanoid(), name: nameContact, number: numberContact}
//       this.setState(state => state = {contacts: [...state.contacts, contact]})
//     }
//   }

//   deleteContact = (id) => {
//     this.setState(({contacts}) => ({contacts: contacts.filter((contact) => contact.id !==id)}))
//   }

//   getVisibleContact = () => {
//     return this.state.contacts.filter(({name}) => name.toLowerCase().includes(this.state.filter.toLowerCase()))
//   }

//   componentDidMount () {
//     const contacts = localStorage.getItem('contacts')
//     const parsedContacts = JSON.parse(contacts)
//     if (parsedContacts) {
//       this.setState({contacts: parsedContacts})
//     }
//   }
  
//   componentDidUpdate (prevProps, prevState) {
//     if (prevState.contacts !== this.state.contacts) {
//       return localStorage.setItem('contacts', JSON.stringify(this.state.contacts))
//     }
//   }

//   render () {
//     return (
//       <div style={{fontSize: 40,}}>
//         <h2>Phonebook</h2> 
//           <FormContact onAddContact = {this.addContact}/>
//         <h3>Contacts</h3>
//           <Contacts 
//           onSearch = {this.recordFilter}
//           contacts = {this.getVisibleContact()}
//           onDeleteContact = {this.deleteContact}/>
//       </div>
//     );
//   }
// }
