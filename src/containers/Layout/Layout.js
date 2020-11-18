import React, { useState } from 'react';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';
import classes from './Layout.module.css';

const Layout = props => {

    const [isDrawerOpen, setDrawer] = useState(false);


    const toggleDrawer = props => {

        setDrawer(pre => !pre)

    }



    return (
        <React.Fragment>

            <Toolbar setDrawer={setDrawer} toggle={toggleDrawer} />

            <SideDrawer isDrawerOpen={isDrawerOpen} toggle={toggleDrawer} />

            <main className={classes.Layout}>
                {props.children}
            </main>


        </React.Fragment>
    )
}

export default Layout;