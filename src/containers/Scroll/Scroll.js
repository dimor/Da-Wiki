import classes from "./Scroll.module.css";
import React from 'react';

const Scroll =(props)=>{
    console.log('Scroll  - rendering');
    return(
        <div className={classes.Scroll}>
            {props.children}
        </div>
    )


}

const isEqual =(prevProps, nextProps) => {

    if(prevProps.pageid !== nextProps.pageid || prevProps.cards !==nextProps.cards){
        return false;
    }else{
        return true;
    }
  }



export default React.memo(Scroll,isEqual);