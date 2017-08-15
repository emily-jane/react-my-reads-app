import React from 'react'

function BookItem (props) {
  return (
    <ol className="books-grid">
      {props.books.map((book, index) =>
        <li key={book.id + index}>
          <div className="book">
            <div className="book-top">
              <div className="book-cover" style={{ backgroundImage: `url(${book.imageLinks.thumbnail})` }}></div>
              <div className="book-shelf-changer">
                <select value={book.shelf} onChange={(event) => props.updateBookshelf(book, event.target.value)}>
                  <option value="default" disabled>Move to...</option>
                  <option value="currentlyReading">Currently Reading</option>
                  <option value="wantToRead">Want to Read</option>
                  <option value="read">Read</option>
                  <option value="none">None</option>
                </select>
              </div>
            </div>
            <div className="book-title">{book.title}</div>
            <div className="book-authors">{book.authors ? book.authors.join(', ') : 'Unknown'}</div>
          </div>
        </li>
      )}
    </ol>
  )
}

export default BookItem
