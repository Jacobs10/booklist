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
