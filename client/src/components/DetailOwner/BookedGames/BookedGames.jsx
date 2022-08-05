import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';


export default function BookedGames() {
    let owner = useSelector((state) => state.getOwnerReducer.owner)
    const [bookedGames, setBookedGames] = useState([])
    // const [bookedGame, setBookedGame] = useState({
    //     date: "",
    //     end: "",
    //     fieldId: '',
    //     id: '',
    //     link: '',
    //     privacy: "",
    //     requirements: '',
    //     result: '',
    //     sport: "",
    //     start: "",
    //     status: "",
    //     tournamentId: '',
    //     type: ""
    // })

    useEffect(() => {
        axios.get(`https://falta-uno-1.herokuapp.com/owner/getBookedGamesByOwner/${owner.id}`)
            .then(res => {
                for (let i = 0; i < res.data.length; i++) {
                    for (let j = 0; j < res.data[i].length; j++) {
                        console.log('soy res i j',res.data[i][j])
                        if(res.data[i][j].status == 'booked'){
                            console.log('entree', res.data[i][j])
                            setBookedGames([ ...bookedGames, res.data[i][j] ])
                        }
                    }
                    
                }
                console.log('soy respuestaa', res.data)
                console.log('soy booked game', bookedGames)
            });
    }, [])
    console.log('booked games owner', owner)

    return (
        <div>
            <h1 style={{ color: 'white' }}>{bookedGames?.length > 0 ? 
            <div>
            <h2>{bookedGames.date}</h2> 
            <h2>{bookedGames.sport}</h2> 
            <h2>{bookedGames.start}hs</h2> 
            </div>
            :  'Aun no tienes reservas'}</h1>
        </div>
    )
}