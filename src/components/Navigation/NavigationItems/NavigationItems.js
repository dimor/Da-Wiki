
import classes from './NavigationItems.module.css';
import NavigationItem from './NavigationItem/NavigatiomItem';
import React from 'react';
import firebase from '../../../firebase';
import { useSelector, useDispatch } from 'react-redux';
import { Default } from 'react-spinners-css';
import { LOADER_COLOR } from '../../../constants';

const NavigationItems = props => {


    let NavigationItems = <ul onClick={props.toggle} className={classes.NavigationItems}>
        <React.Fragment>
             <NavigationItem link={'/'}>בית</NavigationItem>
            {props.user ? <NavigationItem link={'/favorites'}>מועדפים</NavigationItem> : <NavigationItem link={'/login'}>כניסה</NavigationItem>}
            <NavigationItem link={'/about'}>אודות</NavigationItem>
        </React.Fragment>
    </ul>

    return (NavigationItems)

}
export default NavigationItems;