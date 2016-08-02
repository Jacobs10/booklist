import React from 'react'
import { Link } from 'react-router'
import { reduxForm } from 'redux-form'
import { addBook } from '../actions/index'

class AddBook extends React.Component {
  static contextTypes = {
    router: React.PropTypes.object
  }

  onSubmit(props){
    this.props.addBook(props)

    this.context.router.push('/')
  }

  render(){
    const { fields: {title, length}, handleSubmit } = this.props
    return (
      <form onSubmit={handleSubmit(this.onSubmit.bind(this))} >
        <input type='text' {...title} />
        <input type='text' {...length}/>
        <button type='submit'>Submit</button>
        <div>
          <Link to={'/'}> Return </Link>
        </div>
       </form>
    )
  }
}

export default reduxForm({
  form: 'Book Form',
  fields: [
    'title',
    'length'
  ]
}, null, { addBook })(AddBook)
