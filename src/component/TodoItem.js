import React,{useState} from 'react'

function TodoItem(props) {
  const [render,setRender] = useState(0);
  const delItem=()=>{
    for (let i in props.inputList){
      if(props.inputList[i] == props.item)
        props.inputList.splice(i,1)
        props.setInputList([...props.inputList])
    }
  }
  return(
    <div className='todo-item'>
      <p>{props.item}</p>
      <button onClick={delItem}>삭제</button>
    </div>
  );
}

export default TodoItem;