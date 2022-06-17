import React, {useEffect, useState} from 'react'
import Button from '../Components/Button'

function App() {
  const [todo, setTodo] = useState('')
  const [todos, setTodos] = useState([])
  const [isEdit, setIsEdit] = useState({})

  const onHandleClick = () => {
    if (Object.keys(isEdit).length > 0) {
      let newTodo = todos
      newTodo[isEdit.id] = todo

      setTodos([...newTodo])
      setIsEdit({})
    }else{
      setTodos([...todos, todo])
    }

    setTodo('')
  }

  const onHanldeDelete = (index) => {
    const newTodo = todos.filter((item, id) => id !== index)
    setTodos(newTodo)
  }

  const onHandleEdit = (id) => {
    let newTodo = todos
    setTodo(newTodo[id])
    setIsEdit({id})
  }

  useEffect(() => {
    if (todos.length > 0) {
      localStorage.setItem('todos', JSON.stringify(todos))
    }
  }, [todos])

  useEffect(() => {
    const todosLocal = localStorage.getItem('todos')
    setTodos(JSON.parse(todosLocal))
  }, [])

  return (
    <div className="container">
      <h1 className="my-5">Todo List</h1>
      <hr />

      <div className="form">
        <div className="input-group mb-3">
          <input 
            type="text" 
            placeholder='What you focus today?' 
            className='me-3 form-control'
            onChange={(e) => setTodo(e.target.value)}
            value={todo}
          />
          <Button 
            id='submit' 
            onClick={onHandleClick}
            title='Submit'
          />
        </div>
      </div>

      <div className="result">
        <ul>
          {
            todos.map((item, index) => {
              return (
                <div
                  style={{
                    display: 'flex'
                  }}
                  className='my-2'
                  key={index}
                >
                  <li className='me-2'>{item}</li>
                  <Button 
                    id='edit'
                    onClick={() => onHandleEdit(index)}
                    title='Edit'
                    className='mx-1'
                  />
                  <Button 
                    id='delete'
                    onClick={() => onHanldeDelete(index)}
                    title='Delete'
                  />
                </div>
              )
            })
          }
        </ul>
      </div>

    </div>
  )
}

export default App