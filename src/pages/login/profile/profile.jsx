//import { useState } from 'react'
import { Card, CardContent, Container, Button, TextField, Typography, IconButton, InputAdornment, Input } from '@mui/material'
import Visibility from '@mui/icons-material/Visibility'
import VisibilityOff from '@mui/icons-material/VisibilityOff'

import { profile } from '@/services/api/profile'

import React from 'react';
import { Card, CardContent, Container, Typography } from '@mui/material';

const ProfilePage = ({ id, photo, first_name, last_name, username, email, is_staff }) => {
  return (
    <Container maxWidth='xs' className='mt-52'>
      <Card sx={{ minWidth: 275 }}>
        <CardContent className='flex gap-8 flex-col items-center'>
          <div className='text-center my-4'>
            <Typography variant='h4'>User Profile</Typography>
          </div>
          <div>
            <img src={photo} alt='User' className='w-32 h-32 rounded-full object-cover' />
          </div>
          <div>
            <Typography>
              <strong>ID:</strong> {id}
            </Typography>
            <Typography>
              <strong>First Name:</strong> {first_name}
            </Typography>
            <Typography>
              <strong>Last Name:</strong> {last_name}
            </Typography>
            <Typography>
              <strong>Username:</strong> {username}
            </Typography>
            <Typography>
              <strong>Email:</strong> {email}
            </Typography>
            <Typography>
              <strong>Staff Status:</strong> {is_staff ? 'Yes' : 'No'}
            </Typography>
          </div>
        </CardContent>
      </Card>
    </Container>
  );
};

export default ProfilePage;
