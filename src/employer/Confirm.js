import React, { Component } from 'react';
import Dialog from '@material-ui/core/Dialog';
// import AppBar from '@material-ui/core/AppBar';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import { List, ListItem, ListItemText } from '@material-ui/core';
import Button from '@material-ui/core/Button';


export class Confirm extends Component {
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
    const {
      values: { name, email, type, category, location, about }
    } = this.props;
    return (
      <MuiThemeProvider>
        <>
          <Dialog
            open
            fullWidth
            maxWidth='sm'
          >
            {/* <AppBar title="Confirm User Data" /> */}
            <h3>Confirm Company Data</h3>
            <List>
              <ListItem>
                <ListItemText primary="Name" secondary={name} />
              </ListItem>
              {/* <ListItem>
                <ListItemText primary="Last Name" secondary={lastName} />
              </ListItem> */}
              <ListItem>
                <ListItemText primary="Email" secondary={email} />
              </ListItem>
              <ListItem>
                <ListItemText primary="Gender" secondary={type} />
              </ListItem>
              <ListItem>
                <ListItemText primary="Category" secondary={category} />
              </ListItem>
              <ListItem>
                <ListItemText primary="Location" secondary={location} />
              </ListItem>
              <ListItem>
                <ListItemText primary="About" secondary={about} />
              </ListItem>
            </List>
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
            >Confirm & Continue</Button>
          </Dialog>
        </>
      </MuiThemeProvider>
    );
  }
}

export default Confirm;