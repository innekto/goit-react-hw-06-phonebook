import { ContactListMarkup, ContactListItem, ContactListHeader, ContactListText, ContactListButton } from 'components/ContactsList/ContactsList.styled';
import { useSelector, useDispatch } from 'react-redux';
import { getContactsValue, removeContact } from 'redux/phonebookSlice';

export const ContactList = () => {
  const dispatch = useDispatch();
  const { contacts, filter } = useSelector(getContactsValue);

  const getRequiredCard = () => {
    const normalizedFilter = filter.toLowerCase();
    
  return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  const deleteCard = contactId => {
    dispatch(removeContact(contactId));
  };
  const neeedCard = getRequiredCard();
    return (
        <ContactListMarkup>
            {neeedCard.map(({ name, number, id }) => {
                return (
                    <ContactListItem key={id}>
                        <ContactListHeader>{name}</ContactListHeader>
                        <ContactListText>{number}</ContactListText>
                        <ContactListButton type='button' onClick={() => deleteCard(id)}>Delete</ContactListButton>
                    </ContactListItem>
                );
            })}
        </ContactListMarkup>
    );
};


// ContactsList.propTypes = {
//   requiredCard: PropTypes.arrayOf(
//     PropTypes.exact({
//       name: PropTypes.string.isRequired,
//       number: PropTypes.string.isRequired,
//       id: PropTypes.string.isRequired,
//     })
//   ),
//   deleteCard: PropTypes.func.isRequired,
// };