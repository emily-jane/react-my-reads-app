import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import BookItem from './BookItem.js'
import PropTypes from 'prop-types'

class SearchBook extends Component {
  static PropTypes = {
    books: PropTypes.array.isRequired,
    updateBookshelf: PropTypes.func.isRequired
  }

  state = {
    searchTerm: '',
    searchResults: []
  }

  updateSearchTerm = (searchTerm) => {
    this.setState({searchTerm})
    BooksAPI.search(searchTerm, 20)
      .then((results) => {
        this.setState({searchResults: this.addShelves(results)})})
      .catch((e) => {
        console.log('No possible search results!')
        this.setState({searchResults: []})
      })
  }

  addShelves = (results) => {
    return results.map((searchBook) => {
      let shelfIfExists = 'default'
      this.props.books.map((book) => {
        if (searchBook.id === book.id) {
          shelfIfExists = book.shelf
          return searchBook
        }
      })
      searchBook.shelf = shelfIfExists
      return searchBook
    })
  }

  render() {
    const { searchTerm, searchResults } = this.state
    const { books, updateBookshelf } = this.props

    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link className="close-search" to="/">Close</Link>
          <div className="search-books-input-wrapper">
            <input
              type="text"
              placeholder="Search by title or author"
              value={searchTerm}
              onChange={(event) => this.updateSearchTerm(event.target.value)}
            />
          </div>
        </div>
        <div className="search-books-results">
          <BookItem
            books={searchResults}
            updateBookshelf={updateBookshelf}
          />
        </div>
      </div>
    )
  }
}

export default SearchBook
