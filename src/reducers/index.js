import { combineReducers } from 'redux'
import BookList from './book_list'
import BookActive from './active_book'
import ShowBookDetails from './show_book'
import { reducer as formReducer} from 'redux-form'

const rootReducer = combineReducers({
  books: BookList,
  activeBook: BookActive,
  showBookDetails: ShowBookDetails,
  form: formReducer
})

export default rootReducer;
