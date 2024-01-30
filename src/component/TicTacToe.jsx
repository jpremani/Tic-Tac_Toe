import { useEffect, useState } from "react";
import Board from "./Board";
import GameOver from "./GameOver";
import { GameState } from "./GameState";
import Reset from "./Reset";
import GameoverSoundAsset from '../Sound/over.wav';
import clickSoundAsset from '../Sound/click.wav';
const gameOverSound=new Audio(GameoverSoundAsset);
const clickSound=new Audio(clickSoundAsset);
gameOverSound.volume=0.2;
clickSound.volume=0.5;

const PLAYER_X="X";
const PLAYER_O="O";
function TicTacToe()
{
    const[tiles,setTiles]=useState(Array(9).fill(null));
    const[playerTurn,setPlayerTurn]=useState(PLAYER_X);
    const[StrikeClass,setStrikeClass]=useState();
    const[gameState,setGameState]=useState(GameState.inPrograss);

    const WinningCombinations=[
        //R3w4
        {combo:[0,1,2],strikeClass:"strike-row-1"},
        {combo:[3,4,5],strikeClass:"strike-row-2"},
        {combo:[6,7,8],strikeClass:"strike-row-3"},
       //columns
        {combo:[0,3,6],strikeClass:"strike-column-1"},
        {combo:[1,4,7],strikeClass:"strike-column-2"},
        {combo:[2,5,8],strikeClass:"strike-column-3"},
        //diagonal
        {combo:[0,4,8],strikeClass:"strike-diagonal-1"},
        {combo:[2,4,6],strikeClass:"strike-diagonal-2"},
        
        
        
    ];
    const handleTileClick=(index)=>{
        if(gameState!==GameState.inPrograss){
            return;
        }
        if(tiles[index]!==null){
            return;
        }
        console.log(index);
        const newTiles=[...tiles];
        newTiles[index]=playerTurn;
        setTiles(newTiles);
        if(playerTurn===PLAYER_X){
            setPlayerTurn(PLAYER_O);
        }
        else{
            setPlayerTurn(PLAYER_X);
        }
    }
    function  checkWinner(tiles,setStrikeClass,setGameState){
        for(const {combo,strikeClass} of WinningCombinations){
            const tilevalue1=tiles[combo[0]];
            const tilevalue2=tiles[combo[1]];
            const tilevalue3=tiles[combo[2]];
            if(tilevalue1!==null && tilevalue1===tilevalue2 && tilevalue1===tilevalue3){
                setStrikeClass(strikeClass);
                if(tilevalue1===PLAYER_X){
                    setGameState(GameState.playerXWins)
                }
                else{
                    setGameState(GameState.playerOWins);
                }
                return;
            }
        }
        const AllTileFail=tiles.every((tile)=>tile!==null);
        if(AllTileFail){
            setGameState(GameState.draw);
        }
       
    }
    const handleReset=()=>{
       setGameState(GameState.inPrograss);
       setTiles(Array(9).fill(null));
       setPlayerTurn(PLAYER_X);
       setStrikeClass(null);

    }
    useEffect(()=>{
        checkWinner(tiles,setStrikeClass,setGameState);
    },[tiles])
    useEffect(()=>{
        if(tiles.some((tile)=>tile!==null)){
            clickSound.play();
        }
    })
    useEffect(()=>{
    if(gameState!==GameState.inPrograss){
        gameOverSound.play();
    }})
    return(
        <div>
        <h1>Tic Tac Toe</h1>
        <Board playerTurn={playerTurn} tiles={tiles} onTileClick={handleTileClick} strikeClass={StrikeClass} />
        <GameOver gameState={gameState}/>
        <Reset gameState={gameState} onReset={handleReset}/>
    </div>
    );
}
export default TicTacToe;