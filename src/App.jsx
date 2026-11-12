
{/*function Header() {
  return (
    <header className="w-full bg-white shadow-md">

      <nav className="w-full flex items-center justify-between px-12 lg:px-20 py-6">

        {/* Logo
        <h1 className="text-3xl font-extrabold tracking-tight text-[#7B3F00]">
          MyWebsite<span className="text-gray-900">.</span>
        </h1>

        {/* Navigation Links
        <div className="flex items-center gap-20">

          <a href="#home"
            className="text-xl font-semibold text-gray-700 hover:text-[#7B3F00] transition duration-300 gap-20">
            Home
          </a>

          <a href="#about"
            className="text-xl font-semibold text-gray-700 hover:text-[#7B3F00] transition duration-300">
            About
          </a>

          <a href="#contact"
            className="text-xl font-semibold text-gray-700 hover:text-[#7B3F00] transition duration-300">
            Contact
          </a>

          <button className="bg-[#7B3F00] text-white text-lg font-bold px-10 py-4 rounded-xl hover:bg-[#4B2600] hover:scale-105 transition duration-300">
            Sign In
          </button>

        </div>

      </nav>
    </header>
  );
}

export default Header; */}

{/*import { useState,useEffect } from 'react'


function App() {
  const [taskInput,setTaskInput] = useState('')
  const [tasks,setTasks] = useState([])

  const displayTask  = () => {
    setTasks([...tasks,taskInput])
    localStorage.setItem('tasks',JSON.stringify([...tasks,taskInput]))

  }

  useEffect(()=>{
    getItemFromLocalstorage()
   
  },[])

  const getItemFromLocalstorage = () =>{
     const storedTasks = JSON.parse( localStorage.getItem('tasks'))
    setTasks(storedTasks)
  }

  const deleteTask = (index) => {
    console.log("Delete "+index)
    tasks.splice(index,1)
    localStorage.setItem("tasks",JSON.stringify(tasks))
    getItemFromLocalstorage()
  }

  console.log(tasks)


  return (
    <>

     <div>
       <input type="text" placeholder='Add a task' value={taskInput} onChange={(e)=>{setTaskInput(e.target.value)}} />
       <button onClick={displayTask}>Add</button>

       <div>
        <table>
          <tr>
            <th>Number</th>
            <th>Task</th>
            <th>Action</th>
          </tr>
          {tasks.map((task, index)=>{
            return(
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{task}</td>
                <td><button onClick={() => deleteTask(index)}>Delete</button></td> 
              </tr>
            )
          })}
         
        </table>
       </div>
     </div>

    </>
  )
}

export default App */}





import { useState, useEffect } from 'react'

function App() {

  const [taskInput, setTaskInput] = useState('')
  const [tasks, setTasks] = useState(() => {
    return JSON.parse(localStorage.getItem('tasks')) || []
  })

  
  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks))
  }, [tasks])

  
  const displayTask = () => {
    if (taskInput.trim() === '') {
      return
    }

    setTasks([...tasks, taskInput])
    setTaskInput('')
  }

  
  const deleteTask = (index) => {
    const updatedTasks = tasks.filter((task, i) => i !== index)
    setTasks(updatedTasks)
  }

  return (
    <>
      <div>
        <input
          type="text"
          placeholder="Add a task"
          value={taskInput}
          onChange={(e) => setTaskInput(e.target.value)}
        />

        <button onClick={displayTask}>Add</button>

        <div>
          <table>
            <thead>
              <tr>
                <th>Number</th>
                <th>Task</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>
              {tasks.map((task, index) => {
                return (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{task}</td>
                    <td>
                      <button onClick={() => deleteTask(index)}>
                        Delete
                      </button>
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  )
}

export default App



