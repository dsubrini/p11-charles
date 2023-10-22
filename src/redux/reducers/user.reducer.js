const initialState = {
    id: '',
    userName: '',
    firstName: '',
    lastName: '',
    email: '',
    token: null,
}

export const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'LOGIN':
            return { ...state, ...action.payload}
         
        case 'LOGOUT':
            return { ...initialState }
        default:
            return {...state }
    }
}