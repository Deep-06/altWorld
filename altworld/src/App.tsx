import React from 'react';
import './App.css';
import { Dashboard } from './componenets/Dashboard';
import { Assignment } from './componenets/Assignment';
import { styled } from 'styled-components'

function App() {
  return (
    <DIV className="App" >
     <Dashboard />
     <Assignment/>
     
    </DIV>
  );
}

export default App;

const DIV = styled.div`
display:flex;

@media screen and (max-width: 650px) {
    flex-direction: column;
}

`;