// user input - includes validation
function TodoForm({addTodo}){
  const [value,setValue] = React.useState('');
  
  const handleSubmit = e => {
    e.preventDefault();
    if(!value) return;
    addTodo(value);
    setValue('');
  }

  return (
    <form>
      <input 
        type="text"
        className="input"
        value={value}
        placeholder="add item..."
        onChange={e => setValue(e.target.value)} />
      <button className="button" type="submit" onClick={handleSubmit}>Enter</button>
    </form>
  )
}