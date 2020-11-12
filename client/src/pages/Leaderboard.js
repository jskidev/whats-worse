import helpers from '../helpers/helpers'

function Leaderboard() {
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
                work in progress
            </div>
            </div>
        </>
    )
}
export default Leaderboard;