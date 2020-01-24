import React, {useEffect} from 'react';
import classes from './Cockpit.css';

const cockpit = (props) => {
    //useEffect always run first time initially by default
    useEffect(() => {
        console.log('[Cockpit.js] useEffect');
        // Http request...
        setTimeout(() => {
            alert('Saved data to cloud!');
        }, 1000)
    }, []);
    
    const assignedClasses = [];
    let btnClass ='';
    if (props.showBooks) {
        btnClass = classes.Red;
    }
    if (props.books.length <= 2) {
      assignedClasses.push(classes.red); //classes = ['red']
    }
    if (props.books.length <=1) {
      assignedClasses.push(classes.bold); //classes = ['red', 'bold']
    }

    return (
        <div className={classes.Cockpit}>
            <h1>{props.title}</h1>
            <p className={assignedClasses.join(' ')}>This is really working!</p>
            <button className={btnClass} onClick={props.clicked}>Update Books</button>
         </div>
    );
};

export default cockpit;