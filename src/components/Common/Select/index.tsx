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
  title?: string,
  name: string,
  onChange: Function,
  value: any,
  disabled?:boolean
};

export default function Select(props:SelectProps) {
  const {
    options, required = false, title = null, name, onChange, value, disabled = false
  } = props;
  const handleChange = (event: SelectChangeEvent) => onChange(event);

  return (
    <FormControl fullWidth className={classes.select}>
      {title ? <InputLabel shrink className={classes.label} id={name}>{title}</InputLabel> : null}
      <MSelect
        labelId={name}
        name={name}
        value={value}
        onChange={handleChange}
        required={required}
        variant="standard"
        disabled={disabled}
      >
        {options.map((o) => <MenuItem key={o.value} value={o.value}>{o.label}</MenuItem>)}
      </MSelect>
    </FormControl>
  );
}

Select.defaultProps = {
  title: null,
  disabled: false
};
