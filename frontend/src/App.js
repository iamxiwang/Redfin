import React from 'react';
import { Route, Switch } from 'react-router-dom';
import splash from './components/splash'
import ListingShowPage from './components/ListingShowPage/index.jsx'
import HouseForm from './components/HouseForm';
import ListingIndexPage from './components/ListingIndexPage';



function App() {

  return (
    <>
        <Switch>
    
          <Route exact path='/' component={splash}></Route>
          <Route exact path='/listings/new' component={HouseForm} ></Route>
          <Route  path='/listings/:listingId'>
            <ListingShowPage />
          </Route>
          <Route path= '/listings/:listingId/edit' component={HouseForm} ></Route>
        </Switch>
    </>
  );
}

export default App;