import React, { Component } from 'react';
import EmployerDetails from './EmployerDetails';
import EmployerPersonalDetails from './EmployerPersonalDetails';
import Confirm from './Confirm';
import Success from './Success';

// const genderItems = [
//   { id: 'male', title: 'Male' },
//   { id: 'female', title: 'Female' },
//   { id: 'other', title: 'Other' },
// ]

export class EmpForm extends Component {
  state = {
    step: 1,
    nameame: '',
    type: '',
    email: '',
    category: '',
    location: '',
    about: ''
  };

  // Proceed to next step
  nextStep = () => {
    const { step } = this.state;
    this.setState({
      step: step + 1
    });
  };

  // Go back to prev step
  prevStep = () => {
    const { step } = this.state;
    this.setState({
      step: step - 1
    });
  };

  // Handle fields change
  handleChange = input => e => {
    this.setState({ [input]: e.target.value });
  };

  render() {
    const { step } = this.state;
    const { name, type, email, category, location, about } = this.state;
    const values = { name, type, email, category, location, about};

    switch (step) {
      case 1:
        return (
            <EmployerPersonalDetails
              nextStep={this.nextStep}
              // prevStep={this.prevStep}
              handleChange={this.handleChange}
              values={values}
            />
        );
      case 2:
        return (
            <EmployerDetails
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 3:
        return (
          <Confirm
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            values={values}
          />
        );
      case 4:
        return <Success />;
      default:
        (console.log('This is a multi-step form built with React.'))
    }
  }
}

export default EmpForm;