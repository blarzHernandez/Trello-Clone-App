import * as types  from "../constants/ActionTypes";
const nextListid = 0;
export const addList = (listTitle,cards,position) =>({ 
        type:types.ADD_LIST,
        id:nextListid++,
        listTitle,
        cards,
        position
    
});
