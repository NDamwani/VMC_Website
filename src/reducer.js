export const initialState = {
    basket: [],
};

const reducer = (state,action) => {
    console.log(action);
    switch(action.type){
        case 'ADD_TBASKET':
            return{
                ...state,
                basket:[...state.basket, action, action.item],
            };
        default:
            return state;

    }
};

export default reducer;