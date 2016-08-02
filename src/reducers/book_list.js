
const INITIAL_STATE = [
  {title: 'JS', length: 96},
  {title: 'React Native', length: 92},
  {title: 'React', length: 32},
]

export default function(state = INITIAL_STATE, action) {
  switch (action.type){
    case 'ADD_BOOK' :
      return state.concat([action.payload])
    case 'DELETE_BOOK' :
      return state.filter(function(obj){
        return obj.length !== action.payload.length
      })
    default:
      return state
  }
}
