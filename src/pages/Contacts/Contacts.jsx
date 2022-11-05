import FormContact from 'components/Form/Form';
import Filter from 'components/Filter/Filter';
import ListContacts from 'components/List/List';
import { useSelector } from 'react-redux';
import { selectModalOpen, selectModalContact } from 'redax/selectors';
import { ModalEdit } from 'components/Modal/ModalEdit';

const Contacts = () => {
  const closeModal = useSelector(selectModalOpen);
  const openModal = useSelector(selectModalContact);

  return (
    <>
      <FormContact />
      <Filter />
      <ListContacts />
      {openModal ? <ModalEdit /> : closeModal}
    </>
  );
};

export default Contacts;
