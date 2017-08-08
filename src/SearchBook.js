import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import BookItem from './BookItem.js'
import PropTypes from 'prop-types'

class SearchBook extends Component {
  static PropTypes = {
    updateBookshelf: PropTypes.func.isRequired
  }

  state = {
    searchTerm: '',
    searchResults: []
  }

  updateSearchTerm = (searchTerm) => {
    this.setState({searchTerm})
    BooksAPI.search(searchTerm, 20).then((results) => {
      this.setState({searchResults: results})
    })
  }

  render() {
    const { searchTerm, searchResults } = this.state
    const { updateBookshelf } = this.props

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
