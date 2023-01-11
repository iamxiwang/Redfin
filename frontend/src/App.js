import React from 'react';
import { Route, Switch } from 'react-router-dom';
import splash from './components/splash'
import ListingShowPage from './components/ListingShowPage/index.jsx'
import HouseForm from './components/HouseForm';
import SearchResult from './components/Search/SearchResult.jsx'
import TourList from './components/Appointment/TourList';
import Footer from './components/Footer';



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
          <Route exact path ='/search' component={SearchResult}></Route>
          <Route path='/mygreenfin/tours' component={TourList}></Route>
          <Route path='/footer' component={Footer} ></Route>
        </Switch>
    </>
  );
}

export default App;