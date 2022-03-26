import { InputBaseComponentProps, useTheme } from '@mui/material'
import React, { forwardRef, Ref, useImperativeHandle, useRef } from 'react'

interface Props extends InputBaseComponentProps{}

export const StripeInput = forwardRef(function StripeInput({component: Component, ...props}: Props, ref: Ref<unknown>)
{
    const elementRef = useRef<any>();
    const theme = useTheme();

    useImperativeHandle(ref, ()=>({
        focus: ()=> elementRef.current.focus
    }));

    return (
        <Component onReady={(element:any)=> elementRef.current = element} options={{style: {
            base: {
              color: `${theme.palette.text.primary}`
            }
          }}} {...props} />
    )
})
