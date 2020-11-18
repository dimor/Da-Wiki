
import classes from './Modal.module.css';
import React from 'react';
import Backdrop from '../Backdrop/Backdrop';




const Modal = (props) => {


    let styles = props.show? classes.Open:classes.Close

    return (
        <React.Fragment>
            <Backdrop isOpen={props.show} toggle={props.clearUrl}/>
            <div className={`${classes.Modal} ${styles}`}>{props.children}</div>
        </React.Fragment>

    )


}


export default Modal;