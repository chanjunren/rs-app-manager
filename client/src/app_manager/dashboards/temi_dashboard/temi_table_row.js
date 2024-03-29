import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';

import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import Chip from '@material-ui/core/Chip';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';

const useRowStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      borderBottom: 'unset',
    },
  },
  applicationsRoot: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(0.5),
    },
  },
  controlPanel: {
    float: 'right',
    padding: '0.2rem',
  },
  deleteButton: {
  }
}));

const TemiRow = (props) => {
  const { owner, serialNumber, id, applications, appMap, showUpdateModal, showDeleteModal } =
    props;

  const apiEndpoint = `${process.env.REACT_APP_BACKEND_URL}/api/temis/${id}/`;
  const [open, setOpen] = useState(false);
  const classes = useRowStyles();
  return (
    <React.Fragment>
      <TableRow className={classes.root}>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => {
              setOpen(!open);
            }}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
          {owner}
        </TableCell>
        <TableCell>{serialNumber}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box margin={1}>
              <div className={classes.applicationsRoot}>
                {applications.map((application) => {
                  let appLabel = appMap[application];
                  return (
                    <Chip key={appLabel} color="primary" label={appLabel} />
                  );
                })}
              </div>
              <div className={classes.controlPanel}>
                <Button
                  className={classes.deleteButton}
                  onClick={() => showDeleteModal(apiEndpoint)}
                >
                  Delete
                </Button>
              </div>
              <div className={classes.controlPanel}>
                <Button
                  className={classes.editButton}
                  onClick={() => showUpdateModal(apiEndpoint, owner, serialNumber, applications)}
                >
                  Edit
                </Button>
              </div>
              {/* <Chips/> */}
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
};

export default TemiRow;
