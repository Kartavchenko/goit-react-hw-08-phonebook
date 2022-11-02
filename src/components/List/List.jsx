import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { removeContact, patchContact, fetchContacts } from 'redax/operation';
import { selectFilteredContacts } from 'redax/selectors';
import { ModalEdit } from 'components/Modal/ModalEdit';

// зробив редюсер контакт слайсу, зібрати данні з контакту і запушити за допомогою editContacts

const ListContacts = () => {
  const items = useSelector(selectFilteredContacts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const deleteContact = id => {
    return dispatch(removeContact(id));
  };

  const editContact = id => {
    console.log(items.find(item => item.id === id));
    // return { id, name, number };
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
          onClick={() => editContact(id)}
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
      <ModalEdit editContact={editContact} />
    </>
  );
};

export default ListContacts;

ListContacts.propTypes = {
  arrayContacts: PropTypes.array,
  button: PropTypes.element,
};
