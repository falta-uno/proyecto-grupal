 import axios from "axios";

 export const GET_GAME_SPORT = "GET_GAME_SPORT"
 export const GET_SEARCH_GAME_SPORT = "GET_SEARCH_GAME_SPORT"
 export const GAMES_ORDER = "GAMES_ORDER"

 
 export function getGameSport(sport) {
  
    return dispatch =>{
      axios.get(`/games/${sport}`)
        .then(res => {
          console.log("entro", res.data)
          dispatch({
            type: GET_GAME_SPORT,
            payload: res.data
          })
        })
        .catch (e=>
          console.log(e)
        ) 
    }
  }
  
  export function getSearchGames(input,sport) {
  
    return dispatch =>{
      axios.get(`/games/${sport}/searchGame?name=${input}`)
        .then(res => {
          console.log("entro", res.data)
          dispatch({
            type: GET_SEARCH_GAME_SPORT,
            payload: res.data
          })
        })
        .catch (e=>
          console.log(e)
        ) 
    }
  }


  export function gamesOrderByPrice (order){
      return {
       type: GAMES_ORDER,
       payload: order
  };
  }

  // export const getSearchGame=(input,sport)=>{
  //   return async function (dispatch){
  //     return axios.get("/owner/createGame",body)
  //     .then((res)=> {
  //         console.log("llega al reducer",res)
  //         return dispatch({type:CREATE_GAME,payload:res})})
  // }   }


  // export function getAllFields(sport) {
  //   return dispatch =>{
  //     axios.get(`/fields/${sport}`)
  //       .then(res => {
  //         dispatch({
  //           type: GET_FIELDS,
  //           payload: res.data
  //         })
  //       })
  //       .catch (e=>
  //         console.log(e)
  //       ) 
  //   }
  // }