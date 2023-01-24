import FormContact from 'components/Form/Form';
import Filter from 'components/Filter/Filter';
import ListContacts from 'components/List/List';
import { useSelector } from 'react-redux';
import { selectModalOpen, selectModalContact, getState } from 'redax/selectors';
import { ModalEdit } from 'components/Modal/ModalEdit';
import { Typography } from '@mui/material';
import { MyBox } from './Contacts.styled';

const Contacts = () => {
  const closeModal = useSelector(selectModalOpen);
  const openModal = useSelector(selectModalContact);
  const { loading } = useSelector(getState);

  return (
    <MyBox sx={{ flexGrow: 1 }}>
      <Typography component="h2" variant="h5">
        Add Contact
      </Typography>
      <FormContact />
      <Filter />
      <Typography component="h2" variant="h5" sx={{ ml: 5 }}>
        Contacts
      </Typography>
      <ListContacts />
      {!openModal
        ? loading && (
            <Typography variant="h6" sx={{ ml: 5 }}>
              ...Loading
            </Typography>
          )
        : null}
      {openModal ? <ModalEdit /> : closeModal}
    </MyBox>
  );
};

export default Contacts;
