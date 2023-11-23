import React, { useState, useEffect } from 'react';
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Grid,
  Heading,
  Input,
  Stack,
  FormErrorMessage,
} from '@chakra-ui/react';
import { signInWithEmail } from '../services/auth';
import useForm from '../hooks/useForm';

const initialState = {
  email: '',
  password: '',
};
const Login = ({ onToggleMode }) => {

  const { formValues, handleInputChange, resetForm } = useForm(initialState);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    let isMounted = true; 
    return () => {
      isMounted = false;
    };
  }, []);
  const handleSubmit = async (e) => {
    const { email, password } = formValues;
      e.preventDefault();
      await signInWithEmail(email, password);
    };

  return (
     <Grid placeContent="center" height="100vh">
      <Box w="350px" h="auto">
        <Heading fontSize="2xl" mb="15px">
          Login
        </Heading>
        <form onSubmit={handleSubmit}>
          <Stack spacing={4}>
            <FormControl id="email" isInvalid={error}>
              <FormLabel>Email</FormLabel>
              <Input
                type="email"
                name="email"
                value={formValues.email}
                onChange={handleInputChange}
                autocomplete="username"
              />
             
            </FormControl>
            <FormControl id="password" isInvalid={error}>
              <FormLabel>Password</FormLabel>
              <Input
                type="password"
                name="password"
                value={formValues.password}
                onChange={handleInputChange}
                autocomplete="current-password"f
              />
               <FormErrorMessage>{error}</FormErrorMessage>
            </FormControl>
            <Stack spacing={6}>
          <Button type="submit" bg="blue.400" color="white" isLoading={loading}>
            Sign in
          </Button>
          <Button variant="link" onClick={onToggleMode}>
            Don't have an account? Sign up here.
          </Button>
        </Stack>
          </Stack>
        </form>
      </Box>
    </Grid>
  );
};

export default Login;
