export const  SELECT_BOOK = 'SELECT_BOOK'

export function selectBook(book){
  return {
    type: 'SELECT_BOOK',
    payload: book
  }
}

export function showBook(book){
  return {
    type: 'SHOW_BOOK_DETAILS',
    payload: book
  }
}
export function addBook(book){
  return {
    type: 'ADD_BOOK',
    payload: book
  }
}
export function deleteBook(book){
  return {
    type: 'DELETE_BOOK',
    payload: book
  }
}
