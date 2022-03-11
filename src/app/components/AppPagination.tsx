import { Box, Typography, Pagination } from '@mui/material'
import React, { useState } from 'react'
import { MetaData } from '../models/pagination'

interface Props{
    metaData: MetaData;
    onPageChange: (page: number)=> void;
}

export default function AppPagination({metaData, onPageChange}: Props) {
    const {currentPage, totalCount, totalPages, pageSize} = metaData;
    const [pageNumber, setPageNumber] = useState(currentPage);

    const handlePageChange = (page: number) => {
      setPageNumber(page);
      onPageChange(page);
    }

  return (
    <Box display='flex' justifyContent='space-between' alignItems='center'>
        <Typography>
            Displaying {(currentPage-1)*pageSize+1}-{currentPage*pageSize > totalCount ? totalCount : currentPage*pageSize} of {totalCount} items
        </Typography>
        <Pagination onChange={(e, page)=> handlePageChange(page)}  page={pageNumber} count={totalPages} shape="rounded" color='secondary' size='large'/>
    </Box>
  )
}
