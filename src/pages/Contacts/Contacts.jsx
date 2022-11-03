import FormContact from 'components/Form/Form';
import Filter from 'components/Filter/Filter';
import ListContacts from 'components/List/List';
import { ModalEdit } from 'components/Modal/ModalEdit';

const Contacts = () => {
  return (
    <>
      <FormContact />
      <Filter />
      <ListContacts />
      <ModalEdit />
    </>
  );
};

export default Contacts;
