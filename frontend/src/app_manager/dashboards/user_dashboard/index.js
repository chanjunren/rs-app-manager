import React, { useContext, useEffect } from 'react';
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';
import { makeStyles } from '@material-ui/core/styles';
import { withTheme } from '../../../util/theme';
import UserTable from './user_table';
import CustomisedSnackBar from '../../../shared/snackbar';
import { DataContext } from '../../shared/data_context';

const UserDashboard = () => {
  const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      padding: 20,
    },
    tableRoot: {
      width: '100%',
    },
    backdrop: {
      zIndex: theme.zIndex.drawer + 1,
      color: '#fff',
    },
  }));

  const classes = useStyles();
  const { users, fetchAppUsers, isLoading, errorEncountered, clearError } =
    useContext(DataContext);

  useEffect(() => {
    fetchAppUsers();
  }, []);
  return (
    <div className={classes.root}>
      <CustomisedSnackBar
        message={errorEncountered}
        success={!!!errorEncountered}
        open={!!errorEncountered}
        clearError={clearError}
      />
      <Backdrop className={classes.backdrop} open={isLoading}>
        <CircularProgress color="inherit" />
      </Backdrop>
      <div className={classes.tableRoot}>
        <UserTable users={users} />
      </div>
    </div>
  );
};

export default withTheme(UserDashboard);
