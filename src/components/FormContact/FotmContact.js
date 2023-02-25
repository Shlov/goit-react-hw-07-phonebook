import { Button } from "components/ListContacts/ListContacts.styled";
import { useState } from "react";
import { Input , Label, Form} from "./FormContact.styled";
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from "react-redux";
import { addContact } from "Redux/contactsSlice";
import { getContacts } from "Redux/selectors";

export const FormContact = () => {

  const dispatch = useDispatch();
  const contacts = useSelector(getContacts).items;

  const [nameNewContact, setNameNewContact] = useState('');
  const [number, setNumber] = useState('');

  const recordName = (evnt) => {
    setNameNewContact(evnt.target.value)
  }
  
  const recordNumber = (evnt) => {
    setNumber(evnt.target.value)
  }


  const transferContact = (evnt) => {
    evnt.preventDefault();
    const include = contacts.some(({name}) => name.toLowerCase() === nameNewContact.toLowerCase())
    if (include) {
      return alert(`${nameNewContact} is already in contacts.`)
    } else {
      dispatch(addContact(nameNewContact, number));
    }
    evnt.target.reset()
  }


  return (
    <Form action="" onSubmit = {(e) => transferContact(e)}>
          <Label>
            Name
            <Input
            onChange = {(e) => recordName(e)}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            />
          </Label>
          <Label htmlFor="">
            Number
            <Input
              onChange = {(e) => recordNumber(e)}
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
            />
          </Label>
          
          <Button type="submit" >
            Add contact
          </Button>
    </Form>
  )
}

FormContact.propType = {
  onAddContact: PropTypes.func.isRequired,
}


// export class FormContact extends Component {
//   state = {
//     name: '',
//     number: ''
//   }

//   recordName = (evnt) => {
//     this.setState({name: evnt.target.value})
//   }
  
//   recordNumber = (evnt) => {
//     this.setState({number: evnt.target.value})
//   }

//   transferContact = (evnt) => {
//     evnt.preventDefault();
//     const name = this.state.name
//     const number = this.state.number
//     this.props.onAddContact(name, number)
//     evnt.target.reset()
//     // this.setState({name: '', number: ''})
//   }

//   render () {
//     return (
//     <Form action="" onSubmit = {(e) => this.transferContact(e)}>
//           <Label>
//             Name
//             <Input
//             onChange = {(e) => this.recordName(e)}
//             type="text"
//             name="name"
//             pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//             title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
//             required
//             />
//           </Label>
//           <Label htmlFor="">
//             Number
//             <Input
//               onChange = {(e) => this.recordNumber(e)}
//               type="tel"
//               name="number"
//               pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
//               title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
//               required
//             />
//           </Label>
          
//           <Button type="submit" >
//             Add contact
//           </Button>
//         </Form>
//     )
//   }

// }