import PropTypes from 'prop-types';
import { List, Item, Button } from './ContactList.styled';

export const ContactList = ({ deleteContact, contactList }) => {
  const filteredContacts = contactList();

  return (
    <List>
      {filteredContacts.map(({ id, name, number }) => (
        <Item key={id}>
          {name}: {number}
          <Button
            onClick={() => {
              deleteContact(id);
            }}
          >
            Delete
          </Button>
        </Item>
      ))}
    </List>
  );
};

ContactList.propTypes = {
  contactList: PropTypes.func.isRequired,
  deleteContact: PropTypes.func.isRequired,
};
