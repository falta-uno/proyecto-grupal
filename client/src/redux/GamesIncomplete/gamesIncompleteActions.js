import axios from "axios";

export const GET_GAMES_INCOMPLETE = "GET_GAMES_INCOMPLETE";
export const GET_DETAIL_INCOMPLETE = "GET_DETAIL_INCOMPLETE";
export const GET_SEARCH_GAMES_INCOMPLETE = "GET_SEARCH_GAMES_INCOMPLETE";
export const ORDER_GAMES_INCOMPLETE = "ORDER_GAMES_INCOMPLETE";



export function getGamesIncomplete() {
    return dispatch =>{
      axios.get(`/games/gamesIncomplete`)   
        .then(res => {
          dispatch({
            type: GET_GAMES_INCOMPLETE,
            payload: res.data
          })
        })
        .catch(e=>
          console.log(e)
        )
              
    }
  }
  
  export function getDetailIncomplete(gameid) {
    
    return dispatch =>{
      axios.get(`/games/gamesIncomplete/${gameid}`)
        .then(res => {
          dispatch({
            type: GET_DETAIL_INCOMPLETE,
            payload: res.data
          })
        })
        .catch (e=>
          console.log(e)
        ) 
    }
  }
  export function getSearchGamesIncomplete(input,sport) {
    return dispatch =>{
      axios.get(`/games/${sport}/searchGameIncomplete?name=${input}`)   
        .then(res => {
          dispatch({
            type: GET_SEARCH_GAMES_INCOMPLETE,
            payload: res.data,
            
          })
        })
        .catch(e=>
          console.log(e)
        )
              
    }
  }

  export function gamesIncompleteOrderByAmount (order){
    return {
     type: ORDER_GAMES_INCOMPLETE,
     payload: order
};
}
