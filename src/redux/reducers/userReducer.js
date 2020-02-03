import { SET_ERRORS, LOADING_UI, CLEAR_ERRORS, SET_USER,SET_AUTHENTICATED, SET_UNAUTHENTICATED } from '../types';

const initialState = {
    authenticated: false,
    credentials: {},
    likes: [],
    notifications: [],
    loading:false

};

export default function (state = initialState, action) {
    switch (action.type) {
        case SET_AUTHENTICATED:
            return {
                ...state,
                authenticated: true
            };
        case SET_UNAUTHENTICATED:
            return initialState;
        case SET_USER:
            return {
                authenticated: true,
                loading:false,
                ...action.payload
            }
        case LOADING_UI:
            return{
                ...state,
                loading:true
            }

        
        default:
            return state;
    }
}