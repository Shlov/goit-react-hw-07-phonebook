import { deleteContact } from "Redux/operations";
import { getContacts, getFilter } from "Redux/selectors"
import { useDispatch, useSelector } from "react-redux"
import { Button, Item, List } from "./ListContacts.styled"


export const ListContacts = () => {

  const contactsState = useSelector(getContacts).items;
  const filter = useSelector(getFilter).query;
  const dispatch = useDispatch();

  // console.log(getContacts().items)

  const contacts = contactsState.filter(({name}) => name.toLowerCase().includes(filter.toLowerCase()))

  return (
    <List>
      { contacts.map(contact => 
        <Item key = {contact.id}>{contact.name}: {contact.number} 
        <Button onClick = {() => dispatch(deleteContact(contact.id))}>Delete</Button>
        </Item>
      )}
    </List>
  )
}
