import classes from "./RndButton.module.css";
import { Ellipsis } from 'react-spinners-css';
import React from 'react';
import * as constants from '../../../constants';


const RndButton = (props) => {
    console.log('rndbutton -rendering' , props);    
    

           return(
               <button style={{color:constants.RND_BTN_COLOR}}  className={classes} onClick={props.click}>
                     {props.loading?<Ellipsis size={32} color={constants.LOADER_COLOR} />:<div>דע</div>}
                <span></span>
                <span></span>
                <span></span>
                <span></span>
             
            </button>);     
}


export default RndButton;