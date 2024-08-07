import React, { useState } from 'react';
import { Container, Typography } from '@mui/material';
import CardList from './components/CardList';
import ControlledForm from './components/ControlledForm';
import UncontrolledForm from './components/UncontrolledForm';
import useEventListener from './hooks/useEventListener';
// import UseReducerExample from './hooks/useReducerExample';

// сделать из LazyLoadedComponent LazyLoadedComponent =)

const App: React.FC = () => {
  const [formData, setFormData] = useState<string[]>([]);

  const handleFormSubmit = (data: string) => {
    setFormData([...formData, data]);
  };

  useEventListener('resize', () => {
    console.log('Window resized');
  });

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        React App with TypeScript and Material-UI
      </Typography>
      <CardList />
      <ControlledForm onSubmit={handleFormSubmit} />
      <UncontrolledForm onSubmit={handleFormSubmit} />
      <Typography variant="h6" gutterBottom>
        Form Data:
      </Typography>
      {/* {Здесь вывести списком все то, что было засабмичино в инпутах} */}
      {/* <LazyLoadedComponent /> */}
      {/* <UseReducerExample /> */}
    </Container>
  );
};

export default App;
