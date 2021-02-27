import React, { useState } from 'react';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';
import classes from './Layout.module.css';
import firebase from '../../firebase';
import {useSelector} from 'react-redux'


const Layout = props => {

    const [isDrawerOpen, setDrawer] = useState(false);


    const toggleDrawer = props => {

        setDrawer(pre => !pre)

    }


    // const user = firebase.auth().currentUser;
    const user = useSelector(state => state.auth.user);
    

    return (
        <React.Fragment>

            <Toolbar user={user} setDrawer={setDrawer} toggle={toggleDrawer} />

            <SideDrawer  user={user} isDrawerOpen={isDrawerOpen} toggle={toggleDrawer} />

            <main className={classes.Layout}>
                {props.children}
            </main>


        </React.Fragment>
    )
}

export default Layout;