import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';
import Blogs from '../../../REST/Blogs.js';

import DeleteOutlinedIcon from '@material-ui/icons/DeleteOutlined';
import EditIcon from '@material-ui/icons/Edit';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Grid from '@material-ui/core/Grid';
import FormControl from '@material-ui/core/FormControl';
import InputAdornment from '@material-ui/core/InputAdornment';
import InputLabel from '@material-ui/core/InputLabel';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import { Alert, AlertTitle } from '@material-ui/lab';
import Compress from "browser-image-compression";
import Tooltip from '@material-ui/core/Tooltip';
import Spinner from '../../Spinner/Spinner.js';
import axios from 'axios';

const useStyles = makeStyles((theme) => ({
  container: {
    maxHeight: 400,
    [theme.breakpoints.down('sm')]: {
      maxHeight: 600,
    }
  },
  tableRow: {
    cursor: 'pointer',
    "&:hover": {
      boxShadow: '0 1px 4px rgba(0, 0, 0, 0.3), 0 0 40px rgba(0, 0, 0, 0.1) inset',
      boxShadow: '0 1px 4px rgba(0, 0, 0, 0.3), 0 0 40px rgba(0, 0, 0, 0.1) inset',
      boxShadow: '0 1px 4px rgba(0, 0, 0, 0.3), 0 0 40px rgba(0, 0, 0, 0.1) inset'
    }
  },
  txt_elip: {
    width: '100px',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis'
  },
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: '#fff',
  }
}));

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
];

export default function AcccessibleTable() {
  const classes = useStyles();
  const [getBlogs, setBloga] = useState([]);
  const [EditBlog, setEditBlog] = useState([]);

  const [open, setOpen] = React.useState(false);
  const [postDiscription, setDiscription] = useState('');
  const [postTitle, setpostTitle] = useState('');
  const [postShortDiscription, setpostName] = useState('');
  const [postAnyTags, setpostAnyTags] = useState('');
  const [postYoutubelink, setpostYoutubelink] = useState('');
  const [isdisable, setisdisable] = useState(true);
  const [openModal, setOpenModal] = React.useState(false);
  const [image, setImage] = React.useState("");
  const [imagePreview, setImagePreview] = React.useState("");
  const [imageUrl, setimageUrl] = React.useState("");
  const [postingBlog, setpostingBlog] = React.useState(false);



  useEffect(() => {
    console.log('View all Announcements')
    fetchBlogs();
  }, [])
  const fetchBlogs = () => {
    setOpen(!open)
    let api_url = "api/admin/getBlog/read";
    Blogs
      .getBlogList(api_url)
      .then((res) => {
        setBloga(res.data)
        console.log('All Announcements', res)
        setOpen(false)
      })
  }

  const handleClose = () => {
    setOpenModal(false);
  };
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

  const editBlogpost = (editData) => {
    setOpenModal(true)
    console.log('Edit Data', editData);
    setEditBlog(editData)
  }
  const deleteConfirmation = (Post_id) => {
    let flag = window.confirm("Are you sure you want to delete this post.");
    if (flag) {
      deleteBlogpost(Post_id)
    }
  }

  const deleteBlogpost = (Post_id) => {
    setOpen(!open)
    let api_url = 'api/admin/deleteBlog/delete';
    let data = {
      'id': Post_id.toString()
    }
    Blogs
      .deleteBlog(api_url, data)
      .then(response => {
        console.log("Response Data...", response);
        fetchBlogs();
        setOpen(false);
      });
    console.log('Annonce_id', Post_id)
  }

  const PostAnnouncement = () => {
    setpostingBlog(true)
    let api_url = "api/admin/updateBlog/modify";

    var formData = new FormData();

    formData.append('Title', (postTitle) ? postTitle : EditBlog.title);
    formData.append("ShortDiscription", (postShortDiscription) ? postShortDiscription : EditBlog.shortdiscription);
    formData.append("AnyTags", (postAnyTags) ? postAnyTags : EditBlog.anytag);
    formData.append("Youtubelink", (postYoutubelink) ? postYoutubelink : EditBlog.youtubelink);
    formData.append("Discription", (postDiscription) ? postDiscription : EditBlog.discription);
    formData.append("image", image);
    formData.append("imageUrl", EditBlog.imageurl);
    formData.append("Date", new Date());
    formData.append("id", EditBlog._id);


    !!postTitle ? setDiscription(EditBlog.title) : setDiscription(postTitle)
    !!postDiscription ? setDiscription(EditBlog.discription) : setDiscription(postDiscription)

    axios.post(api_url, formData)
      .then((res) => {
        console.log('response', res)
        console.log("Response Data...", res);
        document.getElementById('Title').value = '';
        document.getElementById('ShortDiscription').value = '';
        document.getElementById('AnyTag').value = '';
        document.getElementById('YoutubeLink').value = '';
        document.getElementById('Discription').value = '';
        document.getElementById('input').value = '';
        setImagePreview('');
        setpostingBlog(false);
        setOpenModal(false);
        fetchBlogs();
      })
      .catch((err) => {
        console.error('Post Error:', err)
      })
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
    <React.Fragment>
      <div className="md:mt-16">
        <Alert severity="warning">
          <AlertTitle>Warning</AlertTitle>
          Notice — <strong>Once post deleted cannot be restored!</strong>
        </Alert>
      </div>
      <TableContainer className={classes.container} component={Paper}>
        <Table stickyHeader className={classes.table} aria-label="caption table">
          <TableHead>
            <TableRow>
              <TableCell>Sr.no</TableCell>
              <TableCell>Image</TableCell>
              <TableCell>Title</TableCell>
              <TableCell>Tag</TableCell>
              <TableCell>Short Discription</TableCell>
              <TableCell align="left">Discription</TableCell>
              <TableCell align="left">Youtube Link</TableCell>
              <TableCell align="left">Date</TableCell>
              <TableCell align="left">Action</TableCell>
              <TableCell align="left"></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {getBlogs.map((row, index) => (
              <TableRow key={row._id}>
                <TableCell align="left">{index + 1}</TableCell>
                <TableCell align="left">{!!row.imageurl ? <img src={row.imageurl} width='40px' /> : <span>Not Availble</span>}</TableCell>
                <Tooltip title={row.title} arrow><TableCell align="left"><p className={classes.txt_elip}>{row.title}</p></TableCell></Tooltip>
                <TableCell align="left">{row.anytag}</TableCell>
                <Tooltip title={row.shortdiscription} arrow><TableCell align="left"><p className={classes.txt_elip}>{row.shortdiscription}</p></TableCell></Tooltip>
                <Tooltip title={row.discription} arrow><TableCell align="left"><p className={classes.txt_elip}>{row.discription}</p></TableCell></Tooltip>
                <Tooltip title={row.youtubelink} arrow><TableCell align="left"><p className={classes.txt_elip}><span className='text-indigo-500'>{row.youtubelink}</span></p></TableCell></Tooltip>
                <TableCell align="left">{new Date(row.date).toDateString()}</TableCell>
                <TableCell title='Edit' className="cursor-pointer" style={{ color: 'blue' }} align="left"><EditIcon onClick={() => editBlogpost(row)} /></TableCell>
                <TableCell title='Delete' className="cursor-pointer" style={{ color: 'red' }} align="left"><DeleteOutlinedIcon onClick={() => deleteConfirmation(row._id)} /></TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <Backdrop className={classes.backdrop} open={open}>
          <CircularProgress color="inherit" />
        </Backdrop>
      </TableContainer>


      <Dialog open={openModal} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Update Blog</DialogTitle>
        <DialogContent>
          <form className={classes.form} noValidate>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  onChange={e => handlePostTitle(e)}
                  autoComplete="Title"
                  name="Title"
                  variant="outlined"
                  fullWidth
                  id="Title"
                  label="Title"
                  autoFocus
                  defaultValue={(postTitle) ? postTitle : EditBlog.title}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  onChange={e => handlePostName(e)}
                  autoComplete="ShortDiscription"
                  name="ShortDiscription"
                  variant="outlined"
                  fullWidth
                  id="ShortDiscription"
                  label="Short Discription"
                  autoFocus
                  defaultValue={(postShortDiscription) ? postShortDiscription : EditBlog.shortdiscription}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  onChange={e => handlePostAnyTags(e)}
                  autoComplete="AnyTag"
                  name="AnyTag"
                  variant="outlined"
                  fullWidth
                  id="AnyTag"
                  label="Any Tag"
                  autoFocus
                  defaultValue={(postAnyTags) ? postAnyTags : EditBlog.anytag}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  onChange={e => handlePostYoutubelink(e)}
                  autoComplete="YoutubeLink"
                  name="YoutubeLink"
                  variant="outlined"
                  fullWidth
                  id="YoutubeLink"
                  label="Youtube Link"
                  autoFocus
                  defaultValue={(postYoutubelink) ? postYoutubelink : EditBlog.youtubelink}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  onChange={e => handlePostDiscription(e)}
                  id="Discription"
                  label="Discription"
                  required
                  multiline
                  rows={4}
                  fullWidth
                  name="Discription"
                  variant="outlined"
                  autoComplete="Discription"
                  defaultValue={(postDiscription) ? postDiscription : EditBlog.discription}
                />
              </Grid>
              <Grid item xs={12}>
                <h6>Preview</h6>
                {
                  !!imagePreview ? <img src={imagePreview} /> : <img src={EditBlog.imageurl} />
                }
              </Grid>
              <Grid item xs={12}>
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
          </form>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button
            onClick={() => PostAnnouncement()}
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            {
              postingBlog ? <Spinner size='lg' spinning='spinning' /> :
                'Update Blog'
            }
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
