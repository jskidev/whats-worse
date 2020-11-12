import helpers from '../helpers/helpers'

import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Home() {
    const [thing1, setThing1] = useState({});
    const [thing2, setThing2] = useState({});
    const [vote, setVote] = useState('');

    const [newThing, setNewThing] = useState('');

    const [fadeOut, setFadeOut] = useState(false);
    const [done, setDone] = useState(false);

    useEffect(() => {
        loadPair()
    }, []);

    const handleVote = (event) => {
        setFadeOut(true);
        
        let vote = event.target.value;
        let winner;
        let loser;
        vote == 0 ? winner = thing1 : winner = thing2;
        vote == 0 ? loser = thing2 : loser = thing1;
        let pair = {};
        pair['w_id'] = winner['_id'];
        pair['w_name'] = winner['name'];
        pair['l_id'] = loser['_id'];
        pair['l_name'] = loser['name'];
        
        axios({
            method: 'post',
            //url: 'http://localhost:8000/api/vote',    //DEVELOPMENT
            url: window.location.origin+'/api/vote',  //PRODUCTION
            data: pair
          })
        .then(function (response) {
            setVote(response.data);
            setTimeout(() => { loadPair(); }, 1000);
        })
        .catch(function (error) {
            console.log(error);
        })
        //setTimeout(() => { loadPair(); setFadeOut(false); }, 1000);
    }

    const loadPair = () => {
        setFadeOut(false);
        //fetch('http://localhost:8000/api/') //DEVELOPMENT
        fetch(window.location.origin+'/api/') //PRODUCTION
        .then(async res => {
            return await res.json()
        })
        .then(result => { 
            if(result){
                setThing1(result[0]);
                setThing2(result[1]);
            }
            
        });
    }

    const handeNewThingChange = (event) => {
        setNewThing(event.target.value)
    }
    
    const handleSubmit = (event) => {
        event.preventDefault();
        axios({
            method: 'post',
            //url: 'http://localhost:8000/api/new',    //DEVELOPMENT
            url: window.location.origin+'/api/new',  //PRODUCTION
            data: {
              name: newThing
            }
          })
        .then(function (response) {
            console.log(response);
            setNewThing('');
        })
        .catch(function (error) {
            console.log(error);
        })
    }

    return (
        <>
            <div className="fold">
                <header>
                    <div className="navContainer">
                        <button className="neuNav" onClick={helpers.handleHome}>home</button>
                        <button className="neuNav" onClick={helpers.handleLeaderboard}>leaderboard</button>
                    </div>
                </header>
                <div className="content">
                    <div className="buttonContainer">
                        {
                        //<div className={fadeOut ? "loader fadeInFast" : "loader fadeOut"}>Loading...</div>
                        }
                        <button className={fadeOut ? "neuButton fadeOut" : "neuButton fadeIn"} value='0' onClick={handleVote}>{thing1['name']}</button>
                        <button className={fadeOut ? "neuButton fadeOut" : "neuButton fadeIn"} value='1' onClick={handleVote}>{thing2['name']}</button>
                        <div className={fadeOut ? "snackBar fadeInFast" : "snackBar slideDown"}>
                            {vote}
                        </div>
                    </div>
                    <a href="#newThing" className="neuLink">
                        <svg height="30" viewBox="0 0 21 21" width="30" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd" stroke="#2a2e3b" stroke-linecap="round" stroke-linejoin="round" transform="translate(6 4)"><path d="m7.328 6.67.001 5.658-5.658-.001" transform="matrix(-.70710678 .70710678 .70710678 .70710678 .965201 -.399799)"/><path d="m4.5.5v13"/></g></svg>
                    </a>
                </div>
            </div>
            <div className="formContainer">
                <h2>add new thing</h2>
                <form onSubmit={handleSubmit}>
                <a name="newThing"></a>
                    <label for="name">thing name</label>
                    <input name="name" type="text" placeholder="test" className="neuInput" required onChange={handeNewThingChange} value={newThing} />
                    <button className="neuSubmit">submit</button>
                </form>
            </div>
        </>
    )
}
export default Home;