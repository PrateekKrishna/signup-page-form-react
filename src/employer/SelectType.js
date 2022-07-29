// import { useState } from 'react';
import React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

export default function SelectType(props) {

  // const [value, setValue] = useState('female');
  const {onChange, defaultValue} = props

  // const onChange = (event) => {
  //   setValue(event.target.value);
  //   console.log(event.target.value); //Value is changing on console but not printing on dialog

  // };

  return (
    <FormControl>
      <FormLabel id="row-radio-buttons">Type</FormLabel>
      <RadioGroup
        row
        aria-labelledby="row-radio-buttons"
        name="radio-buttons"
        value={defaultValue}
        onChange={onChange}
      >
        <FormControlLabel name='type' value="Individual" control={<Radio />} label="Individual" />
        <FormControlLabel name='type' value="Business" control={<Radio />} label="Business" />
      </RadioGroup>
    </FormControl>
  );
}

