
import classes from './NavigationItems.module.css';
import NavigationItem from './NavigationItem/NavigatiomItem';
import React from 'react';
const NavigationItems = props => {

    const { isSignIn } = props;


    return (<ul onClick={props.toggle} className={classes.NavigationItems}>

        {isSignIn
            ? <React.Fragment>
                <NavigationItem link={'/'}>בית</NavigationItem>
                <NavigationItem link={'/favorites'}>מועדפים</NavigationItem>
                <NavigationItem link={'/category'}>קטגוריות</NavigationItem>
                <NavigationItem link={'/about'}>אודות</NavigationItem>
            </React.Fragment>
            : <React.Fragment>
                <NavigationItem link={'/'}>בית</NavigationItem>
                <NavigationItem link={'/login'}>כניסה</NavigationItem>
                <NavigationItem link={'/about'}>אודות</NavigationItem>
            </React.Fragment>
        }
    </ul>)

}
export default NavigationItems;