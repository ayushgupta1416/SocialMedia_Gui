import { SET_ERRORS, LOADING_USER, CLEAR_ERRORS, SET_USER, SET_AUTHENTICATED, SET_UNAUTHENTICATED, LIKE_SCREAM, UNLIKE_SCREAM ,DELETE_SCREAM} from '../types';

const initialState = {
    authenticated: false,
    credentials: {},
    likes: [],
    notifications: [],
    loading: false

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
                loading: false,
                ...action.payload
            }
        case LOADING_USER:
            return {
                ...state,
                loading: true
            }
        case LIKE_SCREAM:
            return {
                ...state,
                likes: [
                    ...state.likes,
                    {
                        userHandle: state.credentials.handle,
                        screamId: action.payload.screamId
                    }
                ]
            };
        case UNLIKE_SCREAM:
            return {
                ...state,
                likes: state.likes.filter(
                    (like) => like.screamId !== action.payload.screamId
                )
            };
        case DELETE_SCREAM:
            let index = state.screams.findIndex(
                (scream) => scream.screamId === action.payload
            );
            state.screams.splice(index, 1);
            return {
                ...state
            };


        default:
            return state;
    }
}