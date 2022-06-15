import {AppBar, Toolbar, IconButton, Typography, Stack, Button, Link} from '@mui/material'
import CatchingPokemon from '@mui/icons-material/CatchingPokemon'
import React, { useEffect, useState } from 'react'
import { createTheme, responsiveFontSizes } from '@mui/material/styles';
import { ThemeProvider } from '@emotion/react';

let fonttheme = createTheme();

fonttheme.typography.h6 = {
    fontSize: '1.2rem',
    '@media (min-width:600px)': {
      fontSize: '1rem',
    },
    '@media (min-width:248px)': {
        fontSize: '0.8rem',
        
      },
    [fonttheme.breakpoints.up('md')]: {
      fontSize: '1.5rem',
    },
  };

// fonttheme = responsiveFontSizes(fonttheme);

 const MuiNavbar = () =>{

    const [dontload, setLoad] = useState<true|boolean>(true)

    useEffect(() =>{
        console.log('Called MUI Component')
    },[dontload])

    return <AppBar position='static'>
        <Toolbar>
            <IconButton size='large' edge='start' color='inherit' aria-label='logo' href='/' >
                <CatchingPokemon/>
            </IconButton>
            <ThemeProvider theme={fonttheme}>
            <Typography variant='h6' component='div' sx={{flexGrow: 1 }} > 
                Test project
                </Typography>
            </ThemeProvider>                
            <Stack direction='row' spacing={2}>
            <Button color='inherit' href='/'>
                    Dashboard
                    </Button>
                    <Button color='inherit' href='/features'>
                    Features
                    </Button>

                    <Button color='inherit'>
                        Pricing
                    </Button>
                    <Button color='inherit'>
                        About
                    </Button>
                    <Button color='inherit'>
                        Login
                    </Button>
                </Stack>
        </Toolbar>
    </AppBar>
}

 export default MuiNavbar;
