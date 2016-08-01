import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'

class ShowBook extends React.Component {

  render(){
    return (
      <div>
        <h1> {this.props.book.title} </h1>
        <h3> {this.props.book.length} </h3>
        <Link to={'/'}><button>Return to Homepage</button></Link>
      </div>
    )
  }
}
function mapStateToProps(state){
  return{
    book: state.showBookDetails
  }
}

export default connect(mapStateToProps)(ShowBook)
