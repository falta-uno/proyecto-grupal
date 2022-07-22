import axios from "axios";

export const GET_FIELDS = 'GET_FIELDS';


export default function getAllFields() {
    return async function (dispatch) {
        const response = await axios.get('http://localhost:3001/fields');
        return dispatch({ type: GET_FIELDS, payload: response.data })
    }
}

