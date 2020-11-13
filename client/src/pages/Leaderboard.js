import helpers from '../helpers/helpers'

import React, { useState, useEffect } from 'react';

function Leaderboard() {
    const [votes, setVotes] = useState({});
    const [hasLoaded, setHasLoaded] = useState(false);

    useEffect(() => {
        //fetch('http://localhost:8000/api/leaderboard') //DEVELOPMENT
        fetch(window.location.origin+'/api/leaderboard') //PRODUCTION
        .then(async res => {
            return await res.json()
        })
        .then(result => { 
            if(result){
                setVotes(result);
                setHasLoaded(true);
            }
        });
    }, []);

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
                    <div className="tableContainer">
                    { !hasLoaded ? 
                    <div className="loaderContainerMid">
                        <div className="loader"></div>
                    </div> 
                    :
                        
                        <table className="neuTable">
                            <tr>
                                <th>
                                    name
                                </th>
                                <th>
                                    votes
                                </th>
                            </tr>
                            {
                                votes.map(
                                (item, index) => ( 
                                        <tr>
                                            <td className="name">
                                                {item.name}
                                            </td>
                                            <td className="vote">
                                                {item.total}
                                            </td>
                                        </tr>
                                    )
                                )  
                            }
                        </table>
                        
                    }
                    </div>
                </div>
            </div>
        </>
    )
}
export default Leaderboard;