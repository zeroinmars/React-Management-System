import React,{useState} from 'react'
import TodoItem from './TodoItem'

function TodoBoard(props){

  return(
    <div>
      <h1>TodoList</h1>
      <p>item screen : {props.inputList.map((item) =><TodoItem item={item} inputList={props.inputList} setInputList={props.setInputList}/>)}</p>
    </div>
  );
}


export default TodoBoard;


