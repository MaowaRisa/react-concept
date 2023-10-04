import './App.css'
import Counter from './Counter';
import Friends from './Friends';
import Team from './Team';
import Users from './Users';

function App() {
  function handleClick(){
    alert("button clicked!");
  }
  const handleMoreClick = () =>{
    alert("Click me more!");
  }
  const addToFive = (num) =>{
    alert(`The Sum is ${num + 5}`)
  }
  return (
    <>
      <h3>React Core Concepts </h3> 
      <Friends></Friends>
      <Users></Users>
      <Counter></Counter>
      <Team></Team>
      <button onClick={handleClick}>Click Me</button>
      <button onClick={handleMoreClick}>Click More</button>
      <button onClick={()=>{alert("Third Clicked!")}}>Third</button>
      <button onClick={() => addToFive(3)}>Add to Five</button>
    </>
  )
}

export default App
