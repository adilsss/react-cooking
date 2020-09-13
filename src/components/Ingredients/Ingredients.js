import React from 'react';
import { Avatar, ListItem, Typography } from '@material-ui/core';
import { Paragraph } from '../Recipe/Recipe-styles';
import { useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';

export const Ingredients = () => {
  const ings = useSelector(state => state.recipe.item.extendedIngredients);

  const useStyles = makeStyles(theme => ({
    large: {
      width: theme.spacing(7),
      height: theme.spacing(7),
      marginRight: 20
    }
  }));

  const classes = useStyles();

  return (
    <>
      {ings &&
        ings.map(i => (
          <ListItem key={i.id}>
            <Avatar
              className={classes.large}
              src={`https://spoonacular.com/cdn/ingredients_100x100/${i.image}`}
              alt={i.image}
            />
            <Typography>{i.name}</Typography>
          </ListItem>
        ))}
    </>
  );
};
