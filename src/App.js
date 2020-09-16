import React from "react";
import { Route, Switch } from "react-router";
import "./App.scss";
import Home from "./Components/Home";
import Articles from "./Components/Articles";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Blogs from "./Components/Blogs";

function App() {
  return (
    <div className="wrapper">
      <Header />
      <div className="innerWrapper">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/articles" component={Articles} />
          <Route exact path="/blogs" component={Blogs} />
          <Route exact path="/contact" component={Contact} />
        </Switch>
      </div>
      <Footer />
    </div>
  );
}

export default App;
