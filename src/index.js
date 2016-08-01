import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import ShowBook from './components/showbook'
import App from './components/app';
import BookIndex from './components/index_books';

import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware()(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <Router history={browserHistory}>
      <Route component={App} path='/' >
        <IndexRoute component={BookIndex} />
        <Route component={ShowBook} path='show/:id'/>
      </Route>
    </Router>
  </Provider>
  , document.querySelector('.container'));
