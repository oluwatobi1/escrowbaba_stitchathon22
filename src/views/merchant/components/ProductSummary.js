import * as React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { Button } from '@mui/material';


const addresses = ['1 MUI Drive', 'Reactville', 'Anytown', '99999', 'USA'];
const payments = [
  { name: 'Vendor Name', detail: 'Helen Store (Jumia)' },
  { name: 'Customer Name', detail: 'Mr John Smith' },
  { name: 'Type', detail: 'Stitch Method' },
  { name: 'Escrow Release date', detail: '04/2024' },
];

export default function ProductSummary() {
  return (
    <React.Fragment>
     <Grid container  alignItems="center" justifyContent="center">
      <Typography variant="h6" gutterBottom>
        Order summary
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={5}>
          <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
            Shipping
          </Typography>
          <Typography gutterBottom>John Smith</Typography>
          <Typography gutterBottom>{addresses.join(', ')}</Typography>
        </Grid>
        <Grid item container direction="column" xs={12} sm={7}>
          <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
            Payment details
          </Typography>
          <Grid container>
            {payments.map((payment) => (
              <React.Fragment key={payment.name}>
                <Grid item xs={6}>
                  <Typography gutterBottom>{payment.name}</Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography gutterBottom>{payment.detail}</Typography>
                </Grid>
              </React.Fragment>
            ))}
          </Grid>
        </Grid>
      </Grid>
      <Button variant="contained"
      href="/merchant/success" size="large" color="success">Pay  with Stitch</Button>
      </Grid>
    </React.Fragment>
  );
}