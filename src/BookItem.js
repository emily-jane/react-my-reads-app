import React from 'react'

function BookItem (props) {
  return (
    <ol className="books-grid">
      {props.books.map((book) =>
        <li key={book.id}>
          <div className="book">
            <div className="book-top">
              <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks.thumbnail})` }}></div>
              <div className="book-shelf-changer">
                <select value={book.shelf} onChange={(event) => props.updateBookshelf(book, event.target.value)}>
                  <option value="none" disabled>Move to...</option>
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
