import './App.css';
import { useState, useRef } from 'react';
import { BrowserRouter, Route, Router } from 'react-router-dom';
import Home from './Internship/home';
import { CreateUser, ShowUser } from './Internship/CreateAndShow';

function App() {

  let [userArray, setuserArray] = useState([
    {
      name: 'Ahsan',
      email: "ahsan1@gmail.com",
      city: "Faisalabad",
    },
  ])
  return (
    <div className="App">
      
        <BrowserRouter>
          <Home path="/"></Home>
          <Route path="/createUser" ><CreateUser setuserArray={setuserArray} userArray={userArray} /></Route>
          <Route path="/showUser" ><ShowUser setuserArray={setuserArray} userArray={userArray} /></Route>
        </BrowserRouter>
     
    </div>
  );
}

export default App;
