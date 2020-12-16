
import classes from './Modal.module.css';
import React from 'react';
import Backdrop from '../Backdrop/Backdrop';




const Modal = (props) => {




    let styles = props.show? classes.Open:classes.Close

    return (
        <>
        {console.log('modal -rendering',props)}
            <Backdrop isOpen={props.show} toggle={props.close}/>
            <div className={`${classes.Modal} ${styles}`}>{props.children}</div>
        </>

    )


}

 const willRender =(prevProps, nextProps) => {
    if(prevProps.show === nextProps.show){
        return true;
    }else{
        return false;
    }
  }


export default React.memo(Modal,willRender);