import {p1,p2,p3,p4,p5, p6, p7, p8} from './../Users';

const initState = [p7, p6, p8, p1,p2,p3,p4,p5];

export const users = (state = initState, action) =>{
    switch(action.type){
        case 'ADD_USER': return[].concat(state, action.payload);
        default: return state;
    }
}