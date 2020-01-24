import React, { Component } from 'react';
import Book from './Book/Book';

class Books extends Component {
  // static getDerivedStateFromProps(props, state) {
  //   console.log('[Books.js] getDerivedStateFromProps');
  //   return state;
  // }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('[Books.js] shouldComponentUpdate');
    return true;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('[Books.js] getSnapshotBeforeUpdate');
    return {message: 'Snapshot!' };
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('[Books.js] componentDidUpdate');
    console.log(snapshot);
  }

  render() {
    console.log('[Books.js] rendering...');
    return this.props.books.map((book, index) => {
      return (
        <Book
          click={() => this.props.clicked(index)}
          title={book.title}
          totalPages={book.totalPages}
          currentPage={book.currentPage}
          key={book.id}
          changed={(event) => this.props.changed(event, book.id)} />
      );
    });
  }
};

export default Books;