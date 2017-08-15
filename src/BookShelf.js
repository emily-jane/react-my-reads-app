import React from 'react'
import BookItem from './BookItem.js'

function BookShelf (props) {
  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{props.shelfTitle}</h2>
      <div className="bookshelf-books">
        <BookItem
          books={props.books}
          updateBookshelf={props.updateBookshelf}
        />
      </div>
    </div>
  )
}

export default BookShelf
