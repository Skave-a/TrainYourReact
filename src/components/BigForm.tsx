import { FormEvent } from 'react';
import { TextField, Button, Grid } from '@mui/material';

type BigFormProps = {
  onSubmit: (data: FormData) => void;
};

const initialFormData = {
  firstName: 'John',
  lastName: 'Doe',
  email: 'john.doe@example.com',
  phone: '123-456-7890',
  address: '123 Main St',
  city: 'Anytown',
  state: 'CA',
  zip: '12345'
};

const BigForm = ({ onSubmit } : BigFormProps) => {
  // Вывести данные формы на главной странице
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    //..
  };

  return (
    <form onSubmit={handleSubmit}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <TextField name="firstName" label="First Name" defaultValue={initialFormData.firstName} fullWidth required />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField name="lastName" label="Last Name" defaultValue={initialFormData.lastName} fullWidth required />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField name="email" label="Email" type="email" defaultValue={initialFormData.email} fullWidth required />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField name="phone" label="Phone" type="tel" defaultValue={initialFormData.phone} fullWidth required />
        </Grid>
        <Grid item xs={12}>
          <TextField name="address" label="Address" defaultValue={initialFormData.address} fullWidth required />
        </Grid>
        <Grid item xs={12}>
          <TextField name="city" label="City" defaultValue={initialFormData.city} fullWidth required />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField name="state" label="State" defaultValue={initialFormData.state} fullWidth required />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField name="zip" label="ZIP Code" defaultValue={initialFormData.zip} fullWidth required />
        </Grid>
        <Grid item xs={12}>
          <Button type="submit" variant="contained" color="primary">Submit</Button>
        </Grid>
      </Grid>
    </form>
  );
};

export default BigForm;
