/* eslint-disable react/jsx-props-no-spreading */
import TextField from '@mui/material/TextField';
import * as React from 'react';
import { formatDateValue } from '../../../Utils/common';
import classes from './datePicker.module.scss';

type DatePickerProps = {
  onChange:React.ChangeEventHandler
  title: string
  name:string
  value:string
  className?:string
  disabled?:boolean
  required?:boolean
};

export default function DatePicker(props:DatePickerProps) {
  const {
    disabled, className, onChange,
    title, required = false,
    name, value
  } = props;
  console.log(value, formatDateValue(value));
  return (
    <TextField
      label={title}
      value={formatDateValue(value)}
      type="date"
      InputLabelProps={{ shrink: true }}
      disabled={disabled}
      className={[classes.datePicker, className].join(' ')}
      onChange={onChange}
      required={required}
      name={name}
      fullWidth
      variant="standard"
      placeholder="tada"
      inputProps={{
        min: '1980-01-01',
        max: '2030-12-31',
        pattern: '\\d{2}/\\d{2}/\\d{4}',
      }}
    />
  );
  // <LocalizationProvider dateAdapter={AdapterDateFns}>
  //   <Box className={classes.datePicker}>
  //     {/* <MDatePicker
  //       views={['year', 'month', 'day']}
  //       openTo="year"
  //       label={label}
  //       onChange={onChange}
  //       value={value}
  //       renderInput={(params) => <TextField className={classes.datePicker} {...params} variant="standard" />}
  //     /> */}
  //     <TextField className={classes.datePicker} type="date" label variant="standard" />
  //   </Box>
  // </LocalizationProvider>

  // );
}

DatePicker.defaultProps = {
  className: '',
  disabled: false,
  required: false
};
