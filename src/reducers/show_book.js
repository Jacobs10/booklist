export default function(state = null, action){
  switch (action.type){
    case 'SHOW_BOOK_DETAILS' :
      return action.payload
  }
  return state
}
