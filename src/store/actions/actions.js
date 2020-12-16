import * as actionTypes from './actionTypes';
import axios from 'axios';

export const cardsFetchStart = () => {

    return {
        type: actionTypes.FETCH_CARDS_START
    }
}

export const cardsFetchFailed = (error) => {
    return {
        type: actionTypes.FETCH_CARDS_FAILED,
        error: error
    }
}

export const cardsFetchSuccess = (cards) => {
    return {
        type: actionTypes.FETCH_CARDS_SUCCESS,
        cards: cards
    }
}

export const setLoading = () => {
    return {
        type: actionTypes.SET_LOADING
    }
}





export const setForward = (current,cards) => {
    return dispatch=>{

        if(!cards[current+1]){
            dispatch(setLoading())
        }else{

            if(current===cards.length-5){
                dispatch(fetchCards())
            }
    
    
            dispatch(setNextCard()) 
        }

    }
}


export const setNextCard = () => {
    return {
        type: actionTypes.SET_NEXT_CARD
    }
}


export const setPreviousCard = () => {
    return {
        type: actionTypes.SET_PREVIOUS_CARD
    }
}


export const fetchCards = () => {
    return (dispatch) => {
        dispatch(cardsFetchStart())
        const url = 'https://cors-anywhere.herokuapp.com/https://he.wikipedia.org/w/api.php?%20format=json&action=query&prop=extracts|pageimages|info&exsentences=2&exintro=&explaintext=&generator=random&grnlimit=10&grnnamespace=0&utf8=1&formatversion=2&piprop=thumbnail&pithumbsize=300&pilicense=any&redirect=1&inprop=url';
        axios.get(url).then(res => {
            const cards = res.data.query.pages;
            const filteredCards = cards.filter(card => !card.extract.includes('האם התכוונתם ל'));
            dispatch(cardsFetchSuccess(filteredCards))
        })
            .catch(error => {
                console.log((error));
                dispatch(cardsFetchFailed(error))
            })
    }
}