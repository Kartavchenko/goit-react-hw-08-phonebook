import { createPortal } from 'react-dom';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectModalContact } from 'redax/selectors';
import { editContact } from 'redax/modalSlice';
import { patchContact } from 'redax/operation';

export const ModalEdit = ({ closeModal }) => {
  const overlay = document.getElementById('popup-root');
  const dispatch = useDispatch();
  const modalDataContact = useSelector(selectModalContact);

  useEffect(() => {
    window.addEventListener('keydown', onCloseEscape);

    return () => {
      window.removeEventListener('keydown', onCloseEscape);
    };
  });

  const onCloseEscape = e => {
    if (e.code === 'Escape') {
      closeModal();
    }
  };

  const onCloseClickBackdrop = e => {
    if (e.currentTarget === e.target) {
      closeModal();
    }
  };

  const handleChange = e => {
    const value = e.target.value;
    dispatch(editContact(value));
  };

  const handleEdit = e => {
    e.preventDefault();
    const form = e.target;
    const {
      elements: { name, number },
    } = e.target;
    dispatch(
      patchContact(modalDataContact.id, {
        name: name.value + modalDataContact.name,
        number: number.value + modalDataContact.number,
      })
    );
    form.reset();
  };

  return createPortal(
    <div onClick={onCloseClickBackdrop}>
      <form onSubmit={handleEdit}>
        <div
          style={{
            marginBottom: '10px',
          }}
        >
          <label
            style={{
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            Name
            <input
              style={{
                width: '200px',
                marginTop: '5px',
              }}
              type="text"
              name="name"
              onChange={handleChange}
              value={modalDataContact.name ?? ''}
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
            />
          </label>
        </div>
        <div style={{ marginBottom: '10px' }}>
          <label
            style={{
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            Number
            <input
              style={{
                width: '200px',
                marginTop: '5px',
              }}
              type="tel"
              name="number"
              onChange={handleChange}
              value={modalDataContact.number ?? ''}
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
            />
          </label>
        </div>
        <button type="submit" style={{ marginBottom: '10px' }}>
          Edit Contact
        </button>
      </form>
    </div>,
    overlay
  );
};
