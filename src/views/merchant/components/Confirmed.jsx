import React from 'react'

import { Grid, Card } from '@mui/material';
import { Typography } from '@mui/material';
import { Box } from '@mui/material';
import { Button } from '@mui/material';

const Confirmed = () => {
  return (
      
    <>
    <Grid container sx={{ height:'100vh'}} alignItems="center" justifyContent="center">
      <Grid item sx={{ maxWidth:{'sm':"100%", 'lg':'50vw'}}} >
          
        <Card sx={{p:4}}>
        <React.Fragment>
                <Typography variant="h5" gutterBottom>
                  Thank you for your order.
                </Typography>
                <Typography variant="subtitle1">
                  Your order number is #2001539. We have deducted the fund from your account.
                  We have emailed your order confirmation, funds would be release 1 day after the delivery date
                </Typography>
              </React.Fragment>
              <React.Fragment>
                <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
          
                  <Button
                    variant="contained"
                    href="/"
                    sx={{ mt: 3, ml: 1 }}
                  >
                      Return
                  </Button>
                </Box>
              </React.Fragment>

        </Card>

      </Grid>
      
    </Grid>
    </>
  )
}

export default Confirmed