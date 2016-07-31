import React from 'react'
import { connect } from 'react-redux'

class BookActive extends React.Component {

  render(){
    return (
      <div> {this.props.activeBook} </div>
    )
  }
}

function mapStateToProps(state){
  return {
    activeBook: state.activeBook
  }
}

export default connect(mapStateToProps)(BookActive)
