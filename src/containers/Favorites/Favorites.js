
import classes from './Favorites.module.css';
import FavoriteItem from '../../components/FavoriteItem/FavoriteItem';
import Scroll from '../../containers/Scroll/Scroll';
import * as actions from '../../store/actions/index';
import { useDispatch, useSelector } from 'react-redux';
import React, { useEffect } from 'react';
import firebase from '../../firebase';
import { Redirect } from 'react-router-dom';
import EmptyFavorites from '../../components/EmptyFavorites/EmptyFavorites';
import { Spinner } from 'react-spinners-css';
import { LOADER_COLOR } from '../../constants';



const Favorites = () => {

    const dispatch = useDispatch();
    const cards = useSelector(state => state.favorite.cards);
    let finished = useSelector(state => state.favorite.finished);
    const currentUser = firebase.auth().currentUser;
    const favoriteIds = useSelector(state => state.favorite.userFavoriteIds);
    console.log('Favorite -render' + favoriteIds);


    useEffect(() => {

        if (currentUser) {
            dispatch(actions.fetchFavoriteUserIds(currentUser));
        }

   
    }, [cards.length])



    let cardList = cards.length? cards.map((card, index) => <FavoriteItem index={index} key={card.pageid} card={card} />) : <EmptyFavorites />

    // if(cards.length === 0 &&  loading ) {
        
    // }




    // let cardList;
    // if (cards) {
    //     if (cards.length === 0) {

    //         if (finished) {
    //             cardList = <Spinner color={LOADER_COLOR} />
    //         } else {
    //             cardList = <EmptyFavorites />
    //         }



    //     } else {
    //         cardList = cards.map((card, index) => <FavoriteItem index={index} key={card.pageid} card={card} />);
    //     }
    // } else {
    //     cardList = <Spinner color={LOADER_COLOR} />
    // }



    console.log(" finished", finished);


    return (
        <>
            {!currentUser ? <Redirect to={"/"} /> : null}
            <div className={classes.Wrapper}>
                <div className={classes.Favorites} >
                    <Scroll cards={cards}>
                    { finished ===false?  <Spinner color={LOADER_COLOR} /> : cardList }
                    </Scroll>
                </div>
            </div>
        </>
    );
}


export default Favorites;