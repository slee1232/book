import React, { Component } from 'react';
import classes from './App.css';
import Books from '../components/Books/Books';
import Cockpit from '../components/Cockpit/Cockpit';
import withClass from '../hoc/withClass';
import Auxillary from '../hoc/Auxilliary';

class App extends Component {
constructor(props) {
  super(props);
  console.log('[App.js] constructor');

}

  state = {
    books: [
      {id: 'asew1', title: 'Harry Potter', totalPages: '123', currentPage:'50'},
      {id: 'asewraw1', title: 'Never Eat Alone', totalPages: '231', currentPage:'200'},
      {id: 'asdartw1', title: 'How to Win Friends & Influence People', totalPages: '415', currentPage:'415'}
    ],
    otherState: 'some other value',
    showBooks: false,
    showCockpit: true,
    changeCounter: 0
  }

  static getDerivedStateFromProps(props, state) {
    console.log('[App.js] getDerivedStateFromProps',props);
    return state;
  }

  // componentWillMount() {
  //   console.log('[App.js] componentWillMount');
  // }

  componentDidMount() {
    console.log('[App.js] componentDidMount');
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('[App.js] shouldComponentUpdate');
    return true;
  }

  componentDidUpdate() {
    console.log('[App.js] componentDidUpdate');
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

    //prevState holds the vbalue of state BEFORE the setState is called by React
    //setState does batching, it is important to know which previous state we are working on
    // if multiple setStates are called, then it may lead to incorrect state being set
    this.setState((prevState, props) => {
      return {
        books: books,
        changeCounter: prevState.changeCounter+1
      };
      });
  };

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
    console.log('[App.js] render')
    let books = null;

    if (this.state.showBooks) {
      books = <Books 
              books={this.state.books}
              clicked={this.deleteBookHandler}
              changed={this.titleChangedHandler} />;
    }

    return (    
      <Auxillary>
        <button onClick={() => {
            this.setState({showCockpit: false});
          }}
          >
            Remove Cockpit
          </button>
          {this.state.showCockpit ? <Cockpit 
          title={this.props.appTitle}
          showBooks={this.state.showBooks}
          booksLength={this.state.books.length}
          clicked={this.toggleBooksHandler}/> : null }
        {books}
      </Auxillary>
    );
    //return React.createElement('div',{className:'App'}, React.createElement('h1',null,'Hi, I\'m a React App!!!'));
  }
}

export default withClass(App, classes.App);
