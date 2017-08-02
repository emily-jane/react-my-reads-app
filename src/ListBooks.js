import React, { Component } from 'react'
import PropTypes from 'prop-types'
import BookItem from './BookItem.js'

class ListBooks extends Component {
  static propTypes = {
    books: PropTypes.array.isRequired,
    updateBookshelf: PropTypes.func.isRequired
  }

  render() {
    const { books, updateBookshelf } = this.props

    let currentlyReadingBooks, wantToRead, read

    if (books) {
      currentlyReadingBooks = books.filter(book => book.shelf === 'currentlyReading')
      wantToRead = books.filter(book => book.shelf === 'wantToRead')
      read = books.filter(book => book.shelf === 'read')
    }

    return (
      <div className="list-books-content">
        <div className="bookshelf">
          <h2 className="bookshelf-title">Currently Reading</h2>
          <BookItem
            books={currentlyReadingBooks}
            updateBookshelf={updateBookshelf}
          />
        </div>
        <div className="bookshelf">
          <h2 className="bookshelf-title">Want to Read</h2>
          <BookItem
            books={wantToRead}
            updateBookshelf={updateBookshelf}
          />
        </div>
        <div className="bookshelf">
          <h2 className="bookshelf-title">Read</h2>
          <BookItem
            books={read}
            updateBookshelf={updateBookshelf}
          />
        </div>
      </div>
    )
  }
}

export default ListBooks
