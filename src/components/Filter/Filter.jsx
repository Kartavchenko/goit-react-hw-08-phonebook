import { selectStatusFilter } from 'redax/selectors';
import { useSelector, useDispatch } from 'react-redux';
import { filterContacts } from 'redax/filterSlise';
import PersonSearchIcon from '@mui/icons-material/PersonSearch';
import { Box, InputAdornment } from '@mui/material';
import { SearchField } from './Filter.styled';

function Filter() {
  const dispatch = useDispatch();
  const contactsFilter = useSelector(selectStatusFilter);

  const handleFilter = e => {
    const search = e.target.value;
    dispatch(filterContacts(search));
  };
  return (
    <Box sx={{ width: '250px' }}>
      <SearchField
        type="text"
        name="search"
        margin="normal"
        fullWidth
        size="small"
        label="Seacr Contact"
        color="secondary"
        value={contactsFilter}
        onChange={handleFilter}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <PersonSearchIcon color="primary" />
            </InputAdornment>
          ),
        }}
      ></SearchField>
    </Box>
  );
}

export default Filter;
