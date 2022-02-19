import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import GlobalStyles from '@mui/material/GlobalStyles';
import Container from '@mui/material/Container';


// image imports

import IphoneXImage from '../../asset/iphone-x.png'
import Headset from '../../asset/headset.jpg'
import Drone from '../../asset/drone.jpg'
import SamsungPhone from '../../asset/samsung.jpg'
import SmartTV from '../../asset/Smart TV.jpg'
import wristwatch from '../../asset/wristwatch.jpg'
import { Stack } from '@mui/material';

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

const tiers = [
  {
    title: 'iPhone X',
    price: ' 249,000',
    image: IphoneXImage,
    description: [
      '256gb Space Grey',
      'Free pouch',
      'Tempered gray glass',
    ],
    buttonText: 'Buy',
    buttonVariant: 'contained',
  },
  {
    title: 'Gaming Headset',
    price: ' 45,000',
    image: Headset,
    description: [
      'Noise cancellation',
      'High bass',
      'Email support',
    ],
    buttonText: 'Buy',
    buttonVariant: 'contained',
  },
  {
    title: 'Drone',
    price: ' 300,000',
    image: Drone,
    description: [
      'Emotion pocket selfie',
      '2 GB of storage',
      'Drone Quadcopter',
    ],
    buttonText: 'Buy',
    buttonVariant: 'contained',
  },
  {
    title: 'Samsung phone',
    price: ' 159,000',
    image: SamsungPhone,
    description: [
      '100 GB of storage',
      'Face detection feature',
      '2 years warranty',
    ],
    buttonText: 'Buy',
    buttonVariant: 'contained',
  },
  {
    title: 'Curvy Smart TV',
    price: '1,500,000',
    image: SmartTV,
    description: [
      '10 users included',
      '200 GB of storage',
      '5 years warranty',
    ],
    buttonText: 'Buy',
    buttonVariant: 'contained',
  }, {
    title: 'Wrist watch',
    price: '19,000',
    image: wristwatch,
    description: [
      'Luxury',
      'Gold chain',
      'Help center access',
    ],
    buttonText: 'Buy',
    buttonVariant: 'contained',
  },
];

function PricingContent() {
  return (
    <React.Fragment>
      <GlobalStyles styles={{ ul: { margin: 0, padding: 0, listStyle: 'none' } }} />
      <CssBaseline />
      {/* Hero unit */}
      <Container disableGutters maxWidth="sm" component="main" sx={{ pt: 8, pb: 6 }}>
        <Typography
          component="h1"
          variant="h2"
          align="center"
          color="text.primary"
          gutterBottom
        >
          Market Demo
        </Typography>
      </Container>
      {/* End hero unit */}
      <Container maxWidth="md" component="main">
        <Grid container spacing={5} alignItems="flex-end">
          {tiers.map((tier) => (
            // Enterprise card is full width at sm breakpoint
            <Grid
              item
              key={tier.title}
              xs={12}
              sm={tier.title === 'Enterprise' ? 12 : 6}
              md={4}
            >
              <Card>
                <CardHeader
                  title={tier.title}
                  subheader={tier.subheader}
                  titleTypographyProps={{ align: 'center' }}
                  action={tier.title === 'Pro' ? <p></p> : null}
                  subheaderTypographyProps={{
                    align: 'center',
                  }}
                  sx={{
                    backgroundColor: (theme) =>
                      theme.palette.mode === 'light'
                        ? theme.palette.grey[200]
                        : theme.palette.grey[700],
                  }}
                />
                <CardContent>
                  <Box
                    sx={{
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'baseline',
                      mb: 2,
                    }}
                  >
                    <Stack direction='column' spacing={2}>

                    <Grid container>
                      <img src={tier.image} alt="opps" style={{ width: '100%', height: '30vh' }}  />
                    </Grid>

                    <Stack direction='row' alignItems='center'>
                    <Typography component="h2" variant="h3" color="text.primary">
                    ₦{tier.price}
                    </Typography>
                    <Typography variant="h6" color="text.secondary">
                    </Typography>
                    </Stack>
                    </Stack>

                  </Box>
                  <ul>
                    {tier.description.map((line) => (
                      <Typography
                        component="li"
                        variant="subtitle1"
                        align="center"
                        key={line}
                      >
                        {line}
                      </Typography>
                    ))}
                  </ul>
                </CardContent>
                <CardActions>
                  <Button fullWidth variant={tier.buttonVariant}  color="success">
                    {tier.buttonText}
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
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
        <Copyright sx={{ mt: 5 }} />
      </Container>
      {/* End footer */}
    </React.Fragment>
  );
}

export default function Pricing() {
  return <PricingContent />;
}
