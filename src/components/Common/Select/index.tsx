import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import MSelect, { SelectChangeEvent } from '@mui/material/Select';
import * as React from 'react';
import classes from './select.module.scss';

export type Option = {
  value:any
  label:string | number
};

type SelectProps = {
  options: Option[]
  required: boolean,
  title: string,
  name: string,
  onChange: Function,
  value: any
};

export default function Select(props:SelectProps) {
  const {
    options, required = false, title, name, onChange, value
  } = props;
  const handleChange = (event: SelectChangeEvent) => onChange(event);

  return (
    <FormControl fullWidth className={classes.select}>
      <InputLabel shrink className={classes.label} id={name}>{title}</InputLabel>
      <MSelect
        labelId={name}
        name={name}
        value={value}
        onChange={handleChange}
        required={required}
        variant="standard"
      >
        {options.map((o) => <MenuItem key={o.value} value={o.value}>{o.label}</MenuItem>)}

      </MSelect>
    </FormControl>
  );
}
