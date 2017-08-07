import React from 'react'
import { Route } from 'react-router-dom'
import ListBooks from './ListBooks.js'
import SearchBook from './SearchBook.js'
import * as BooksAPI from './BooksAPI'
import './App.css'

class BooksApp extends React.Component {
  state = {
    books: []
  }

  updateBookshelf = (book, shelf) => {
    BooksAPI.update(book, shelf)
    this.setState({ books: this.updateBookshelfState(book, shelf) })
  }

  updateBookshelfState = (updatedBook, shelf) => {
    return this.state.books.map((book) => {
      if (book === updatedBook) {
        book.shelf = shelf
      }
      return book
    })
  }

  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({ books })
    })
  }

  render() {
    return (
      <div className="app">
        <Route path="/create" component={SearchBook}/>
        <Route exact path="/" render={() => (
          <ListBooks
            books={this.state.books}
            updateBookshelf={this.updateBookshelf}
          />
        )}/>
      </div>
    )
  }
}

export default BooksApp
