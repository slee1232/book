import React from 'react';

import classes from './Book.css';


const book = (props) => {
    return (
        <div className={classes.Book}>
            <p onClick={props.click}>This book is called "{props.title}" and have {props.totalPage} pages! Currently read {props.currentPage} pages. </p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} value={props.title}/>
        </div>
    );
};

export default book;