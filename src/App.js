import './App.css';
import { useState, useRef } from 'react';
import { BrowserRouter, Route, Router } from 'react-router-dom';
import Home from './Internship/home';
import Header from './store Ads/Header/Header';
import {CreateAd,AdsData1} from './store Ads/AdsReciever'
import myAdsStore from './store Ads/Ads_store'
import { Provider } from 'react-redux';

function App() {

  // let [userArray, setuserArray] = useState([
  //   {
  //     name: 'Ahsan',
  //     email: "ahsan1@gmail.com",
  //     city: "Faisalabad",
  //   },
  // ])
  return (
    <div className="App">
        <Provider store={myAdsStore}>
        <BrowserRouter>
        <Header path="/"></Header>
        <Route path="/create" component={CreateAd}></Route>
        <Route path="/ads" component={AdsData1}></Route>

          {/* <Home path="/"></Home> */}
          {/* <Route path="/createUser" ><CreateUser setuserArray={setuserArray} userArray={userArray} /></Route> */}
          {/* <Route path="/showUser" ><ShowUser setuserArray={setuserArray} userArray={userArray} /></Route> */}
        </BrowserRouter>
        </Provider>
     
    </div>
  );
}

export default App;
