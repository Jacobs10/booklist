import React from 'react'
import { connect } from 'react-redux'
import { showBook } from '../actions/index'
import { Link } from 'react-router'

class BookActive extends React.Component {

  render(){
    let { activeBook } = this.props
    let buttonContent = this.props.activeBook.title ?
      <Link to={`show/${activeBook.length}`}><button onClick={()=> this.props.showBook(this.props.activeBook)}>
      {activeBook.title}</button></Link> :
                                             <h2> Select a book</h2>


    return (
      <div> {buttonContent}  </div>
    )
  }
}

function mapStateToProps(state){
  return {
    activeBook: state.activeBook
  }
}

export default connect(mapStateToProps, { showBook })(BookActive)
