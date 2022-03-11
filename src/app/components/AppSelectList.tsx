import { FormControl, FormHelperText, InputLabel, MenuItem, Select } from '@mui/material'
import React from 'react'
import { useController, UseControllerProps } from 'react-hook-form'

interface Props extends UseControllerProps{
    label: string;
    items: string[];
}

export default function AppSelectList(props: Props) {
    const {fieldState, field} = useController({...props, defaultValue: ''});

  return (
    <FormControl error={!!fieldState.error} fullWidth>
        <InputLabel >{props.label}</InputLabel>
        <Select
            value={field.value}
            label={props.label}
            onChange={field.onChange}
        >
            {props.items.map((item, index)=>(
                <MenuItem key={index} value={item}>{item}</MenuItem>
            ))}
        </Select>
        <FormHelperText>{fieldState.error?.message}</FormHelperText>
    </FormControl>
  )
}
