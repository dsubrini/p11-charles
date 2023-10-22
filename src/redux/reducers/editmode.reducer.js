const initialState = {
    edit: false
};

export const editmodeReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'TOGGLE_MODE':
            return {edit: !state.edit}
        default:
            return {...state }
    }
}