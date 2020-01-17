import React, { Component } from 'react';


import classes from './App.css';
import Book from './Book/Book';

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
    let btnClass = '';


    if (this.state.showBooks) {
      books = (
          <div>
            {this.state.books.map((book,index) => {
              return <Book 
              click={() => this.deleteBookHandler(index)}
              title={book.title} 
              totalPages={book.totalPages} 
              currentPage={book.currentPage}
              key={book.id}
              changed={(event) => this.titleChangedHandler(event, book.id)} />
            })}
          </div>
      );
      
      btnClass = classes.Red;
    }

    const assignedClasses = [];
    if (this.state.books.length <= 2) {
      assignedClasses.push(classes.red); //classes = ['red']
    }
    if (this.state.books.length <=1) {
      assignedClasses.push(classes.bold); //classes = ['red', 'bold']
    }

    return (    
      <div className={classes.App}>
        <h1>Hi, I am a React App</h1>
        <p className={assignedClasses.join(' ')}>This is really working!</p>
        <button className={btnClass} onClick={this.toggleBooksHandler}>
          Update Books
         </button>
        {books}
      </div>
    );
    //return React.createElement('div',{className:'App'}, React.createElement('h1',null,'Hi, I\'m a React App!!!'));
  }
}

export default App;
