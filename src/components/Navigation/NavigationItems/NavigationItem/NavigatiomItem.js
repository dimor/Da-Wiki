
import classes from './NavigationItem.module.css';
import { NavLink } from 'react-router-dom';


const NavigationItem = props => {

    return (
        <li className={classes.Link}><NavLink exact activeStyle={{color:'yellow',textDecoration:'underline'}} to={props.link}>{props.children}</NavLink></li>
    );
}


export default NavigationItem;

