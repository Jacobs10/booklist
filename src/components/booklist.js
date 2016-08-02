import React from 'react'
import { connect } from 'react-redux'
import { selectBook } from '../actions/index'
import { Link } from 'react-router'

class BookList extends React.Component {

  render(){
    var rows = []
    this.props.books.map((book) => {
         return (
             rows.push(<li
               key={book.title}
               onClick={()=> this.props.selectBook(book)}
               className="list-group-item">
               {book.title}
             </li>
           ));
       });
    return (
      <div>
        <ul>
          {rows}
        </ul>
        <Link to={'add'}>Add a New Book </Link>
      </div>
    )
}
}

function mapStateToProps(state){
  return {
    books: state.books
  }
}

export default connect(mapStateToProps, { selectBook })(BookList)
