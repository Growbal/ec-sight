import axios from 'axios';

export const GETDATA = 'GETDATA';

const ROOT_URL = '';
const QUERY_STRING = 'token';

export const getData = () => async dispatch =>{
    const response = await axios.get(`${ROOT_URL}/ ${QUERY_STRING}` , 
    { params: {
        word: 'hoge'
    }});
    console.log(response);
    
    dispatch({type: GETDATA , response })
}