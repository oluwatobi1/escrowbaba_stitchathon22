import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import GlobalStyles from '@mui/material/GlobalStyles';
import Container from '@mui/material/Container';

function Copyright(props) {
  return (


    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Trustpay
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>

  );
}



function PricingContent() {
  return (
    <React.Fragment>
      <GlobalStyles styles={{ ul: { margin: 0, padding: 0, listStyle: 'none' } }} />
      <CssBaseline />
      <AppBar
        position="static"
        color="default"
        elevation={0}
        sx={{ borderBottom: (theme) => `1px solid ${theme.palette.divider}` }}
      >
        <Toolbar sx={{ flexWrap: 'wrap' }}>
          <Typography variant="h6" color="inherit" noWrap sx={{ flexGrow: 1 }}>
            EscrowBaba
          </Typography>
          <Button href="/merchant" variant="outlined" sx={{ my: 1, mx: 1.5 }}>
            Merchant
          </Button>
        </Toolbar>
      </AppBar>
      {/* Hero unit */}
      <Container disableGutters maxWidth="sm" component="main" sx={{ pt: 8, pb: 6 }}>
        <Typography
          component="h1"
          variant="h2"
          align="center"
          color="text.primary"
          gutterBottom
        >
          Escrow Baba
        </Typography>
        <Typography variant="h5" align="center" color="text.secondary" component="p">
        We make trust-less ecommerce transactions possible
        </Typography>
      </Container>
      {/* End hero unit */}
      <Container maxWidth="md" component="main">
        <Grid container spacing={5} alignItems="flex-end">
        </Grid>
      </Container>
      <Grid container alignItems="center"
        justifyContent="center">
        <Grid item  >

          <Button
            href="/merchant"
            size='large'
            color="success"
            variant="contained" sx={{ my: 1, mx: 1.5 }}>
            Buy From Merchant
          </Button>

        </Grid>

      </Grid>




      {/* Footer */}
      <Container
        maxWidth="md"
        component="footer"
        sx={{
          borderTop: (theme) => `1px solid ${theme.palette.divider}`,
          mt: 8,
          py: [3, 6],
        }}
      >
        <Copyright />
      </Container>
      {/* End footer */}
    </React.Fragment>
  );
}

export default function Home() {
  return <PricingContent />;
}
