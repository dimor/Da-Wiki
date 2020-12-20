import React, { useEffect, useCallback } from 'react';
import classes from './Home.module.css';
import Cards from "../../components/Cards/Cards";
import { useDispatch, useSelector } from 'react-redux';
import * as actions from '../../store/actions/index'
import { Spinner } from 'react-spinners-css';
import firebase from '../../firebase';
import {LOADER_COLOR,APP_BACKGROUND_COLOR} from '../../constants';


const Home = props => {
    const cards = useSelector(state => state.indx.cards);
    const dispatch = useDispatch();
    const currentUser = firebase.auth().currentUser;
    const fetchCards = useCallback(() => dispatch(actions.fetchCards()), [dispatch]);
    const fetchFavoriteUserIds = dispatch(actions.fetchFavoriteUserIds(currentUser));

    useEffect(() => {
        if (!cards.length) {
            fetchCards();
            if (currentUser) {
               fetchFavoriteUserIds();
                console.log('fetchUserIDs - Home');
            } else {
                console.log('No user Detected');
            }
            console.log('Home use Effect');
        }
    }, []);





    return (
        <div style={{backgroundColor:APP_BACKGROUND_COLOR}} className={classes.Home}>
            {console.log('Home - Rendering')}
            {cards.length ? <Cards cards={cards} /> : <Spinner color={LOADER_COLOR} />}
        </div>
    )
}


export default Home;