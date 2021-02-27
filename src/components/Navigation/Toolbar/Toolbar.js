
import NavigationItems from '../NavigationItems/NavigationItems';
import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle';
import classes from './Toolbar.module.css';
import Logo from '../../Logo/Logo';
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { TOOLBAR_COLOR } from '../../../constants';
import firebase from '../../../firebase';
import User from '../../../components/User/User';
import * as actions from '../../../store/actions/index';


const Toolbar = props => {
    
    let {user} = props;

    const dispatch = useDispatch();

    const signOut = (firebase) => dispatch(actions.signOut(firebase))

   

    return (<header style={{ backgroundColor: TOOLBAR_COLOR }} className={classes.Toolbar}>
        {user && window.innerWidth>=768 ? <User toolbar user={user} toggle={props.toggle} signOut={() => signOut(firebase)} /> : <Logo toolbar />}
        <DrawerToggle toggle={props.toggle} />
        <nav>
            <NavigationItems user={user} />
        </nav>
    </header>
    )
}


export default Toolbar;