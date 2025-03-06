import React, { useState } from 'react';
import { TextField, Button, FormControl, Box } from '@mui/material';

const ValidatingForm = () => {
  const [formValues, setFormValues] = useState({
    name: '',
    email: '',
  });

  const [formErrors, setFormErrors] = useState({
    name: '',
    email: '',
  });

  const validateForm = () => {
    let valid = true;
    const newErrors = {
      name: '',
      email: '',
    };

    if (!formValues.name) {
      newErrors.name = 'So you dont have name you cant go further';
      valid = false;
    }

    if (!formValues.email) {
      newErrors.email =  'So you dont have Email you cant go further';
      valid = false;}
    
    // } else if (!/S+@S+.S+/.test(formValues.email)) {
    //   newErrors.email = 'Invalid email address';
    //   valid = false;
    // }
    else if (!(formValues.email).toLowerCase().match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)) {
        newErrors.email = 'You call this an Email 😑';
        valid = false;
      }

    setFormErrors(newErrors);
    return valid;
  };

  

//   const handleChange = (event) => {
//     const { name, value } = event.target;
//     console.log(name ,value)
//     setFormValues((prevValues) => ({
//       ...prevValues,
//       [name]: value,
//     }));
//   };

const handleChange = (event) => {
    const { name, value } = event.target;
    console.log(name ,value)
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };


// const handleSubmit = (event) => {
//     event.preventDefault();
//     let mailtolink = `mailto:yashyash517@gmail.com?&subject=Reach out &body=Hi I'm ${formValues.name}. ${formValues.name} and MY Email is ${formValues.email}`;
//     window.location.href = mailtolink;
//   };

function handleSubmit(event) {
    event.preventDefault();
    if (validateForm()) {
    let mailtolink = `mailto:yashyash517@gmail.com?&subject=Reach out &body=Hi I'm ${formValues.name}. ${formValues.name} and MY Email is ${formValues.email}`;
window.location.href = mailtolink;
    }
}

  return (
    <>
      <h2>Contact Me</h2>

      <form onSubmit={handleSubmit}>
        <TextField
          label='Name'
          name='name'
          value={formValues.name}
          onChange={handleChange}
          error={!!formErrors.name}
          helperText={formErrors.name}
          fullWidth
          sx={{ mb: 3 }}
        />

        <TextField
          label='Email'
          name='email'
          value={formValues.email}
          onChange={handleChange}
          error={!!formErrors.email}
          helperText={formErrors.email}
          fullWidth
          sx={{ mb: 3 }}
        />
        <Button type='submit' variant='contained' fullWidth color='primary'>
          Submit
        </Button>
      </form>

    
    </>
  );
};

export default ValidatingForm;