import React from "react";
import PropTypes from 'prop-types'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import HomepageLayout from "./HomepageLayout";
import History from "./History";
import Fact from "./Fact";

export default function router() {
    return (
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">HomepageLayout</Link>
              </li>
              <li>
                <Link to="/Fact">Fact</Link>
              </li>
              <li>
                <Link to="/History">History</Link>
              </li>
              
            </ul>
          </nav>
  
          {/* A <Switch> looks through its children <Route>s and
              renders the first one that matches the current URL. */}
          <Switch>
            <Route path ="/Fact">
              <Fact />
            </Route>
            <Route path="/History">
              <History/>
            </Route>
            <Route path="/">
              <HomepageLayout />
            </Route>
            
            
          </Switch>
        </div>
      </Router>
    );
  }
  
  function Home() {
    return <h2>HomepageLayout</h2>;
  }
  