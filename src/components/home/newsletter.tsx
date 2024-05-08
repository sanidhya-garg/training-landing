import React, { FC } from 'react'
import Box from '@mui/material/Box'
import InputBase from '@mui/material/InputBase'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import { StyledButton } from '../styled-button'

const HomeNewsLetter: FC = () => {
  return (
    <Box sx={{backgroundColor : 'primary.main'}}>
      <Box
        sx={{
          backgroundColor: 'secondary.main',
          py: { xs: 8, md: 10 },
          clipPath: 'ellipse(75% 100% at center top)',
        }}
      >
        <Container>
          <Box
            sx={{
              backgroundColor: 'secondary.main',
              borderRadius: 10,
              py: { xs: 4, md: 6 },
              px: { xs: 4, md: 8 },
              textAlign: 'center',
              color: 'white',
            }}
          >
            <Typography variant="h1" component="h2" sx={{ mb: 2, fontSize: { xs: 28, md: 36 } }}>
              Subscribe to Our Newsletter
            </Typography>
            <Typography variant="body1" sx={{ mb: 4 }}>
              Stay updated with the latest industry trends by subscribing to our newsletter.
            </Typography>

            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                flexDirection: { xs: 'column', md: 'row' },
                justifyContent: 'center',
                maxWidth: 600,
                mx: 'auto',
              }}
            >
              <InputBase
                sx={{
                  backgroundColor: 'background.paper',
                  borderRadius: 5,
                  width: '100%',
                  height: 48,
                  px: 2,
                  mr: { xs: 0, md: 2 },
                  mb: { xs: 2, md: 0 },
                }}
                placeholder="Enter your Email Address"
              />
              <StyledButton size="large">Subscribe</StyledButton>
            </Box>
          </Box>
        </Container>
      </Box>
    </Box>
  )
}

export default HomeNewsLetter
