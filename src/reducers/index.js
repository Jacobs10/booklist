import { combineReducers } from 'redux'
import BookList from './book_list'
import BookActive from './active_book'
import ShowBookDetails from './show_book'

const rootReducer = combineReducers({
  books: BookList,
  activeBook: BookActive,
  showBookDetails: ShowBookDetails
})

export default rootReducer;
