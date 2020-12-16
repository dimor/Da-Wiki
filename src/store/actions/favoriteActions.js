import * as actionTypes from './actionTypes';
import firebase from 'firebase';
import axios from 'axios';



export const clearFavoriteUserIds = () => {
    return { type: actionTypes.CLEAR_FAVORITE_USER_LIKES };
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

export const fetchFavoriteUserIds = (currentUser,favorites) => dispatch => {

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
            });
        }

}



export const fetchFavoriteCards=(favoriteIdsArray)=>dispatch=>{
    if(favoriteIdsArray.length){
        dispatch(fetchFavoriteCardsStart())
        const pageids = favoriteIdsArray.join('|')
        const url = `https://cors-anywhere.herokuapp.com/https://he.wikipedia.org/w/api.php?%20format=json&action=query&pageids=${pageids}&prop=extracts|pageimages|info&exsentences=2&exintro=&explaintext=&utf8=1&formatversion=2&piprop=thumbnail&pithumbsize=300&pilicense=any&inprop=url`;
        axios.get(url).then(res => {
            const cards = res.data.query.pages;
            dispatch(fetchFavoriteCardsSuccess(cards))
        })
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



export const cardLikeSuccess = (pageid,isIdExist,index) =>{
    return{
        type:actionTypes.LIKE_CARD_SUCCESS,
        pageid,
        isIdExist,
        index
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


export const onLikeCard = (db,user,pageid,isIdExist,index)=>dispatch=>{
    dispatch(cardLikeStart());
    let dbReference;
    console.log(isIdExist);
    if(!isIdExist){
        dbReference = db.collection(user.uid).doc(`${pageid}`).set({});
    }else{
        dbReference = db.collection(user.uid).doc(`${pageid}`).delete();
    }

    dbReference.then( ()=> {
        dispatch(cardLikeSuccess(pageid,isIdExist,index)); 
    })
    .catch((error)=> {
        dispatch(cardLikeFailed(error));
        console.log(error);
    });
}
