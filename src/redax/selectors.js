export const selectUserData = ({user}) => user.body

export const selectModalContact = ({ modal }) => modal.editContact;

export const selectModalOpen = ({ modal }) => modal.isOpen;

export const selectIsLoggedIn = ({ user }) => user.isLoggedIn;

export const selectStatusFilter = ({ filter }) => filter;

export const getState = ({ contacts }) => ({ loading: contacts.loading, error: contacts.error });

export const getContacts = ({ contacts }) => contacts.items;

export const selectFilteredContacts = ({ contacts, search }) => {
    if (!search) {
        return contacts.items
    }
    const lowerCase = search.toLowerCase();
    const filterUser = contacts.items.filter(({ name, number }) => {
        const normalizeName = name.toLowerCase();
        const normalizeNamber = number.toLowerCase();
      const result =
        normalizeName.includes(lowerCase) ||
        normalizeNamber.includes(lowerCase);
      return result;
    });
    return filterUser;
  };