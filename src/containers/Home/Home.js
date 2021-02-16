import React, {useState, useEffect, useCallback } from 'react';
import classes from './Home.module.css';
import Cards from "../../components/Cards/Cards";
import { useDispatch, useSelector } from 'react-redux';
import * as actions from '../../store/actions/index'
import { Spinner } from 'react-spinners-css';
import firebase from '../../firebase';
import { LOADER_COLOR, APP_BACKGROUND_COLOR } from '../../constants';
import withErrorHandler from '../../containers/withErrorHandler/withErrorHandler';
import axios from 'axios';
import Modal from '../../components/UI/Modal/Modal';

const Home = props => {

    const cards = useSelector(state => state.indx.cards);
    let fav_error = useSelector(state => state.favorite.error);
    const dispatch = useDispatch();
    const currentUser = firebase.auth().currentUser;
    const fetchCards = useCallback(() => dispatch(actions.fetchCards()), [dispatch]);
    const fetchFavoriteUserIds = dispatch(actions.fetchFavoriteUserIds(currentUser));
    const [error,setError] = useState(null);


    useEffect(() => {
        if (!cards.length) {
            fetchCards();
            if (currentUser && !cards.length) {
                fetchFavoriteUserIds();
                console.log('fetchUserIDs - Home');
            } else {
                console.log('No user Detected');
            }
            console.log('Home use Effect');
        }
    }, []);



    const clearErr =()=>{
        setError(null)
    }


    return (
        <React.Fragment>
            <div style={{ backgroundColor: APP_BACKGROUND_COLOR }} className={classes.Home}>
                {console.log('Home - Rendering')}
                {cards.length ? <Cards cards={cards} /> : <Spinner color={LOADER_COLOR} />}
            </div>
            <Modal
                show={fav_error}
                close={clearErr}>
                {error ? <p style={{ textAlign: 'center', fontSize: '2rem' }}>{error.message}</p> : null}
            </Modal>
        </React.Fragment>
    )
}



export default withErrorHandler(Home, axios);