import PropTypes from 'prop-types';
import { Box, Button } from '@mantine/core';
import { useSelector } from 'react-redux';

export const ContactList = ({ deleteUser }) => {
  const contacts = useSelector(state => state.contacts.contacts);
  const filterValue = useSelector(state => state.filter.filter);

  return (
    <>
      <ul>
        {contacts
          .filter(contact =>
            contact.name
              .trim()
              .toLowerCase()
              .includes(filterValue.trim().toLowerCase())
          )
          .map(contact => (
            <li key={contact.id}>
              <Box
                sx={theme => ({
                  backgroundColor:
                    theme.colorScheme === 'dark'
                      ? theme.colors.dark[6]
                      : theme.colors.gray[0],
                  textAlign: 'center',
                  padding: theme.spacing.xl,
                  borderRadius: theme.radius.md,
                  cursor: 'pointer',

                  '&:hover': {
                    backgroundColor:
                      theme.colorScheme === 'dark'
                        ? theme.colors.dark[5]
                        : theme.colors.gray[1],
                  },
                })}
              >
                <div>
                  {contact.name}: {contact.number}
                </div>
                <Button onClick={() => deleteUser(contact.id)}>Delete</Button>
              </Box>
            </li>
          ))}
      </ul>
    </>
  );
};

ContactList.propTypes = {
  filter: PropTypes.string,
  deleteUser: PropTypes.func.isRequired,
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};
