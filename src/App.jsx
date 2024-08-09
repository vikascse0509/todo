import { useEffect, useState } from 'react'
import './App.css'

function App() {
 const [todos, setTodos] = useState([])
 const [inputValue, setInputValue] = useState('')

 const addTodo = () =>{
  if (inputValue !== '') {
    setTodos([...todos,inputValue])
    setInputValue('')
  }
 }


 const deleteTodo = (index) =>{
  const newTodos = todos.filter((item,i) => i !== index)
  setTodos(newTodos)
 }

  return (
    <>
      <div className='max-w-[600px] bg-[#FFFFFF] mx-auto my-0 p-[20px] rounded-[5px]'>
        <h1 className='text-black font-bold text-center text-xl'>To Do</h1>
        <input value={inputValue} onChange={(e) => setInputValue(e.target.value)} type="text" placeholder='Enter your task' className='w-[80%] mr-[10px] p-[8px] rounded-[2px_solid_#ccc] border border-solid border-[#f2f2f2]'/>
        <button className='px-[20px] py-[8px] bg-black text-white rounded-[2px] cursor-pointer' onClick={addTodo}>Add</button>
        <ul className='list-none p-0 mt-[20px]'>
          {
            todos.map((todo,index) => (
              <li key={index} className='bg-gray-500 flex p-[10px] mb-[10px] rounded-[5px] items-center justify-between'>
                {todo}
                <button className='bg-[red] text-white py-[5px] px-[10px] rounded[5px]' onClick={() => deleteTodo(index)}>X</button>
              </li>
            ))
          }
        </ul>
      </div>
    </>
  )
}

export default App
