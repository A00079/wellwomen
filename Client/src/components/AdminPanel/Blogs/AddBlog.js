import React, { useState, useRef } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import BlogsREST from '../../../REST/Blogs.js';
import Input from '@material-ui/core/Input';
import FilledInput from '@material-ui/core/FilledInput';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import { Alert, AlertTitle } from '@material-ui/lab';
import Compress from "browser-image-compression";
import Tooltip from '@material-ui/core/Tooltip';
import Spinner from '../../Spinner/Spinner.js';

import axios from 'axios';

const useStyles = makeStyles((theme) => ({
    alertroot: {
        width: '100%',
        '& > * + *': {
            marginTop: theme.spacing(2),
        },
    },
    paper: {
        marginTop: theme.spacing(4),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(3),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    }
}));

export default function SignUp() {
    const classes = useStyles();
    const [postDiscription, setDiscription] = useState('');
    const [postTitle, setpostTitle] = useState('');
    const [postShortDiscription, setpostName] = useState('');
    const [postAnyTags, setpostAnyTags] = useState('');
    const [postYoutubelink, setpostYoutubelink] = useState('');
    const [isdisable, setisdisable] = useState(true);
    const [image, setImage] = React.useState("");
    const [imagePreview, setImagePreview] = React.useState("");
    const [postingBlog, setpostingBlog] = React.useState(false);


    const handlePostDiscription = (e) => {
        if (e.target.value) {
            console.log('Announcement', e.target.value)
            setisdisable(false)
        }
        setDiscription(e.target.value)
    }
    const handlePostTitle = (e) => {
        console.log('Announcement Title', e.target.value)
        setpostTitle(e.target.value)
    }
    const handlePostYoutubelink = (e) => {
        console.log('Announcement Title', e.target.value)
        setpostYoutubelink(e.target.value)
    }
    const handlePostAnyTags = (e) => {
        console.log('Announcement Title', e.target.value)
        setpostAnyTags(e.target.value)
    }
    const handlePostName = (e) => {
        console.log('Announcement Name', e.target.value)
        setpostName(e.target.value)
    }
    const PostAnnouncement = () => {
        setpostingBlog(true)
        let api_url = "api/admin/postBlog/create";
        var formData = new FormData();

        formData.append('Title', postTitle);
        formData.append("ShortDiscription", postShortDiscription);
        formData.append("AnyTags", postAnyTags);
        formData.append("Youtubelink", postYoutubelink);
        formData.append("Discription", postDiscription);
        formData.append("image", image);
        formData.append("imageurl", '');
        formData.append("Date", new Date());

        if (postDiscription !== '' && postTitle !== '') {

            // const headers = {
            //     "Content-Type": "application/json"
            // };
            axios.post(api_url, formData)
                .then((res) => {
                    document.getElementById('Title').value = '';
                    document.getElementById('ShortDiscription').value = '';
                    document.getElementById('AnyTag').value = '';
                    document.getElementById('YoutubeLink').value = '';
                    document.getElementById('Discription').value = '';
                    document.getElementById('input').value = '';
                    setImagePreview('');

                    setpostingBlog(false)
                    console.log('response', res)
                })
                .catch((err) => {
                    console.error('Post Error:', err)
                })
        } else {
            setisdisable(true)
        }
    }

    const onFileChange = (event) => {
        const file = event.target.files[0];
        const reader = new FileReader();
        reader.onload = () => {
            if (reader.readyState === 2) {
                setImagePreview(reader.result);
            }
        };
        if (file) {
            reader.readAsDataURL(event.target.files[0]);
        }

        const options = {
            maxSizeMB: 1.5,
            maxWidthOrHeight: 420,
            useWebWorker: true,
        };

        Compress(file, options)
            .then((compressedBlob) => {
                compressedBlob.lastModifiedDate = new Date();
                // Convert the blob to file
                const convertedBlobFile = new File([compressedBlob], file.name, {
                    type: file.type,
                    lastModified: Date.now(),
                });
                setImage(convertedBlobFile);
            })
            .catch((e) => {
                console.log(e);
            });
    };


    return (
        <Container component="main" maxWidth="xs" className="mt-16 md:mt-24">
            <Alert severity="warning" className="mr-8 md:mr-0 lg:mr-0">
                <AlertTitle>Warning</AlertTitle>
                    Please recheck your post — <strong>Once posted can be viewed by Users!</strong>
            </Alert>
            <CssBaseline />
            <div className={classes.paper}>

                <Typography component="h1" variant="h5">
                    Post Blog
                    </Typography>
                <form className={classes.form} noValidate>
                    <Grid container spacing={2}>
                        <Grid item xs={11} md={6} sm={6} lg={6}>
                            <TextField
                                onChange={e => handlePostTitle(e)}
                                autoComplete="Title"
                                name="Title"
                                variant="outlined"
                                fullWidth
                                id="Title"
                                label="Title"
                                autoFocus
                            />
                        </Grid>
                        <Grid item xs={11} md={6} sm={6} lg={6}>
                            <TextField
                                onChange={e => handlePostName(e)}
                                autoComplete="ShortDiscription"
                                name="ShortDiscription"
                                variant="outlined"
                                fullWidth
                                id="ShortDiscription"
                                label="Short Discription"
                                autoFocus
                            />
                            {/* <FormControl
                            id='Name'
                            onChange={e=>handleAnnounceName(e)}
                            fullWidth className={classes.margin} variant="outlined">
                                <InputLabel
                                
                                 htmlFor="outlined-adornment-amount"
                                 >Short Discription</InputLabel>
                                <OutlinedInput
                                    id="outlined-adornment-amount"
                                    labelWidth={60}
                                />
                            </FormControl> */}
                        </Grid>
                        <Grid item xs={11} md={6} sm={6} lg={6}>
                            <TextField
                                onChange={e => handlePostAnyTags(e)}
                                autoComplete="AnyTag"
                                name="AnyTag"
                                variant="outlined"
                                fullWidth
                                id="AnyTag"
                                label="Any Tag"
                                autoFocus
                            />
                        </Grid>
                        <Grid item xs={11} md={6} sm={6} lg={6}>
                            <TextField
                                onChange={e => handlePostYoutubelink(e)}
                                autoComplete="YoutubeLink"
                                name="YoutubeLink"
                                variant="outlined"
                                fullWidth
                                id="YoutubeLink"
                                label="Youtube Link"
                                autoFocus
                            />
                        </Grid>
                        <Grid item xs={11}  md={12} lg={12}>
                            <TextField
                                onChange={e => handlePostDiscription(e)}
                                id="Discription"
                                label="Discription"
                                required
                                multiline
                                rows={4}
                                fullWidth
                                name="Discription"
                                defaultValue=""
                                variant="outlined"
                                autoComplete="Discription"
                            />
                        </Grid>
                        <Grid item xs={11} md={12} lg={12}>
                            <h6>Preview</h6>
                            <img width='400px' height='300px' src={imagePreview} />
                        </Grid>
                        <Grid item xs={11} md={12} lg={12}>
                            <Button
                                variant="contained"
                                component="label"
                                color="primary"
                                fullWidth
                            >
                                Upload File
                                <input
                                    name="myImage"
                                    id="input"
                                    onChange={onFileChange}
                                    type="file"
                                    style={{ display: "none" }}
                                />
                            </Button>
                        </Grid>
                    </Grid> 

                    <Grid item xs={11} md={12} lg={12}>
                        <Button
                            disabled={isdisable}
                            onClick={() => PostAnnouncement()}
                            fullWidth
                            variant="contained"
                            color="primary"
                            className={classes.submit}
                        >
                            {
                                postingBlog ? <Spinner size='lg' spinning='spinning' /> :
                                    'Create Blog'
                            }
                        </Button>
                    </Grid>

                </form>
            </div>
            {/* <Box mt={5}>
                    <Copyright />
                </Box> */}
        </Container>
    );
}