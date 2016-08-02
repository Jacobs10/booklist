import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import { deleteBook } from '../actions/index'

class ShowBook extends React.Component {
  static contextTypes = {
    router: React.PropTypes.object
  }

  onDelete(){
    this.props.deleteBook(this.props.book);
    this.context.router.push('/')
  }

  render(){
    return (
      <div>
        <h1> {this.props.book.title} </h1>
        <h3> {this.props.book.length} </h3>
        <button onClick={this.onDelete.bind(this)}> Delete</button>
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

export default connect(mapStateToProps, { deleteBook })(ShowBook)
