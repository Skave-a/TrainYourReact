import React from 'react';
import { TextField, Button } from '@mui/material';

const UncontrolledForm: React.FC<{ onSubmit: (data: string) => void }> = ({ onSubmit }) => {
  // Создать конролируемый компонент, сделать так чтобы form дата из главного
  // компонента обновлялась при сабмите, после самбита инпут должен очищаться

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        label="Uncontrolled Input"
        fullWidth
        margin="normal"
      />
      <Button type="submit" variant="contained" color="primary">Submit</Button>
    </form>
  );
};

export default UncontrolledForm;
