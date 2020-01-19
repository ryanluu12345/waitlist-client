import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import useUserAuth from "../../hooks/context/useUserAuth";
import Navbar from "../navbar/Navbar";
import Home from "../home/Home";
import CustomerWaitlist from "../customer-waitlist/CustomerWaitlist";
import AdminWaitlist from "../admin-waitlist/AdminWaitlist";
import RestaurantAdd from "../restaurant-add/RestaurantAdd";
import Login from "../login/Login";

export default function MainRouter() {
  const { token, user, loginUserByLocalToken } = useUserAuth();

  useEffect(() => {
    loginUserByLocalToken();
  }, []);

  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/waitlist/:restaurant" component={CustomerWaitlist} />
        <Route path="/admin-waitlist/:restaurant" component={AdminWaitlist} />
        <Route path="/add-restaurant" component={RestaurantAdd} />
        <Route path="/login" component={Login} />
      </Switch>
    </Router>
  );
}
