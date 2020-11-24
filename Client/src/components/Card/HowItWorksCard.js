import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import image1 from '../../assets/img/trans1.jpg';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '50%',
        margin: '0 auto',
        boxShadow: 'none',
        textAlign: 'center',
        [theme.breakpoints.down("sm")]: {
            width: '100%',
        }
    }
}));

export default function ImgMediaCard(props) {
    const classes = useStyles();

    return (
        <React.Fragment>
            {/* <Card className={classes.root}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        alt="Contemplative Reptile"
                        height="140"
                        image={image1}
                        title="Contemplative Reptile"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            Lizard
          </Typography>
                        <Typography variant="subtitle1" color="textSecondary" component="p">
                            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                            across all continents except Antarctica
          </Typography>
                    </CardContent>
                </CardActionArea>
            </Card> */}

            <section class="text-gray-700 body-font">
                <div class="container mx-auto flex flex-col px-5 py-0 justify-center items-center">
                    <img style={{width:'30rem'}} class="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded" alt="hero" src={props.image} />
                    {/* <div class="w-full md:w-2/3 flex flex-col mb-6 items-center text-center">
                        <h1 class="title-font sm:text-4xl lg:text-2xl text-3xl mb-4 font-medium text-gray-900">Knausgaard typewriter readymade marfa</h1>
                        <p class="mb-0 leading-relaxed">Kickstarter biodiesel roof party wayfarers cold-pressed. Palo santo live-edge tumeric scenester copper mug flexitarian. Prism vice offal plaid everyday carry. Gluten-free chia VHS squid listicle artisan.</p>
                    </div> */}
                </div>
            </section>
        </React.Fragment>
    );
}