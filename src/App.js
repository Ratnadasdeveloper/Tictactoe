import "./styles.css";
import React,{useState,useEffect} from 'react';
import Square from './Square';
const initialState=["","","","","","","","",""]

function App() {
  const [gameState,updategameState] =useState(initialState);
  const [xchance,updatexchance] =useState(false)
   const onsquareclick =(index) =>{
     let strings=Array.from(gameState)
     strings[index]=xchance ? "X":"0"
     updategameState(strings)
     updatexchance(!xchance)
   }
   useEffect(() =>{
      const winner=checkwin();
      if(winner){
        alert(`😀😀${winner}😎😎 you are completed `)
     updategameState(initialState)
      }
   },[gameState])
const checkwin = () =>{
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (gameState[a] && gameState[a] === gameState[b] && gameState[a] === gameState[c]) {
      return gameState[a];
    }
  }
  return null;
}
  return (
    <div className="App-header">
      <h1 style={{color:"blue",textDecoration:"underline"}}>Tic-Tac-Toe</h1>
      <div className="row jc-center">
        <Square className="b-bottom-right" state={gameState[0]} onClick ={() =>onsquareclick(0)}/>
        <Square className="b-bottom-right" state={gameState[1]} onClick ={() =>onsquareclick(1)}/>
        <Square className="b-bottom" state={gameState[2]} onClick ={() =>onsquareclick(2)}/>
      </div>
      <div className="row jc-center">
      <Square className="b-bottom-right" state={gameState[3]} onClick ={() =>onsquareclick(3)}/>
        <Square className="b-bottom-right" state={gameState[4]} onClick ={() =>onsquareclick(4)}/>
        <Square className="b-bottom" state={gameState[5]} onClick ={() =>onsquareclick(5)}/>
      </div>
      <div className="row jc-center">
      <Square className="b-right" state={gameState[6]} onClick ={() =>onsquareclick(6)}/>
        <Square className="b-right" state={gameState[7]} onClick ={() =>onsquareclick(7)}/>
        <Square className="b" state={gameState[8]} onClick ={() =>onsquareclick(8)}/>
      </div>
      <button onClick={() =>updategameState(initialState)} style={{width:"300px",backgroundColor:"blue",color:"white", marginRight:"50%" ,height:"70px",borderRadius:"5%",fontSize:"20px"}}>🤐ohoo !! i have some work can we play later </button>
    </div>
  );
}

export default App;