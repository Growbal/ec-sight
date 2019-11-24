import { GETDATA } from '../actions';

export default (state = {}, action) => {
    switch(action.type){
        case GETDATA:
            return state;
        
        default:
            return state;
    }
}