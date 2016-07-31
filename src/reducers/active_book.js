export default function(state, action){
  switch (action.type){
    case 'SELECT_BOOK' :
      return action.payload.title
  }
  return "Select a Book"
}
