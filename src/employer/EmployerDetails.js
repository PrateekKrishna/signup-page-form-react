import React, { Component } from 'react';
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

export class EmployerDetails extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    const { values, handleChange } = this.props;
    return (
      <MuiThemeProvider>
        <>
          <Dialog
            open
            fullWidth
            maxWidth='sm'
          >
            <AppBar title="Enter Personal Details" />
            <TextField
              placeholder="Enter Your Category eg- Technology, Finance etc"
              label="Category"
              onChange={handleChange('category')}
              defaultValue={values.category}
              margin="normal"
              fullWidth
            />
            <br />
            <TextField
              placeholder="Where Your Company is Based"
              label="Location"
              onChange={handleChange('location')}
              defaultValue={values.location}
              margin="normal"
              fullWidth
            />
            <br />
            <TextField
              placeholder="About Your Company"
              label="About"
              onChange={handleChange('about')}
              defaultValue={values.about}
              margin="normal"
              fullWidth
            />
            <br />

            <Button
              color="secondary"
              variant="contained"
              onClick={this.back}
            >Back</Button>

            <Button
              color="primary"
              variant="contained"
              onClick={this.continue}
            >Continue</Button>
          </Dialog>
        </>
      </MuiThemeProvider>
    );
  }
}

export default EmployerDetails;