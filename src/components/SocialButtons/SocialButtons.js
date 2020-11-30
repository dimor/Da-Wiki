
import Modal from '../UI/Modal/Modal';
import Like from './Like/Like';
import classes from './SocialButtons.module.css';
import Website from './Website/Website';
import React, { useState } from 'react';
import {NavLink} from 'react-router-dom'
import firebase from 'firebase';
import { Default } from 'react-spinners-css';
import {useDispatch,useSelector} from 'react-redux';
import * as actions from '../../store/actions/index';



const SocialButtons = props => {

    const [showModal, setModal] = useState(false);
    
    const user = firebase.auth().currentUser;
    const db = firebase.firestore();
    const dispatch = useDispatch();
    const pageid = props.pageid;
    const onLikeCard = (db,user,pageid)=> dispatch(actions.onLikeCard(db,user,pageid))
    const likeLoader = useSelector(state=> state.indx.likeLoader);

    const likeClicked = () => {
        if(user){
            onLikeCard(db,user,pageid);
        }else{
            setModal(true);
        }
      
    }

    const toggleModal = () => {
        setModal((pre) => !pre);
    }

    return (
        <React.Fragment>
            <div className={classes.SocialButtons}>
                {likeLoader?<Default size={44}/>:<Like clicked={likeClicked} />}
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