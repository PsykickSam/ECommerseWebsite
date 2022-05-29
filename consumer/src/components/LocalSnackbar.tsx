import React, { useState } from 'react';
import { IconButton, Snackbar } from '@material-ui/core';
import CloseIcon from '@mui/icons-material/Close';
import { ILocalSnackbarProps } from 'interface/ILocalSnackbarProps';

const onClickCloseSnackbar = (setIsOpenSnackbar: Function) => () => {
  setIsOpenSnackbar(false);
};

const snackbarAction = (setIsOpenSnackbar: Function) => (
  <React.Fragment>
    <IconButton
      size="small"
      aria-label="close"
      color="inherit"
      onClick={() => onClickCloseSnackbar(setIsOpenSnackbar)}
    >
      <CloseIcon fontSize="small" />
    </IconButton>
  </React.Fragment>
);

const LocalSnackbar = (props: ILocalSnackbarProps) => {
  const [isOpenSnackbar, setIsOpenSnackbar] = useState(props.isOpen);

  return (
    <Snackbar
      open={isOpenSnackbar}
      message={props.message}
      onClose={() => onClickCloseSnackbar(setIsOpenSnackbar)}
      autoHideDuration={props.autoHideDuration === null ? 5000 : props.autoHideDuration}
      action={snackbarAction(setIsOpenSnackbar)}
    />);
};

export default LocalSnackbar;
