import React, { Component } from 'react';
import BookList from './booklist.js'
import BookActive from './bookactive'

export default class BookIndex extends Component {
  render() {
    return (
      <div>
        <BookList />
        <BookActive />
      </div>
    );
  }
}
