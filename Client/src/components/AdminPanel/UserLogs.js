import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
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

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',       
  },
  tableRow: {
    cursor:'pointer',
    "&:hover": {
      boxShadow:'0 1px 4px rgba(0, 0, 0, 0.3), 0 0 40px rgba(0, 0, 0, 0.1) inset',
      boxShadow:'0 1px 4px rgba(0, 0, 0, 0.3), 0 0 40px rgba(0, 0, 0, 0.1) inset',
      boxShadow:'0 1px 4px rgba(0, 0, 0, 0.3), 0 0 40px rgba(0, 0, 0, 0.1) inset'
    }
  },
  container: {
    maxHeight: 400,
    [theme.breakpoints.down('sm')]: {
      maxHeight: 800,
    }
  },
}));


export default function StickyHeadTable(props) {
  const classes = useStyles();

  React.useEffect(() => {
    console.log('table data',props.UserLogsDetails)
  },[props])

  return (
    <Paper className={classes.root}>
      <TableContainer className={classes.container}  component={Paper}>
        <Table stickyHeader className={classes.table} aria-label="caption table">
          <TableHead>
            <TableRow>
            <TableCell align="left">Sr.No</TableCell>
              <TableCell align="left">Name</TableCell>
              <TableCell align="left">Email</TableCell>
              <TableCell align="left">Date</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {
              (props.UserLogsDetails)?
                props.UserLogsDetails.map((row,index) => (
                  <TableRow key={row._id} className={classes.tableRow}>
                    <TableCell align="left">{index + 1}</TableCell>
                    <TableCell align="left">{row.name}</TableCell>
                    <TableCell align="left">{row.email}</TableCell>
                    <TableCell align="left">{new Date(row.date).toDateString()}</TableCell>
                  </TableRow>
                )) : ""
              } 
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
}
