import React, { PureComponent } from 'react';
import Book from './Book/Book';

class Books extends PureComponent {
//PureComponent checks to see if any props change. Otherwise, use shouldComponentUpdate to specify
//what props you want to check to see what changed.

  // static getDerivedStateFromProps(props, state) {
  //   console.log('[Books.js] getDerivedStateFromProps');
  //   return state;
  // }

//   shouldComponentUpdate(nextProps, nextState) {
//     console.log('[Books.js] shouldComponentUpdate');
//     if(
//         nextProps.books !== this.props.books ||
//         nextProps.changed !== this.props.changed ||
//         nextProps.clicked !== this.props.clicked) {
//         return true;
//     } else {
//         return false;
//     }
//   }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('[Books.js] getSnapshotBeforeUpdate');
    return {message: 'Snapshot!' };
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('[Books.js] componentDidUpdate');
    console.log(snapshot);
  }

  componentWillUnmount() {
      console.log('[Books.js] componentWillUnmount');
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