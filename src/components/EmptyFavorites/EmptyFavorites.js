import classes from './EmptyFavorites.module.css';
import { NavLink } from 'react-router-dom';
import React from 'react';

const EmptyFavorites = (props)=>{

 

    return(
        <div className={classes.EmptyFavorites}>
            <p> אין לך ערכים שמורים</p>
            <p> עבור למסך הבית כדי להתחיל לדעת</p>
            <NavLink className={classes.Links}  to="/">עבור למסך הבית</NavLink>
        </div>
    )
}

export default React.memo(EmptyFavorites);