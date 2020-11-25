
import Modal from '../UI/Modal/Modal';
import Like from './Like/Like';
import classes from './SocialButtons.module.css';
import Website from './Website/Website';
import React, { useState } from 'react';
import {NavLink} from 'react-router-dom'

const SocialButtons = props => {

    const [showModal, setModal] = useState(false);

    const likeClicked = () => {
        //if SignIn => like 
        //else:
        setModal(true);
    }

    const toggleModal = () => {
        setModal((pre) => !pre);
    }

    return (
        <React.Fragment>
            <div className={classes.SocialButtons}>
                <Like clicked={likeClicked} />
                <Website url={props.url} />
            </div>
            <Modal show={showModal} close={toggleModal}>
                <div
                    className={classes.PleaseLogin}>
                    <h3>על מנת להשתמש במועדפים יש להיכנס למערכת</h3>
                   <NavLink to="/login">הכנס</NavLink>
                </div>
            </Modal>
        </React.Fragment>
    )
}


export default SocialButtons;