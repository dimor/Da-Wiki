import classes from "./RndButton.module.css";
import {useSelector} from 'react-redux';
import { Ellipsis } from 'react-spinners-css';
import React from 'react';
const RndButton = (props) => {

    //const loading = useSelector(state => state.indx.loading);
    console.log('rndbutton -rendering' , props);    
    

           return(
               <button className={classes} onClick={props.click}>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                {props.loading?<Ellipsis size={32} color="#be97e8" />:<p className={classes.Title} > דע</p> }

            </button>);
     

    

   
}


export default RndButton;