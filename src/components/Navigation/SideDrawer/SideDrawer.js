import classes from './SideDrawer.module.css';
import Backdrop from '../../UI/Backdrop/Backdrop';
import Logo from '../../Logo/Logo';
import React from 'react';
import NavigationItems from '../NavigationItems/NavigationItems'
import { useSelector } from 'react-redux';
import User from '../../../components/User/User';

const SideDrawer = props => {

    const { isDrawerOpen } = props;

    const userData = useSelector(state => state.auth.userData);


    let SideDrawerClassses = [classes.SideDrawer]

    isDrawerOpen ? SideDrawerClassses.push(classes.Open) : SideDrawerClassses.push(classes.Close)

    console.log(userData);

    return (
        <React.Fragment>
            <Backdrop isOpen={props.isDrawerOpen} toggle={props.toggle} />
            <div className={SideDrawerClassses.join(' ')}>
                {userData.uid ? <User userData={userData} /> : <Logo />}
                <nav>
                    <NavigationItems toggle={props.toggle} />
                </nav>

            </div>

        </React.Fragment>)
}






export default SideDrawer;