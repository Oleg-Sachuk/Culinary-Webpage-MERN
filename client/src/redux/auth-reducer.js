import { AuthAPI } from "../api/AuthAPI";
import { useHttp } from "../hooks/http.hook";

let initialstate = {
    userId: null,
    loggedId: null,
    email: null,
    isFetching: false,
    isAuth: false,
}

const authReducer = (state = initialstate, action) => {
    switch (action.type) {
        case 'SET-USER-DATA': {
            return {
                ...state,
                ...action.data,
                isAuth: action.data.isAuth
            }
        }
        case 'LOGGED-USER-DATA': {
            return {
                ...state,
                loggedId: action.userId
            }
        }
        case 'TOGGLE-IS-FETCHING':
            return {
                ...state,
                isFetching: action.isFetching
            }
        default: return state;
    }
}

export const SetAuthUserData = (userId, email, login, isAuth) => ({
    type: 'SET-USER-DATA', data: { userId, email, login, isAuth }
})

export const VerifyAuthUserData = (userId) => ({
    type: 'LOGGED-USER-DATA', userId
})

export const setisFetching = (isFetching) => ({
    type: 'TOGGLE-IS-FETCHING', isFetching
})

export const getSignIn = (userinfo) => {
    return async (dispatch) => {
        dispatch(setisFetching(true));
        let data = AuthAPI(userinfo);
            if (data.status === 200) {
                let { id, email } = data.data;
                dispatch(VerifyAuthUserData(id));
                dispatch(SetAuthUserData(id, email, true));                
                dispatch(setisFetching(false));
            }
    }
}


// export const getSignOut = () => {
//     return async (dispatch) => {
//         dispatch(setisFetching(true));
//         let data = await AuthAPI.LogOutUser();
//             if (data.resultCode === 0) {
//                 dispatch(SetAuthUserData(null, null, null, false));
//                 dispatch(setisFetching(false));
//             }
//     }
// }

export default authReducer;