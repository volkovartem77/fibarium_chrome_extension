import {SET_LOGIN_STATUS, SET_PASSWORD, SET_PERM} from "./actions";

const defaultState = {
    password: "",
    login_status: false,

    perm_list: [{"k": "wallet", "v": true}, {"k": "twitter", "v": "@tom"}, {"k": "BAB", "v": true}],
    perms: {"wallet": false, "twitter": false, "BAB": false},
};

export const fetchDefaultPageReducer = (state = defaultState, action) => {
    switch (action.type) {
        case SET_PASSWORD:
            return { ...state, password: action.payload };
        case SET_LOGIN_STATUS:
            return { ...state, login_status: action.payload };
        case SET_PERM:
            let state_perms = { ...state.perms }
            state_perms[action.payload[0]] = action.payload[1]

            return { ...state, perms: state_perms };
        default:
            return state;
    }
};