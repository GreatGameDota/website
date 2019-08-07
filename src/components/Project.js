import React, { Component } from 'react';
import { withStyles } from '@material-ui/styles';
import styles from '../styles/ProjectStyles';

class Project extends Component {
  render() {
    const { classes, project } = this.props;
    return (
      <div className={classes.root}>
        <h1>{project.name}</h1>
      </div>
    )
  }
}

export default withStyles(styles)(Project);