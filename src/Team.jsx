import { useState } from "react"

export default function Team(){
    const [team, setTeam] = useState(11);
    const teamStyle = {
        border: "2px solid white",
        margin: "15px",
        padding: "15px",
        borderRadius: "8px"
    }
    const handleAdd = () => {
        const newTeam = team  + 1;
        setTeam(newTeam)
    }
    const handleReduce = () => {
        const newTeam = team  - 1;
        setTeam(newTeam)
    }
    return (
        <>
            <div>
                <h3 style={teamStyle}>Players: {team}</h3>
                <button onClick={handleAdd}>Add Player</button>
                <button onClick={handleReduce}>Reduce Player</button>
            </div>
        </>
    )
}