import classes from './SideDrawer.module.css';
import Backdrop from '../../UI/Backdrop/Backdrop';
import Logo from '../../Logo/Logo';
import React from 'react';
import NavigationItems from '../NavigationItems/NavigationItems'
const SideDrawer = props => {

    const{isDrawerOpen} = props;

let SideDrawerClassses = [classes.SideDrawer]

isDrawerOpen?SideDrawerClassses.push(classes.Open):SideDrawerClassses.push(classes.Close)



return(   
<React.Fragment>
    <Backdrop isOpen={props.isDrawerOpen} toggle={props.toggle} />
    <div className={SideDrawerClassses.join(' ')}>
        <Logo />
        <nav>
            <NavigationItems toggle={props.toggle} />
        </nav>
    </div>

</React.Fragment>)
}
    





export default SideDrawer;