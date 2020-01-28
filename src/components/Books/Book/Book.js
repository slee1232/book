import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import classes from './Book.css';
import withClass from '../../../hoc/withClass';



class Book extends Component {
    render() {
    console.log('[Book.js] rendering...')
    return (
        <Fragment>
            <p onClick={this.props.click}>This book is called "{this.props.title}" 
                and have {this.props.totalPage} pages! Currently read 
                {this.props.currentPage} pages. </p>
            <p>{this.props.children}</p>
            <input type="text" onChange={this.props.changed} value={this.props.title}/>
        </Fragment>
        );
    }
};

Book.propTypes = {
    click: PropTypes.func,
    title: PropTypes.string,
    currentPage: PropTypes.number,
    totalPage: PropTypes.number,
    changed: PropTypes.func
};

export default withClass(Book,classes.Book);