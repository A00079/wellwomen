import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import {
  Avatar,
  Box,
  Card,
  CardContent,
  Grid,
  LinearProgress,
  Typography,
  makeStyles,
  colors
} from '@material-ui/core';
import InsertChartIcon from '@material-ui/icons/InsertChartOutlined';
import BurstModeIcon from '@material-ui/icons/BurstMode';

const useStyles = makeStyles(() => ({
  root: {
    // height: '100%'
  },
  avatar: {
    backgroundColor: colors.orange[600],
    height: 40,
    width: 40
  }
}));

const TasksProgress = (props) => {
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
              {/* <BurstModeIcon /> */}
              {props.postCount}
            </Typography>
          </Grid>
          <Grid item>
            <Avatar className={classes.avatar}>
              <InsertChartIcon />
            </Avatar>
          </Grid>
        </Grid>
        <Box mt={3}>
          <LinearProgress
            value={props.postCount}
            variant="determinate"
          />
        </Box>
      </CardContent>
    </Card>
  );
};

TasksProgress.propTypes = {
  className: PropTypes.string
};

export default TasksProgress;
