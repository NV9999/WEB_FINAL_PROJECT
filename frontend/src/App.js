import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ProductsPage from './pages/ProductsPage';
//import CartPage from './pages/CartPage'; 
//import CheckoutPage from './pages/CheckoutPage'; 

const App = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/" exact component={ProductsPage} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
