
import classes from './Favorites.module.css';
import FavoriteItem from '../../components/FavoriteItem/FavoriteItem';
import Scroll from '../../containers/Scroll/Scroll';
import * as actions from '../../store/actions/index';
import { useDispatch, useSelector } from 'react-redux';
import React, { useEffect } from 'react';
import firebase from '../../firebase';
import { Default } from 'react-spinners-css';
import { Redirect } from 'react-router-dom';
import EmptyFavorites from '../../components/EmptyFavorites/EmptyFavorites';
import { Spinner } from 'react-spinners-css';
import { LOADER_COLOR } from '../../constants';



const Favorites = () => {

    const dispatch = useDispatch();
    const cards = useSelector(state => state.favorite.cards);
    let loading = useSelector(state => state.favorite.loading);
    const currentUser = firebase.auth().currentUser;
    const favoriteIds = useSelector(state => state.favorite.userFavoriteIds);
    console.log('Favorite -render' + favoriteIds);

    useEffect(() => {
        if (currentUser) {

        dispatch(actions.fetchFavoriteUserIds(currentUser));

        }
    }, [currentUser])


    let cardList = cards.length>0?cards.map((card, index) => <FavoriteItem index={index} key={card.pageid} card={card} />):<EmptyFavorites />


    console.log(cardList);


    return (
        <>
            {!currentUser ? <Redirect to={"/"} /> : null}
            <div className={classes.Wrapper}>
                <div className={classes.Favorites} >
                    <Scroll cards={cards} height={'100%'}>
                    {loading?<Spinner color={LOADER_COLOR} />:cardList}
                    </Scroll>
                </div>
            </div>
        </>
    );
}


export default Favorites;