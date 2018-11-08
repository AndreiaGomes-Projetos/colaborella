import React from "react";
import PropTypes from "prop-types";
import Button from "@material-ui/core/Button";
import { withStyles } from '@material-ui/core/styles';


const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  },
});


function Buttons(props) {
  const { classes } = props
  return (     
    <Button variant={props.variant}
            style={props.style} 
            color={props.color}
            size={props.size}
            disabled={props.disabled}
            onClick={props.onClick}
            className={classes.button}>
              {props.name}
    </Button>
  );
}

Buttons.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Buttons);

