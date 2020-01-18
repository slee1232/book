//we are using functional component because i dont plan to manage states here. Class based component for state management.
import React from 'react';
import Book from './Book/Book';

const books = (props) => props.books.map((book,index) => {
        return <Book
        click={() => props.clicked(index)}
        title={book.title} 
        totalPages={book.totalPages} 
        currentPage={book.currentPage}  
        key={book.id}
        changed={(event) => props.changed(event, book.id)} />
      });

      export default books;