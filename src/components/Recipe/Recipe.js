import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';

import { getRecipeRequest } from '../../store/actions/recipeActions';
import { Loader } from '../Loader/Loader';
import { Paragraph, Image, Heading, Title } from './Recipe-styles';
import { Ingredients } from '../Ingredients/Ingredients';
import { CookingInfo } from '../CookingInfo/CookingInfo';

export const Recipe = () => {
  const recipe = useSelector(state => state.recipe.item);

  const isLoading = useSelector(state => state.recipe.isLoading);

  const dispatch = useDispatch();

  const { id } = useParams();

  useEffect(() => {
    dispatch(getRecipeRequest(id));
  }, [dispatch, id]);

  const removeTags = text => {
    if (text) {
      return text.replace(/<.*?>/g, '');
    }
  };

  return (
    <article>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <Image src={recipe.image}>
            <Title>{recipe.title}</Title>
          </Image>
          <CookingInfo recipe={recipe} />
          <Heading>About</Heading>
          <Paragraph>{removeTags(recipe.summary)}</Paragraph>
          <Heading>Ingredients</Heading>
          <Ingredients />
          <Heading>How to cook</Heading>
          <Paragraph>{removeTags(recipe.instructions)}</Paragraph>
        </>
      )}
    </article>
  );
};
