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
      <div>
        <div className="bookshelf">
          <h2 className="bookshelf-title">Currently Reading</h2>
          <div className="bookshelf-books">
            <BookItem
              books={currentlyReadingBooks}
              updateBookshelf={updateBookshelf}
            />
          </div>
        </div>
        <div className="bookshelf">
          <h2 className="bookshelf-title">Want to Read</h2>
          <div className="bookshelf-books">
            <BookItem
              books={wantToRead}
              updateBookshelf={updateBookshelf}
            />
          </div>
        </div>
        <div className="bookshelf">
          <h2 className="bookshelf-title">Read</h2>
          <div className="bookshelf-books">
            <BookItem
              books={read}
              updateBookshelf={updateBookshelf}
            />
          </div>
        </div>
      </div>
    )
  }
}

export default ListBooks
