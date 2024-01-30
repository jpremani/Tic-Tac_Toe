import { GameState } from "./GameState";

export default function Reset({gameState , onReset}){
    if(gameState===GameState.inPrograss){
        return;
    }
    return(
        <button onClick={onReset} className="reset-button">Reset</button>
    )
}