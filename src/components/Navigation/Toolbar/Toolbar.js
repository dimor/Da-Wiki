
import NavigationItems from '../NavigationItems/NavigationItems';
import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle';
import classes from './Toolbar.module.css';
import Logo from '../../Logo/Logo';
import React, { useState } from 'react';
import { TOOLBAR_COLOR } from '../../../constants';


const Toolbar = props => {



    return (<header style={{ backgroundColor: TOOLBAR_COLOR }} className={classes.Toolbar}>
        <Logo toolbar />
        <DrawerToggle toggle={props.toggle} />
        <nav>
            <NavigationItems />
        </nav>
    </header>
    )
}


export default Toolbar;