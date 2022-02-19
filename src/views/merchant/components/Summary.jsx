import React from 'react'
import ProductSummary from './ProductSummary';
import { Grid, Card } from '@mui/material';

const Summary = () => {
  return (
      
    <>
    <Grid container sx={{ height:'100vh'}} alignItems="center" justifyContent="center">
      <Grid item sx={{ maxWidth:{'sm':"100%", 'lg':'50vw'}}} >
          
        <Card sx={{p:4}}>
        <ProductSummary/>
        </Card>

      </Grid>
      
    </Grid>
    </>
  )
}

export default Summary