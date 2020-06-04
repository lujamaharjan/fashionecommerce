import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import MenuBar from "./components/layouts/MenuBar";
import HomeComponent from './components/layouts/HomeComponent';
import About from './components/layouts/About';
import Contact from './components/layouts/Contact';
import ProductDetail from './components/product/ProductDetail';
import BlogList from './components/layouts/BlogList';
import Blog from './components/layouts/Blog';
import Footer from './components/layouts/Footer';
import Signup from './components/layouts/Signup';
import Login from './components/layouts/Login';
import './App.css';

function App() {
  return (
    <Router>
        <div>
          <MenuBar/>
          <Switch>
              <Route exact path="/" component={HomeComponent} />
              <Route exact path="/about" component={About} />
              <Route exact path="/contact" component={Contact} />
              <Route exact path="/bloglist" component={BlogList} />
              <Route exact path="/blog" component={Blog} />
              <Route exact path="/productdetail" component={ProductDetail}/>
              <Route exact path="/signup" component={Signup}/>
              <Route exact path="/login" component={Login}/>
          </Switch>
          <Footer/>
       </div>
    </Router>
  
  );
}

export default App;
