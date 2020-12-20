
import Modal from '../UI/Modal/Modal';
import Like from './Like/Like';
import classes from './SocialButtons.module.css';
import Website from './Website/Website';
import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom'
import firebase from '../../firebase';
import { Default } from 'react-spinners-css';
import { useDispatch, useSelector } from 'react-redux';
import * as actions from '../../store/actions/index';
import {LOADER_COLOR} from '../../constants';


const SocialButtons = props => {

    const [showModal, setModal] = useState(false);
    const user = firebase.auth().currentUser;
    const db = firebase.firestore();
    const dispatch = useDispatch();
    const pageid = props.pageid;
    const onLikeCard = (db, user, pageid, isIdExist) => dispatch(actions.onLikeCard(db, user, pageid, isIdExist))
    const likeLoader = useSelector(state => state.favorite.likeLoader);
    const favoriteIds = useSelector(state => state.favorite.userFavoriteIds);
    const [isLikePressed, setOnLikePressed] = useState(false);





    const likeClicked = () => {
        if (user) {
            let isIdExist = favoriteIds.includes(`${pageid}`);
            onLikeCard(db, user, pageid, isIdExist);
        } else {
            setModal(true);
        }

    }


    useEffect(()=>{
        setOnLikePressed(false);
        if(favoriteIds.includes(`${pageid}`)){
            setOnLikePressed(true)
        }
    },[favoriteIds,pageid])


    const toggleModal = () => {
        setModal((pre) => !pre);
    }


    const socialClasses = [classes.SocialButtons];

    if (props.item) {
        socialClasses.push(classes.Item)
    }


    let modal = props.item
        ? null
        :
        <Modal show={showModal} close={toggleModal}>
            <div
                className={classes.PleaseLogin}>
                <h3>על מנת להשתמש במועדפים יש להיכנס למערכת</h3>
                <NavLink to="/login">הכנס</NavLink>
            </div>
        </Modal>

    return (
        <React.Fragment>
            <div className={socialClasses.join(' ')}>
                {likeLoader ? <Default color={LOADER_COLOR} size={44} /> : <Like exist={isLikePressed} clicked={likeClicked} />}
                <Website url={props.url} />
            </div>
            {modal}
        </React.Fragment>
    )
}


const willRender = (prevProps, nextProps) => {
    if (prevProps.pageid !== nextProps.pageid) {
        return false;
    } else {
        return true;
    }
}

export default React.memo(SocialButtons, willRender);