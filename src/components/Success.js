import React, { Component } from 'react';
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
// import AppBar from '@material-ui/core/AppBar';
// import TextField from '@material-ui/core/TextField';
// import Radio from '@mui/material/Radio'
// import RadioGroup from '@mui/material/RadioGroup';
import Button from '@material-ui/core/Button';

export class Success extends Component {
  continue = e => {
    e.preventDefault();
    // PROCESS FORM //
    this.props.nextStep();
  };

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    return (
      <MuiThemeProvider>
        <>
          <Dialog
            open
            fullWidth
            maxWidth='sm'
          >
            <AppBar title="Success" />
            <h1>Thank You For Your Submission</h1>
            <p>You will get an email with further instructions.</p>
            <br />
            <Button
              color="primary"
              variant="contained"
              onClick={this.continue}
            >
              Go To Dashboard
            </Button>
            <br/>
            <Button
              color="secondary"
              variant="contained"
              onClick={this.continue}
            >
              Go To Login
            </Button>
            
          </Dialog>
        </>
      </MuiThemeProvider>
    );
  }
}

export default Success;