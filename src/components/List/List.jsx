import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { removeContact, fetchContacts } from 'redax/operation';
import { editContact } from 'redax/modalSlice';
import { selectFilteredContacts, selectModalContact } from 'redax/selectors';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import Grid2 from '@mui/material/Unstable_Grid2';
import { Typography, Box, Button } from '@mui/material';

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

  const contact = items.map(({ id, name, number }) => {
    return (
      <Grid2
        component="li"
        key={id}
        flexGrow={2}
        container
        rowSpacing={3}
        spacing={2}
        sx={{
          listStyle: 'none',
          alignItems: 'center',
        }}
      >
        <Grid2>
          <Button
            size="small"
            variant="outlined"
            startIcon={<DeleteIcon />}
            type="button"
            onClick={() => deleteContact(id)}
          >
            <Typography variant="caption">Delete</Typography>
          </Button>
        </Grid2>
        <Grid2>
          <Button
            size="small"
            variant="outlined"
            startIcon={<EditIcon />}
            type="button"
            onClick={() => editContactData(id)}
          >
            <Typography variant="caption">Edit</Typography>
          </Button>
        </Grid2>
        <Grid2>
          <Typography
            variant="subtitle1"
            sx={{ display: 'flex', alignItems: 'center' }}
          >
            <AccountBoxIcon color="primary" />
            {name}:
          </Typography>
        </Grid2>
        <Grid2>
          <Typography
            variant="subtitle1"
            sx={{ display: 'flex', alignItems: 'center' }}
          >
            <PhoneInTalkIcon color="primary" />
            {number}
          </Typography>
        </Grid2>
      </Grid2>
    );
  });

  return (
    <Box component="ul" sx={{ p: 0, mt: 1 }}>
      {items.length < 1 && (
        <Typography variant="h6" sx={{ ml: 5 }}>
          Haven't any contact...
        </Typography>
      )}{' '}
      {contact}
    </Box>
  );
};

export default ListContacts;

ListContacts.propTypes = {
  arrayContacts: PropTypes.array,
  button: PropTypes.element,
};
