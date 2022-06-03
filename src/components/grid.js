import React from "react";


const grid = (characters) => {
    
    const chars = characters.character.results;
    console.log(chars);
    
    return( 
        <div className="app-grid">
            
            
                {chars.map(c => (
                    <div className="card char-card">
                        <img src={c.image} alt="" className="card-img"/>
                        <h3>{c.name}</h3>
                        <p>{c.gender} of the {c.species} race. Is currently {c.status}</p>
                    </div>
                )
                )}
            
        </div>

            );
};

export default grid;