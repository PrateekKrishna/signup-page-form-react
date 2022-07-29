import React, { Component } from 'react';
import Dialog from '@material-ui/core/Dialog';
// import AppBar from '@material-ui/core/AppBar';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
// import Radio from '@mui/material/Radio'
// import RadioGroup from '@mui/material/RadioGroup';
import Button from '@material-ui/core/Button';
import SelectType from './SelectType';

export class EmployerPersonalDetails extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
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
            {/* <AppBar title="Enter User Details" /> */}
            <h2>Sign Up For Employers</h2>
            <TextField
              placeholder="Enter Your Company's Name"
              label="Name"
              onChange={handleChange('name')}
              defaultValue={values.firstName}
              margin="normal"
              fullWidth
            />
            <br />
            <TextField
              placeholder="Enter Your Email"
              label="Email"
              onChange={handleChange('email')}
              defaultValue={values.email}
              margin="normal"
              fullWidth
            />
            <br />
            <SelectType 
              onChange={handleChange('type')}
              defaultValue = {values.type}
            />
            <br />
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

export default EmployerPersonalDetails;