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
    this.setState({ books: this.updateOrAddBook(book, shelf) })
  }

  updateOrAddBook = (book, shelf) => {
    if (this.bookExistsonShelves(book) === true) {
      return this.updateBookshelfState(book, shelf)
    } else {
      return this.appendBook(book, shelf)
    }
  }

  bookExistsonShelves = (newBook) => {
    return this.state.books.filter((book) => book.id === newBook.id).length > 0
  }

  appendBook = (newBook, shelf) => {
    newBook.shelf = shelf
    return this.state.books.concat([newBook])
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
        <Route path="/create" render={() => (
          <SearchBook
            books={this.state.books}
            updateBookshelf={this.updateBookshelf}
          />
        )}/>
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
