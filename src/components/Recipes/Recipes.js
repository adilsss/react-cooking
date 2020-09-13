import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { getRecipesLoadMoreRequest } from '../../store/actions/recipesActions';
import { Loader } from '../Loader/Loader';
import { List } from '../List/List';

export const Recipes = () => {
  const {
    items: recipes,
    totalResults,
    isLoading,
    currentSearch,
    baseUri
  } = useSelector(state => state.recipes);

  const dispatch = useDispatch();

  const loadMoreItems = async () =>
    await dispatch(
      getRecipesLoadMoreRequest({
        value: currentSearch,
        offset: recipes.length
      })
    );

  const hasMoreItems = totalResults - recipes.length > 0;

  if (!recipes.length && isLoading) {
    return <Loader />;
  }

  if (!recipes.length) {
    return <h1>Start to search some recipes</h1>;
  }

  return (
    <List
      hasNextPage={hasMoreItems}
      isNextPageLoading={isLoading}
      items={recipes}
      loadNextPage={loadMoreItems}
      baseUri={baseUri}
    />
  );
};
