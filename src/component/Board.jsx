import Strike from "./Strike";
import Tile from "./Tile";

export default function Board({tiles, onTileClick, playerTurn,strikeClass}){
    return(
        <div className="Board">
        <Tile playerturn={playerTurn} value={tiles[0]} onClick={()=>onTileClick(0)} className='right-border bottom-border' />
        <Tile playerturn={playerTurn} value={tiles[1]} onClick={()=>onTileClick(1)} className='bottom-border'/>
        <Tile playerturn={playerTurn} value={tiles[2]} onClick={()=>onTileClick(2)} className='left-border bottom-border'/>
        <Tile playerturn={playerTurn} value={tiles[3]} onClick={()=>onTileClick(3)} className='right-border bottom-border'/>
        <Tile playerturn={playerTurn} value={tiles[4]} onClick={()=>onTileClick(4)} className='bottom-border'/>
        <Tile playerturn={playerTurn} value={tiles[5]} onClick={()=>onTileClick(5)}  className='left-border bottom-border'/>
        <Tile playerturn={playerTurn} value={tiles[6]} onClick={()=>onTileClick(6)} className='right-border'/>
        <Tile playerturn={playerTurn} value={tiles[7]} onClick={()=>onTileClick(7)}/>
        <Tile playerturn={playerTurn} value={tiles[8]} className='left-border' onClick={()=>onTileClick(8)}/>
        <Strike strikeClass={strikeClass}/>
        
        </div>
    )
}