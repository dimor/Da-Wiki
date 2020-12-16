
import * as actionsTypes from '../actions/actionTypes';
const initialState = {

    cards: [],
    error: '',
    loading: true,
    current: 0,
    isSignin: false,

}




const reducer = (state = initialState, action) => {


    switch (action.type) {
        case actionsTypes.FETCH_CARDS_START:
            return { ...state };
        case actionsTypes.FETCH_CARDS_SUCCESS:
            return { ...state, loading: false, cards: state.cards.concat(action.cards) }
        case actionsTypes.FETCH_CARDS_FAILED:
            return { ...state, loading: false, error: action.error }
        case actionsTypes.SET_NEXT_CARD:
            return { ...state, current: state.current + 1 }
        case actionsTypes.SET_PREVIOUS_CARD:
            return { ...state, current: state.current - 1 }
        case actionsTypes.SET_LOADING:
            return { ...state, loading: true }
            
        default: return state;


    }
}

export default reducer;
