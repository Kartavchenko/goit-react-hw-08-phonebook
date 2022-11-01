import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { removeContact, fetchContacts } from 'redax/operation';
import { selectFilteredContacts } from 'redax/selectors';

const ListContacts = () => {
  const items = useSelector(selectFilteredContacts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const deleteContact = id => {
    return dispatch(removeContact(id));
  };

  const user = items.map(({ id, name, phone }) => {
    return (
      <li
        key={id}
        style={{
          marginBottom: '10px',
        }}
      >
        {name}: {phone}
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
