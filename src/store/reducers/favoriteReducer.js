
import * as actionTypes from '../../store/actions/actionTypes';

const initialState = {
    userFavoriteIds: [],
    cards:[],
    loading: false,
    likeLoader: false,
    likeError: ''
}



const cardLikeAction = (state, action) => {

    let listUserFavoriteIds;
    let listOfCards = [...state.cards]


    if (action.isIdExist) {

        listUserFavoriteIds = state.userFavoriteIds.filter(id => id !== `${action.pageid}`);
        console.log(listOfCards);
        listOfCards.splice(action.index,1);


    } else {

        listUserFavoriteIds = state.userFavoriteIds.concat(`${action.pageid}`)
    }



    return { ...state, likeLoader: false, loading: false, userFavoriteIds: listUserFavoriteIds , cards:listOfCards   }

}




const favoriteReducer = (state = initialState, action) => {

    switch (action.type) {
        case actionTypes.FETCH_FAVORITE_USERIDS_START:
            return { ...state, loading: true };
        case actionTypes.FETCH_FAVORITE_USERIDS_SUCCESS:
            return { ...state, userFavoriteIds: action.ids, loading: false };
        case actionTypes.FETCH_FAVORITE_USERIDS_FAILED:
            return { ...state, error: action.error, loading: false };
        case actionTypes.FETCH_FAVORITE_CARDS_START:
            return { ...state, loading: true };
        case actionTypes.FETCH_FAVORITE_CARDS_SUCCESS:
            return { ...state, cards: action.cards, loading: false };
        case actionTypes.FETCH_FAVORITE_CARDS_FAILED:
            return { ...state, error: action.error, loading: false };
        case actionTypes.LIKE_CARD_START:
            return { ...state, likeLoader: true }
        case actionTypes.LIKE_CARD_SUCCESS:
            return cardLikeAction(state, action);
        case actionTypes.LIKE_CARD_FAILED:
            return { ...state, likeLoader: false, likeError: action.error }
        case actionTypes.CLEAR_FAVORITE_USER_LIKES:
            return { ...state, userFavoriteIds: [] }
        default: return state;

    }


}

export default favoriteReducer;