import React, { Component } from 'react';
import classes from './App.css';
import Books from '../components/Books/Books';
import Cockpit from '../components/Cockpit/Cockpit';

class App extends Component {
  state = {
    books: [
      {id: 'asew1', title: 'Harry Potter', totalPages: '123', currentPage:'50'},
      {id: 'asewraw1', title: 'Never Eat Alone', totalPages: '231', currentPage:'200'},
      {id: 'asdartw1', title: 'How to Win Friends & Influence People', totalPages: '415', currentPage:'415'}
    ],
    otherState: 'some other value',
    showBooks: false
  }

  titleChangedHandler = (event, id) => {
    const bookIndex = this.state.books.findIndex(b => {
      return b.id === id;
    });

    const book = {
      ...this.state.books[bookIndex]
    };
    
    book.title = event.target.value;

    const books = [...this.state.books];
    books[bookIndex] = book;

    this.setState({books: books})
  }

  deleteBookHandler = (bookIndex) => {
    //const books = this.state.books.slice();
    const books = [...this.state.books];
    books.splice(bookIndex,1);
    this.setState({books: books});
  }

  toggleBooksHandler = () => {
    const doesShow = this.state.showBooks;
    this.setState({showBooks: !doesShow});

  }

  render() {

    let books = null;

    if (this.state.showBooks) {
      books = <Books 
              books={this.state.books}
              clicked={this.deleteBookHandler}
              changed={this.titleChangedHandler} />;
    }

    return (    
      <div className={classes.App}>
        <Cockpit 
          showBooks={this.state.showBooks}
          books={this.state.books}
          clicked={this.toggleBooksHandler}/>
        {books}
      </div>
    );
    //return React.createElement('div',{className:'App'}, React.createElement('h1',null,'Hi, I\'m a React App!!!'));
  }
}

export default App;
