import { FormControlLabel, Checkbox } from '@mui/material';
import React from 'react'
import {useController, UseControllerProps } from 'react-hook-form'

interface Props extends UseControllerProps{
    label: string;
    disabled: boolean
}

export default function AppCheckBox(props: Props) {
    const {field} = useController({...props, defaultValue: false})
  return (
    <FormControlLabel disabled={props.disabled} label={props.label} control={<Checkbox {...field} checked={field.value} color='secondary' />} />
  )
}
