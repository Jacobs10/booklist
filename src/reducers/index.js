import { combineReducers } from 'redux'
import BookList from './book_list'
import BookActive from './active_book'

const rootReducer = combineReducers({
  books: BookList,
  activeBook: BookActive
})

export default rootReducer;
