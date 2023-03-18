export const SET_PASSWORD = 'SET_PASSWORD'
export const SET_LOGIN_STATUS = 'SET_LOGIN_STATUS'
export const SET_PERM_WALLET = 'SET_PERM_WALLET'
export const SET_PERM_BAB = 'SET_PERM_BAB'
export const SET_PERM_TWITTER = 'SET_PERM_TWITTER'

export const SET_PERM = 'SET_PERM'

export const setPassword = (password) => {
    return {
        type: SET_PASSWORD,
        payload: password
    }
}

export const setLoginStatus = (status) => {
    return {
        type: SET_LOGIN_STATUS,
        payload: status
    }
}

export const setPerm = (name, value) => {
    return {
        type: SET_PERM,
        payload: [name, value]
    };

    // switch (name.toLowerCase()) {
    //     case "wallet":
    //         return { type: SET_PERM_WALLET, payload: value };
    //     case "bab":
    //         return { type: SET_PERM_BAB, payload: value };
    //     case "twitter":
    //         return { type: SET_PERM_TWITTER, payload: value };
    //     default:
    //         return { type: "UNKNOWN", payload: value };
    // }
}