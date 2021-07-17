import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { StoreProvider } from './contexts/StoreContexts';
import NavigationBar from './components/NavigationBar'
import Footer from './components/Footer'
import Home from './routes/home/Home'
import About from './routes/about/About'

export default function App() {
  return (
    <StoreProvider>
      <Router>
        <div>
          <NavigationBar />
          <Switch>
            <Route path="/home">
              <Home />
            </Route>
            <Route path="/about">
              <About />
            </Route>
          </Switch>
          <Footer />
        </div>
      </Router>
    </StoreProvider>
  );
}
