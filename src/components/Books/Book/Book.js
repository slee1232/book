import React, { Component } from 'react';

import classes from './Book.css';


class Book extends Component {
    render() {
    console.log('[Book.js] rendering...')
    return (
        <div className={classes.Book}>
            <p onClick={this.props.click}>This book is called "{this.props.title}" and have {this.props.totalPage} pages! Currently read {this.props.currentPage} pages. </p>
            <p>{this.props.children}</p>
            <input type="text" onChange={this.props.changed} value={this.props.title}/>
        </div>
        );
    }
};

export default Book;