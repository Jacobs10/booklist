import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import ShowBook from './components/showbook'
import App from './components/app';
import BookIndex from './components/index_books';
import AddBook from './components/add_book'
import promise from 'redux-promise'

import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <Router history={browserHistory}>
      <Route component={App} path='/' >
        <IndexRoute component={BookIndex} />
        <Route component={ShowBook} path='show/:id' />
        <Route component={AddBook} path='add' />
      </Route>
    </Router>
  </Provider>
  , document.querySelector('.container'));
