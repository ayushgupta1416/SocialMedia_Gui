import { SET_ERRORS, LOADING_UI, CLEAR_ERRORS, SET_USER ,SET_UNAUTHENTICATED} from '../types';
import axios from 'axios';

export const loginUser = (userData, history) => (dispatch) => {
    dispatch({
        type: LOADING_UI
    });

    axios.post('/login', userData)
        .then(res => {
            console.log(res.data);
            const FBtoken = `Bearer ${res.data.token}`;
            localStorage.setItem('FBtoken', FBtoken);
            axios.defaults.headers.common['Authorization'] = FBtoken;
            dispatch(getUSerData());
            dispatch({
                type: CLEAR_ERRORS
            });
            history.push('/');
        })
        .catch(err => {
            dispatch({
                type: SET_ERRORS,
                payload: err.response.data
            });
        });

};
export const signupUser = (newUserData, history) => (dispatch) => {
    dispatch({
        type: LOADING_UI
    });

    axios.post('/signup', newUserData)
        .then(res => {
            console.log(res.data);
            const FBtoken = `Bearer ${res.data.token}`;
            localStorage.setItem('FBtoken', FBtoken);
            axios.defaults.headers.common['Authorization'] = FBtoken;
            dispatch(getUSerData());
            dispatch({
                type: CLEAR_ERRORS
            });
            history.push('/');
        })
        .catch(err => {
            dispatch({
                type: SET_ERRORS,
                payload: err.response.data
            });
        });

};
export const logoutUser = () => (dispatch) => {
    localStorage.removeItem('FBtoken');
    delete axios.defaults.headers.common['Authorization'];
    dispatch({ type: SET_UNAUTHENTICATED });
  };

export const getUSerData = () => (dispatch) => {
    axios.get('/user')
        .then(res => {
            //console.log(res.data);
            dispatch({
                type: SET_USER,
                payload: res.data
            });
        })
        .catch(err => {
            console.log(err);
        })
}