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
        return () => {
            console.log('Cockpit.js cleanup work in useEffect');
        };
    }, []);

    useEffect(() => {
        console.log('[Cockpit.js] 2nd useEffect');
        return () => {
            console.log('Cockpit.js 2nd cleanup work in useEffect');
        };
    });
    
    const assignedClasses = [];
    let btnClass ='';
    if (props.showBooks) {
        btnClass = classes.Red;
    }
    if (props.booksLength <= 2) {
      assignedClasses.push(classes.red); //classes = ['red']
    }
    if (props.booksLength <=1) {
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

export default React.memo(cockpit);