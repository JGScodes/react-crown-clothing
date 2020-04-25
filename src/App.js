import React from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import './App.css';

const HatsPage = () => {
  return (
      <div>
        <h1>HATS PAGE</h1>
      </div>
  )
}


function App() {
  return (
        <div>
          <Header/>
          <Switch>
            <Route exact path="/" component={HomePage}/>
            <Route path="/hats" component={HatsPage}/>
            <Route path="/shop" component={ShopPage}></Route>
          </Switch>
        </div>
  )
  }

export default App;
