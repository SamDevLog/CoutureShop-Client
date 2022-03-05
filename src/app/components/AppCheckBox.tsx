import { FormControlLabel, Checkbox } from '@mui/material';
import React from 'react'
import {useController, UseControllerProps } from 'react-hook-form'

interface Props extends UseControllerProps{
    label: string;
}

export default function AppCheckBox(props: Props) {
    const {field} = useController({...props, defaultValue: false})
  return (
    <FormControlLabel label={props.label} control={<Checkbox {...field} checked={field.value} color='secondary' />} />
  )
}
