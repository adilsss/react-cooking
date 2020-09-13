import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import debounce from 'lodash.debounce';

import { getRecipesRequest } from '../../store/actions/recipesActions';
import { Container, Input, Icon } from './Search-styles';
import { useHistory } from 'react-router-dom';

export const Search = () => {
  const [inputValue, setInputValue] = useState('');

  const { push, location } = useHistory();

  const dispatch = useDispatch();

  const getRecipes = debounce(() => {
    if (inputValue) {
      dispatch(getRecipesRequest(inputValue));
      setInputValue('');
      push('/');
    }
  }, 500);

  const handleSearchChange = debounce(({ target: { value } }) => {
    setInputValue(value);

    if (location.pathname === '/') {
      dispatch(getRecipesRequest(inputValue));
    }
  }, 500);

  const handleEnter = ({ key }) => {
    if (key === 'Enter') {
      getRecipes();
    }
  };

  return (
    <Container>
      <Icon onClick={getRecipes} />
      <Input
        placeholder='Search…'
        onChange={e => {
          e.persist();
          handleSearchChange(e);
        }}
        onKeyPress={handleEnter}
      />
    </Container>
  );
};
