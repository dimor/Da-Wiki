import * as actionTypes from './actionTypes';
import firebase from '../../firebase';
import axios from 'axios';



export const clearFavoriteUserIds = () => {
    return { type: actionTypes.CLEAR_FAVORITE_USER_LIKES };
}


export const clearFavorites = () => {
    return { type: actionTypes.CLEAR_FAVORITES };
}




export const fetchFavoriteUserIdsStart = () => {
    return { type: actionTypes.FETCH_FAVORITE_USERIDS_START };
}



export const fetchFavoriteUserIdsSuccess = (ids) => {
    return {
        type: actionTypes.FETCH_FAVORITE_USERIDS_SUCCESS,
        ids: ids
    };
}

export const fetchFavoriteUserIdsFailed = (error) => {
    return {
        type: actionTypes.FETCH_FAVORITE_USERIDS_FAILED,
        error: error
    };
}

export const fetchFavoriteUserIds = (currentUser) => dispatch => {

    const db = firebase.firestore();
    const userFavoriteIdsArray = [];

        if(currentUser){
            db.collection(currentUser.uid).get().then(querySnapshot => {
                dispatch(fetchFavoriteUserIdsStart())
                querySnapshot.forEach(doc => {
                    userFavoriteIdsArray.push(doc.id);
                })
            }
            ).then(() => {
                dispatch(fetchFavoriteUserIdsSuccess(userFavoriteIdsArray))
                dispatch(fetchFavoriteCards(userFavoriteIdsArray))
            }).catch(error=>{
                dispatch(fetchFavoriteUserIdsFailed(error))
            });
        }

}



export const fetchFavoriteCards=(favoriteIdsArray)=>dispatch=>{

    let cards = [];

    if(favoriteIdsArray.length){
        dispatch(fetchFavoriteCardsStart())
        const pageids = favoriteIdsArray.join('|')
        const url = `https://corsto.herokuapp.com/https://he.wikipedia.org/w/api.php?%20format=json&action=query&pageids=${pageids}&prop=extracts|pageimages|info&exsentences=2&exintro=&explaintext=&utf8=1&formatversion=2&piprop=thumbnail&pithumbsize=300&pilicense=any&inprop=url`;
        axios.get(url).then(res => {
             cards = res.data.query.pages;
            dispatch(fetchFavoriteCardsSuccess(cards))
        }).catch(error=>{
            dispatch(fetchFavoriteCardsFailed(error))
        })
    }else{
        dispatch(fetchFavoriteCardsSuccess(cards))
    }
}


export const fetchFavoriteCardsStart = () => {
    return { type: actionTypes.FETCH_FAVORITE_CARDS_START };
}

export const fetchFavoriteCardsSuccess = (cards) => {
    return {
        type: actionTypes.FETCH_FAVORITE_CARDS_SUCCESS,
        cards: cards
    };
}

export const fetchFavoriteCardsFailed = (error) => {
    return {
        type: actionTypes.FETCH_FAVORITE_CARDS_FAILED,
        error: error
    };
}



export const cardLikeSuccess = (pageid,isIdExist,item) =>{
    return{
        type:actionTypes.LIKE_CARD_SUCCESS,
        pageid,
        isIdExist,
        item
    }
}


export const cardLikeFailed = (error) =>{
    return{
        type:actionTypes.LIKE_CARD_FAILED,
        error:error
    }
}


export const cardLikeStart = () =>{
    return{
        type:actionTypes.LIKE_CARD_START
    }
}


export const onLikeCard = (db,user,pageid,isIdExist,item)=>dispatch=>{

    console.log('action - onliked card ',item);

    dispatch(cardLikeStart());
    let dbReference;
    if(!isIdExist){
        dbReference = db.collection(user.uid).doc(`${pageid}`).set({});
    }else{
        dbReference = db.collection(user.uid).doc(`${pageid}`).delete();
    }
    dbReference.then( ()=> {
        dispatch(cardLikeSuccess(pageid,isIdExist,item)); 
        dispatch(clearFavorites())
    })
    .catch((error)=> {
        dispatch(cardLikeFailed(error));
        console.log(error);
    });
}
