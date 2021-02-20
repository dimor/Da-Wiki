import classes from './EmptyFavorites.module.css';
import { NavLink } from 'react-router-dom';


const EmptyFavorites = (props)=>{

 

    return(
        <div className={classes.EmptyFavorites}>
            {props.loading?<p>Loading...</p>:null}
            <p> אין לך ערכים שמורים</p>
            <p> עבור למסך הבית כדי להתחיל לדעת</p>
            <NavLink className={classes.Links}  to="/">עבור למסך הבית</NavLink>
        </div>
    )
}

export default EmptyFavorites;