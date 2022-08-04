import { Get_Searches } from "../actionTypes";

export interface action {
    type: string,
    payload: []
}
const SearchesReducer = (state = [], action: action) => {
    switch (action.type) {
        case Get_Searches:
            console.log("------------");
            console.log("payload", action.payload);
            console.log("State", state);

        return [action.payload, ...state];
        default:
            return state;
    }
};

export default SearchesReducer;