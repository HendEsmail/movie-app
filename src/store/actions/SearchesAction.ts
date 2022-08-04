import { Get_Searches } from "../actionTypes"

export  const GetSearches=(movie:{})=>({
    type:Get_Searches,
    payload:movie
} );