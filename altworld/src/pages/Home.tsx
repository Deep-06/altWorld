import React from 'react'
import { styled } from 'styled-components'
import { Dashboard } from '../componenets/Dashboard';
import { Assignment } from '../componenets/Assignment';

export const Home = () => {
  return (
    <DIV >
    <Dashboard />
    <Assignment/>
   </DIV>
  )
}

const DIV = styled.div`
display:flex;
justify-content:'space-between';

@media screen and (max-width: 700px) {
  display:flex;
justify-content:'space-between';
    flex-direction: column;
}

`;