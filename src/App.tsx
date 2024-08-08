import { useState } from "react";
import { Container, Typography } from "@mui/material";
import CardList from "./components/CardList";
import ControlledForm from "./components/ControlledForm";
import UncontrolledForm from "./components/UncontrolledForm";
import useEventListener from "./hooks/useEventListener";
import BigForm from "./components/BigForm";
// import UseReducerExample from './hooks/useReducerExample';

// сделать из LazyLoadedComponent LazyLoadedComponent =)

const App = () => {
  const [formData, setFormData] = useState<string[]>([]);
  const [bigFormData, setBigFormData] = useState<{ [key: string]: string }>({});

  const handleFormSubmit = (data: string) => {
    setFormData([...formData, data]);
  };

  const handleBigFormSubmit = (data: FormData) => {
    const formObject: { [key: string]: string } = {};
    data.forEach((value, key) => {
      formObject[key] = value as string;
    });
    setBigFormData(formObject);
  };

  useEventListener("resize", () => {
    console.log("Window resized");
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
      <BigForm onSubmit={handleBigFormSubmit} />
      <Typography variant="h6" gutterBottom>
        Big Form Data:
      </Typography>
      {/* {Здесь вывести все то, что было засабмичино в форме - ключ: значение} */}
    </Container>
  );
};

export default App;
