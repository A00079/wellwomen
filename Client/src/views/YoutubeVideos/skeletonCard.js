import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Skeleton from '@material-ui/lab/Skeleton';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import * as Scroll from 'react-scroll';
let DirectLinkDiv = Scroll.Link;
const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        marginTop: '8rem'
    },
    card: {
        margin: '0rem 8rem',
        [theme.breakpoints.down("sm")]: {
            margin: '0rem 1rem'
        }
        // margin: theme.spacing(2),
    },
    smallCardSkeleton: {
        maxWidth: '25%',
        flexBasis: '0%',
        [theme.breakpoints.down("sm")]: {
            maxWidth: '100%',
            flexBasis: '0%',
        }
    },
    media: {
        height: 190,
    },
}));

function Media(props) {
    const { loading = false } = props;
    const classes = useStyles();

    return (
        <div className={classes.root} id='skeletonframe'>
            <Grid container
                container
                direction="row"
                justify="center"
                alignItems="center"
                spacing={3}>
                <Grid item xs={12} md={12} lg={12}>
                    <Card className={classes.card}>
                        <CardHeader
                            avatar={
                                loading ? (
                                    <Skeleton animation="wave" variant="circle" width={40} height={40} />
                                ) : (
                                        <Avatar
                                            alt="Ted talk"
                                            src="https://pbs.twimg.com/profile_images/877631054525472768/Xp5FAPD5_reasonably_small.jpg"
                                        />
                                    )
                            }
                            action={
                                loading ? null : (
                                    <IconButton aria-label="settings">
                                        <MoreVertIcon />
                                    </IconButton>
                                )
                            }
                            title={
                                loading ? (
                                    <Skeleton animation="wave" height={10} width="80%" style={{ marginBottom: 6 }} />
                                ) : (
                                        'Ted'
                                    )
                            }
                            subheader={loading ? <Skeleton animation="wave" height={10} width="40%" /> : '5 hours ago'}
                        />
                        {loading ? (
                            <Skeleton animation="wave" variant="rect" className={classes.media} />
                        ) : (
                                <CardMedia
                                    className={classes.media}
                                    image="https://pi.tedcdn.com/r/talkstar-photos.s3.amazonaws.com/uploads/72bda89f-9bbf-4685-910a-2f151c4f3a8a/NicolaSturgeon_2019T-embed.jpg?w=512"
                                    title="Ted talk"
                                />
                            )}

                        <CardContent>
                            {loading ? (
                                <React.Fragment>
                                    <Skeleton animation="wave" height={10} style={{ marginBottom: 6 }} />
                                    <Skeleton animation="wave" height={10} width="80%" />
                                </React.Fragment>
                            ) : (
                                    <Typography variant="body2" color="textSecondary" component="p">
                                        {
                                            "Why First Minister of Scotland Nicola Sturgeon thinks GDP is the wrong measure of a country's success:"
                                        }
                                    </Typography>
                                )}
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} md={3} lg={3} className={classes.smallCardSkeleton}>
                    <Box width={210} marginRight={0.5} my={5}>
                        <Skeleton variant="rect" width={210} height={118} />
                        <Box pt={0.5}>
                            <Skeleton />
                            <Skeleton width="60%" />
                        </Box>
                    </Box>
                </Grid>
                <Grid item xs={12} md={3} lg={3} className={classes.smallCardSkeleton}>
                    <Box width={210} marginRight={0.5} my={5}>
                        <Skeleton variant="rect" width={210} height={118} />
                        <Box pt={0.5}>
                            <Skeleton />
                            <Skeleton width="60%" />
                        </Box>
                    </Box>

                </Grid>
                <Grid item xs={12} md={3} lg={3} className={classes.smallCardSkeleton}>
                    <Box width={210} marginRight={0.5} my={5}>
                        <Skeleton variant="rect" width={210} height={118} />
                        <Box pt={0.5}>
                            <Skeleton />
                            <Skeleton width="60%" />
                        </Box>
                    </Box>
                </Grid>
                <DirectLinkDiv
                    to="skeletonframe"
                    spy={true}
                    smooth={true}
                    offset={50}
                    duration={500}
                >
                    <Grid item xs={12} md={3} lg={3} className={classes.smallCardSkeleton}>
                        <Box width={210} marginRight={0.5} my={5}>
                            <Skeleton variant="rect" width={210} height={118} />
                            <Box pt={0.5}>
                                <Skeleton />
                                <Skeleton width="60%" />
                            </Box>
                        </Box>
                    </Grid>
                </DirectLinkDiv>
            </Grid>
        </div>
    );
}

Media.propTypes = {
    loading: PropTypes.bool,
};

export default function Facebook() {
    return (
        <div>
            <Media loading />
        </div>
    );
}
