/**
 * This module specifies routes of this app
 * @module Demo/Router
 * @requires react
 * @requires react-router-dom
 * @requires {@link module:Progress}
 */
import React from 'react';
import {
  BrowserRouter,
  Route,
} from 'react-router-dom';

// Require Pages
import Progress from './Progress';
import Digital from './Digital';

/**
 * @return {Router}
 */
export default function Router() {
  return (
    <BrowserRouter>
      <div>
        <Route exact path="/progress" component={Progress} />
        <Route exact path="/digital" component={Digital} />
      </div>
    </BrowserRouter>
  );
}
