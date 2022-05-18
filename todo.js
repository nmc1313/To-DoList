function Todo({todo,index,remove}){
  function handle(){
    console.log('Ping:',index);
    remove(index);
  }
  return <div className="todo">{todo.text} 
  <button className="button" onClick={handle}>Remove</button>
  </div>
}
