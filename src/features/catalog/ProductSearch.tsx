import { debounce, TextField } from '@mui/material'
import React, { useState } from 'react'
import { useAppDispatch, useAppSelector } from '../../app/store/configureStore'
import { setProductParams } from './catalogSlice';

export default function ProductSearch() {
    const { productParams} = useAppSelector(state => state.catalog);
    const [searchTerm, setSearchTerm] = useState(productParams.searchTerm);
    const dispatch = useAppDispatch();

    const debouncedSearch = debounce((event: any)=>{
        dispatch(setProductParams({searchTerm: event.target.value}))
    }, 1500)

  return (
    <TextField 
        value={searchTerm || ''} 
        onChange={(event: any)=>{
            setSearchTerm(event.target.value);
            debouncedSearch(event);
        }} 
        label="Search Products" 
        variant='outlined' 
        fullWidth 
    />
  )
}
