import classes from './SideDrawer.module.css';
import Backdrop from '../../UI/Backdrop/Backdrop';
import Logo from '../../Logo/Logo';
import React from 'react';
import NavigationItems from '../NavigationItems/NavigationItems'
import { useSelector, useDispatch } from 'react-redux';
import User from '../../../components/User/User';
import * as actions from '../../../store/actions/index';
import {SIDE_DRAWER_COLOR } from '../../../constants';
import firebase from '../../../firebase';

const SideDrawer = props => {

    const { isDrawerOpen,user } = props;
    const dispatch = useDispatch();
    const signOut = (firebase) => dispatch(actions.signOut(firebase))
    let SideDrawerClassses = [classes.SideDrawer]




    isDrawerOpen ? SideDrawerClassses.push(classes.Open) : SideDrawerClassses.push(classes.Close)


    return (
        <React.Fragment>
            <Backdrop isOpen={props.isDrawerOpen} toggle={props.toggle} />
            <div style={{ backgroundColor:SIDE_DRAWER_COLOR}} className={SideDrawerClassses.join(' ')}>
                {user ? <User user={user} toggle={props.toggle} signOut={() => signOut(firebase)} /> : <Logo />}
                <nav>
                    <NavigationItems user={user} toggle={props.toggle} />
                </nav>

            </div>

        </React.Fragment>)
}






export default SideDrawer;