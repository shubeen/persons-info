import React, { useState, useEffect } from 'react';

import './App.css';
import Header from './Components/Header/Header';
import Persons from './Components/Persons/Persons';
import Infocart from './Components/Infocart/Infocart';

function App() {
  const [personNames, setPersonNames] = useState([])

  useEffect(()=>{
    fetch ('https://randomuser.me/api/?results=15')
    .then (res=> res.json())
    .then (data=>{
      setPersonNames(data['results'] );
      console.log(data);
      // const names = data.map(results => results.name)
      // console.log(names);
    })
    .catch(error=>console.log(error))
  },[])

  
  return (
    <div className="App">

      
      <Header ></Header>

      
      {
        personNames.map(personNames=><Persons email={personNames.email} phone={personNames.cell} name={personNames.name.first} gender={personNames.gender} picture={personNames.picture.large}></Persons>)
      }
      
      
      


      
    </div>
    
  );
}

export default App;
