import React from 'react';
import { Route, Switch } from 'react-router-dom';
import LoginFormPage from './components/LoginFormModal/LoginForm';
import SignupFormPage from "./components/SignupFormModal/SignupForm";
import Navigation from "./components/Navigation";
import splash from './components/splash'
import ListingShowPage from './components/ListingShowPage/index.jsx'
import HouseForm from './components/HouseForm';



function App() {
  return (
    <>
        <Switch>
          <Route exact path='/' component={splash}></Route>
          <Route exact path='/listings/:listingId'>
            <ListingShowPage />
          </Route>
          <Route path= '/listings/new' component={HouseForm} ></Route>
        </Switch>
    </>
  );
}

export default App;