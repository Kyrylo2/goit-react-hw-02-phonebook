import React from 'react';
// import styled from '@emotion/styled';
import PropTypes from 'prop-types';

import Divider from '@mui/material/Divider';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import { styled } from '@mui/material/styles';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const ContactList = ({ contacts, onDelete }) => {
  return (
    <Stack
      direction="column"
      divider={<Divider orientation="horizontal" flexItem />}
      spacing={1}
      sx={{ alignItems: 'center' }}
    >
      {contacts.map(({ name, number, id }) => {
        return (
          <Item
            sx={{ width: 'fit-content', display: 'flex', gap: '20px' }}
            key={id}
          >
            <p>
              ✅ {name} {number}
            </p>
            <Button
              variant="contained"
              size="small"
              onClick={() => onDelete(id)}
              color="error"
              startIcon={<DeleteIcon />}
            >
              Delete
            </Button>
          </Item>
        );
      })}
    </Stack>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.exact({
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    })
  ),
  onDelete: PropTypes.func.isRequired,
};

export default ContactList;
