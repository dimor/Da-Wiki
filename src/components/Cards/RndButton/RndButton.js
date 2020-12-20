import classes from "./RndButton.module.css";
import {useSelector} from 'react-redux';
import { Ellipsis } from 'react-spinners-css';
import React from 'react';
import * as constants from '../../../constants';


const RndButton = (props) => {

    //const loading = useSelector(state => state.indx.loading);
    console.log('rndbutton -rendering' , props);    
    

           return(
               <button style={{color:constants.RND_BTN_COLOR}}  className={classes} onClick={props.click}>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                {props.loading?<Ellipsis size={32} color={constants.LOADER_COLOR} />:<p className={classes.Title} > דע</p>}
            </button>);     
}


export default RndButton;