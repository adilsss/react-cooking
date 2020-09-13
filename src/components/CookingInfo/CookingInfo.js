import React from 'react';
import TimerIcon from '@material-ui/icons/Timer';
import RestaurantIcon from '@material-ui/icons/Restaurant';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';

export const CookingInfo = ({ recipe }) => {
  const useStyles = makeStyles(theme => ({
    cookingInfo: {
      display: 'flex',
      justifyContent: 'center',
      flexDirection: 'row'
    },
    cookingInfoIcon: {
      display: 'flex',
      justifyContent: 'center',
      marginRight: 10,
      marginTop: 25,
      '& > *': {
        marginRight: 5
      }
    }
  }));

  const classes = useStyles();

  const calcTime = time => {
    if (time > 60) {
      const minutes = time % 60;
      const hours = (time - minutes) / 60;

      return `${hours} hour(s) ${minutes} minute(s)`;
    }
    return `${time} minute(s)`;
  };

  return (
    <div className={classes.cookingInfo}>
      <div className={classes.cookingInfoIcon}>
        <TimerIcon />
        <Typography>{calcTime(recipe.readyInMinutes)}</Typography>
      </div>
      <div className={classes.cookingInfoIcon}>
        <RestaurantIcon />
        <Typography>{recipe.servings}</Typography>
      </div>
    </div>
  );
};
