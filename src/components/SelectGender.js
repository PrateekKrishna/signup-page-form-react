// import { useState } from 'react';
import React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

export default function SelectGender(props) {

  // const [value, setValue] = useState('female');
  const {onChange, defaultValue} = props

  // const onChange = (event) => {
  //   setValue(event.target.value);
  //   console.log(event.target.value); //Value is changing on console but not printing on dialog

  // };

  return (
    <FormControl>
      <FormLabel id="row-radio-buttons">Gender</FormLabel>
      <RadioGroup
        row
        aria-labelledby="row-radio-buttons"
        name="radio-buttons"
        value={defaultValue}
        onChange={onChange}
      >
        <FormControlLabel name='gender' value="Female" control={<Radio />} label="Female" />
        <FormControlLabel name='gender' value="Male" control={<Radio />} label="Male" />
        <FormControlLabel name='gender' value="Other" control={<Radio />} label="Other" />
      </RadioGroup>
    </FormControl>
  );
}

