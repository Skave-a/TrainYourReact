import { FormEvent } from "react";
import { TextField, Button } from "@mui/material";

type UncontrolledFormProps = {
  onSubmit: (data: string) => void;
};

const UncontrolledForm = ({ onSubmit }: UncontrolledFormProps) => {
  // Создать конролируемый компонент, сделать так чтобы form дата из главного
  // компонента обновлялась при сабмите, после самбита инпут должен очищаться

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextField label="Uncontrolled Input" fullWidth margin="normal" />
      <Button type="submit" variant="contained" color="primary">
        Submit
      </Button>
    </form>
  );
};

export default UncontrolledForm;
