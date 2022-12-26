import React from "react";
import { makeStyles, createStyles} from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(() => ({
  root: {

    },
  }));


const Answer = () => {
  // const classes = useStyles();
  return (
    <Button variant="contained" color="primary">
      Default
    </Button>
  )
}

export default Answer