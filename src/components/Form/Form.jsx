import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { Outlet } from 'react-router-dom';
import { addContact } from 'redax/operation';
import { selectFilteredContacts } from 'redax/selectors';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import PhoneIcon from '@mui/icons-material/Phone';
import PersonIcon from '@mui/icons-material/Person';
import { Button, Box, TextField, InputAdornment } from '@mui/material';

const FormContact = () => {
  const dispatch = useDispatch();
  const items = useSelector(selectFilteredContacts);

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    const {
      elements: { name, number },
    } = e.target;
    const nameUser = items.find(
      item => item.name === name.value ?? item.number === number.value
    );
    if (nameUser) {
      return alert(`${nameUser.name} alredy have`);
    }
    dispatch(
      addContact({
        name: name.value,
        number: number.value,
      })
    );
    form.reset();
  };

  return (
    <Box sx={{ width: '250px' }}>
      <form onSubmit={handleSubmit}>
        <TextField
          required
          name="name"
          label="Name"
          fullWidth
          variant="outlined"
          size="small"
          sx={{ mt: 2 }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <PersonIcon color="primary" />
              </InputAdornment>
            ),
            type: 'text',
            name: 'name',
            pattern:
              "^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$",
            title:
              "Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",
          }}
        >
          Name
        </TextField>
        <TextField
          type="tel"
          required
          name="number"
          label="Number"
          fullWidth
          variant="outlined"
          size="small"
          sx={{ mt: 2 }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <PhoneIcon color="primary" />
              </InputAdornment>
            ),
            type: 'tel',
            name: 'number',
            pattern:
              '+?d{1,4}?[-.s]?(?d{1,3}?)?[-.s]?d{1,4}[-.s]?d{1,4}[-.s]?d{1,9}',
            title:
              'Phone number must be digits and can contain spaces, dashes, parentheses and can start with +',
          }}
        >
          Number
        </TextField>
        <Button
          size="small"
          color="primary"
          startIcon={<AddCircleOutlineIcon />}
          variant="contained"
          type="submit"
          sx={{ mt: 2 }}
        >
          Add Contact
        </Button>
      </form>
      <Outlet />
    </Box>
  );
};

FormContact.propTypes = {
  lable: PropTypes.string,
};

export default FormContact;
