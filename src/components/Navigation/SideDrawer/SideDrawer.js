import classes from './SideDrawer.module.css';
import Backdrop from '../../UI/Backdrop/Backdrop';
import Logo from '../../Logo/Logo';
import React from 'react';
import NavigationItems from '../NavigationItems/NavigationItems'
import { useSelector,useDispatch} from 'react-redux';
import User from '../../../components/User/User';
import firebase from '../../../firebase';
 import * as actions from '../../../store/actions/index';


const SideDrawer = props => {

    const { isDrawerOpen } = props;
    const dispatch = useDispatch();
    const signOut =(firebase)=>dispatch(actions.signOut(firebase))
    let SideDrawerClassses = [classes.SideDrawer]

    isDrawerOpen ? SideDrawerClassses.push(classes.Open) : SideDrawerClassses.push(classes.Close)

    const user = firebase.auth().currentUser;

    return (
        <React.Fragment>
            <Backdrop isOpen={props.isDrawerOpen} toggle={props.toggle} />
            <div className={SideDrawerClassses.join(' ')}>
                {user ? <User user={user} toggle={props.toggle} signOut={()=>signOut(firebase)} /> : <Logo />}
                <nav>
                    <NavigationItems isSignIn={user} toggle={props.toggle} />
                </nav>

            </div>

        </React.Fragment>)
}






export default SideDrawer;