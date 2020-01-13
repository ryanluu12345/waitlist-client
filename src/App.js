import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

import Navbar from "./components/navbar/Navbar";
import Home from "./components/home/Home";
import CustomerWaitlist from "./components/customer-waitlist/CustomerWaitlist";
import AdminWaitlist from "./components/admin-waitlist/AdminWaitlist";
import RestaurantAdd from "./components/restaurant-add/RestaurantAdd";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/waitlist/:restaurant" component={CustomerWaitlist} />
          <Route path="/admin-waitlist/:restaurant" component={AdminWaitlist} />
          <Route path="/add-restaurant" component={RestaurantAdd} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
