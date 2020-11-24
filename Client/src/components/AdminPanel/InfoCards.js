import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import {
  Avatar,
  Box,
  Card,
  CardContent,
  LinearProgress,
  Grid,
  Typography,
  colors,
  makeStyles
} from '@material-ui/core';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import MoneyIcon from '@material-ui/icons/Money';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';

const useStyles = makeStyles((theme) => ({
  root: {
    // height: '100%'
  },
  avatar: {
    backgroundColor: colors.red[600],
    height: 40,
    width: 40
  },
  differenceIcon: {
    color: colors.red[900]
  },
  differenceValue: {
    color: colors.red[900],
    marginRight: theme.spacing(1)
  }
}));

const InfoCard = (props) => {
  const classes = useStyles();

  return (
    <Card
      className={clsx(classes.root)}
    >
      <CardContent>
        <Grid
          style={{marginBottom: '-24px'}}
          container
          justify="space-between"
          spacing={3}
        >
          <Grid item>
            <Typography
              style={{fontFamily: 'Paytone One'}}
              color="textSecondary"
              gutterBottom
              variant="subtitle2"
            >
              {props.cardtitle}
            </Typography>
            <Typography
              style={{fontFamily: 'Paytone One'}}
              color="textPrimary"
              variant="subtitle2"
            >
              {/* <PeopleAltIcon /> */}
              {props.userCount}
            </Typography>
          </Grid>
          <Grid item>
            <Avatar className={classes.avatar}>
              <MoneyIcon />
            </Avatar>
          </Grid>
        </Grid>
        <Box mt={3}>
          <LinearProgress
            value={props.userCount}
            variant="determinate"
          />
        </Box>
        {/* <Box
          mt={2}
          display="flex"
          alignItems="center"
        >
          <ArrowDownwardIcon className={classes.differenceIcon} />
          <Typography
            className={classes.differenceValue}
            variant="body2"
          >
            12%
          </Typography>
          <Typography
            color="textSecondary"
            variant="caption"
          >
            Since last month
          </Typography>
        </Box> */}
      </CardContent>
    </Card>
  );
};

InfoCard.propTypes = {
  className: PropTypes.string
};

export default InfoCard;
