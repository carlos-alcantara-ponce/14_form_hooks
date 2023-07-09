import React, { useState } from 'react';
import UserForm from "./Components/UserForm";
import Results from "./Components/Results";
import './App.css';

function App() {
  const [state, setState] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    password2: "",
  });

  return (
    <div className="App" >
      <UserForm datosInp={state} seteaInp={setState} />
      <Results datosRes={state} />
    </div >
  );
}

export default App;
