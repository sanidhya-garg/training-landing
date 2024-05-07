import React, { FC } from 'react'
import Box from '@mui/material/Box'
import { StyledButton } from '@/components/styled-button'

const AuthNavigation: FC = () => {
  return (
    <Box sx={{ '& button:first-child': { mr: 2 } }}>
      <a href="https://training.unipace.in/sign-in" style={{ textDecoration: 'none' }}>
        <StyledButton  variant="outlined">
          Sign In
        </StyledButton>
      </a>
      <a href="https://training.unipace.in/sign-up" style={{ textDecoration: 'none' }}>
        <StyledButton disableHoverEffect={true}>Sign Up</StyledButton>
      </a>
    </Box>
  )
}

export default AuthNavigation
