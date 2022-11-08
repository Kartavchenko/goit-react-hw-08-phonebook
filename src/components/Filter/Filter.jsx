import { selectStatusFilter } from 'redax/selectors';
import { useSelector, useDispatch } from 'react-redux';
import { filterContacts } from 'redax/filterSlise';
import AccountCircle from '@mui/icons-material/AccountCircle';
import { Box, TextField, InputAdornment } from '@mui/material';

function Filter() {
  const dispatch = useDispatch();
  const contactsFilter = useSelector(selectStatusFilter);

  const handleFilter = e => {
    const search = e.target.value;
    dispatch(filterContacts(search));
  };
  return (
    <Box sx={{ width: '250px' }}>
      <TextField
        type="text"
        name="search"
        margin="normal"
        fullWidth
        size="small"
        label="Seacr Contact"
        value={contactsFilter}
        onChange={handleFilter}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <AccountCircle color="primary" />
            </InputAdornment>
          ),
        }}
      >
        <AccountCircle />
        Find contact by name
      </TextField>
    </Box>
  );
}

export default Filter;
