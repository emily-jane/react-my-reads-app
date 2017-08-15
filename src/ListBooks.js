import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import BookShelf from './BookShelf.js'

class ListBooks extends Component {
  static propTypes = {
    books: PropTypes.array.isRequired,
    updateBookshelf: PropTypes.func.isRequired
  }

  bookShelfBooks = (shelfType) => {
    return this.props.books.filter(book => book.shelf === shelfType)
  }

  render() {
    const { books, updateBookshelf } = this.props

    let bookShelves = {
      currentlyReading: 'Currently Reading',
      wantToRead: 'Want to Read',
      read: 'Read'
    }

    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          {Object.keys(bookShelves).map((shelf) =>
            <div key={shelf}>
              <BookShelf
                shelfTitle={bookShelves[shelf]}
                books={this.bookShelfBooks(shelf)}
                updateBookshelf={updateBookshelf}
              />
            </div>
          )}
        </div>
        <div className="open-search">
          <Link to="/create">Add a book</Link>
        </div>
      </div>
    )
  }
}

export default ListBooks
