import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import image1 from '../../../src/assets/img/bg4.jpg'

const useStyles = makeStyles((theme) => ({
  root: {
    width: '300px',
    [theme.breakpoints.down("sm")]: {
      width: '246px'
    }
  },
  media: {
    height: '19rem',
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

export default function RecipeReviewCard(props) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <React.Fragment>
    <Card className={classes.root} style={{ position: 'relative', left: '0' }}>
      <CardMedia
        className={classes.media}
        image={require('../../assets/img/trans1.jpg')}
        title="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          This impressive paella is a perfect party dish and a fun meal to cook together with your
          guests. Add 1 cup of frozen peas along with the mussels, if you like.
        </Typography>
      </CardContent>
    </Card>


    <Card className={classes.root} style={{ position: 'relative', left: '0' }}>
      <CardMedia
        className={classes.media}
        image={require('../../assets/img/trans2.jpg')}
        title="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          This impressive paella is a perfect party dish and a fun meal to cook together with your
          guests. Add 1 cup of frozen peas along with the mussels, if you like.
        </Typography>
      </CardContent>
    </Card>

    <Card className={classes.root} style={{ position: 'relative', left: '0' }}>
      <CardMedia
        className={classes.media}
        image={require('../../assets/img/trans3.jpg')}
        title="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          This impressive paella is a perfect party dish and a fun meal to cook together with your
          guests. Add 1 cup of frozen peas along with the mussels, if you like.
  </Typography>
      </CardContent>
    </Card>

    <Card className={classes.root} style={{ position: 'relative', left: '0' }}>
      <CardMedia
        className={classes.media}
        image={require('../../assets/img/trans4.jpg')}
        title="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          This impressive paella is a perfect party dish and a fun meal to cook together with your
          guests. Add 1 cup of frozen peas along with the mussels, if you like.
  </Typography>
      </CardContent>
    </Card>

    <Card className={classes.root} style={{ position: 'relative', left: '0' }}>
      <CardMedia
        className={classes.media}
        image={require('../../assets/img/trans5.jpg')}
        title="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          This impressive paella is a perfect party dish and a fun meal to cook together with your
          guests. Add 1 cup of frozen peas along with the mussels, if you like.
  </Typography>
      </CardContent>
    </Card>

    <Card className={classes.root} style={{ position: 'relative', left: '0' }}>
      <CardMedia
        className={classes.media}
        image={require('../../assets/img/trans6.jpg')}
        title="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          This impressive paella is a perfect party dish and a fun meal to cook together with your
          guests. Add 1 cup of frozen peas along with the mussels, if you like.
  </Typography>
      </CardContent>
    </Card>

    <Card className={classes.root} style={{ position: 'relative', left: '0' }}>
      <CardMedia
        className={classes.media}
        image={require('../../assets/img/trans7.jpg')}
        title="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          This impressive paella is a perfect party dish and a fun meal to cook together with your
          guests. Add 1 cup of frozen peas along with the mussels, if you like.
  </Typography>
      </CardContent>
    </Card>

    <Card className={classes.root} style={{ position: 'relative', left: '0' }}>
      <CardMedia
        className={classes.media}
        image={require('../../assets/img/trans8.jpg')}
        title="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          This impressive paella is a perfect party dish and a fun meal to cook together with your
          guests. Add 1 cup of frozen peas along with the mussels, if you like.
  </Typography>
      </CardContent>
    </Card>

    <Card className={classes.root} style={{ position: 'relative', left: '0' }}>
      <CardMedia
        className={classes.media}
        image={require('../../assets/img/trans9.jpg')}
        title="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          This impressive paella is a perfect party dish and a fun meal to cook together with your
          guests. Add 1 cup of frozen peas along with the mussels, if you like.
  </Typography>
      </CardContent>
    </Card>

    <Card className={classes.root} style={{ position: 'relative', left: '0' }}>
      <CardMedia
        className={classes.media}
        image={require('../../assets/img/trans10.jpg')}
        title="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          This impressive paella is a perfect party dish and a fun meal to cook together with your
          guests. Add 1 cup of frozen peas along with the mussels, if you like.
  </Typography>
      </CardContent>
    </Card>
    </React.Fragment>
  );
}
