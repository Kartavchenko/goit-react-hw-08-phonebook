import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { removeContact, fetchContacts } from 'redax/operation';
import { editContact } from 'redax/modalSlice';
import { selectFilteredContacts, selectModalContact } from 'redax/selectors';

const ListContacts = () => {
  const dispatch = useDispatch();
  const items = useSelector(selectFilteredContacts);
  const modalDataContact = useSelector(selectModalContact);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch, modalDataContact]);

  const deleteContact = id => {
    return dispatch(removeContact(id));
  };

  const editContactData = id => {
    const dataContact = items.find(item => item.id === id);
    dispatch(editContact(dataContact));
  };

  const user = items.map(({ id, name, number }) => {
    return (
      <li
        key={id}
        style={{
          marginBottom: '10px',
        }}
      >
        {name}: {number}
        <button
          type="button"
          onClick={() => editContactData(id)}
          style={{
            marginLeft: '5px',
          }}
        >
          Edit
        </button>
        <button
          type="button"
          onClick={() => deleteContact(id)}
          style={{
            marginLeft: '5px',
          }}
        >
          Delete
        </button>
      </li>
    );
  });

  return (
    <>
      <h2>Contacts</h2>
      <ul>{user}</ul>
    </>
  );
};

export default ListContacts;

ListContacts.propTypes = {
  arrayContacts: PropTypes.array,
  button: PropTypes.element,
};
