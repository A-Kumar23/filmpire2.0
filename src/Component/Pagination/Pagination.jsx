import { Button, Typography } from '@mui/material'
import React from 'react'
import useStyles from './PaginationStyle.ts'

const Pagination = ({currentPage, totalPage, setPage}) => {
    const { classes } = useStyles();
    
    const handelPrev = () => {
        if( currentPage !== 1){
            setPage((currentPage) => currentPage - 1 )
        }
    };
    const handelNext = () => {
        if (currentPage !== totalPage){
            setPage((currentPage) = currentPage + 1)
        }
    };
    if( totalPage === 0 ) { return null; }
    return (
        <>
            <div className={classes.container}>
                <Button onClick={handelPrev} className={classes.button} variant='contained' color='primary' type='button'>Prev</Button>
                <Typography variant='h4' className={classes.pageNumber}>{currentPage}</Typography>
                <Button onClick={handelNext} className={classes.button} variant='contained' color='primary' type='button'>Next</Button>
            </div>
        </>

    ) 
}

export default Pagination