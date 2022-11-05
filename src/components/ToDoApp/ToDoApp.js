import {useState} from 'react';
import ToDo from '../ToDo/ToDo';
import './Todoapp.css'
const TodoApp = ()=>{

    const [title,setTitle] = useState("");
    const [todos, setTodos] = useState([]);

    const handleChange = (e)=>{
        const value = e.target.value;
        setTitle(value)
    }

    const handleSubmit = (e)=>{
        e.preventDefault();

        const newTodo = {
            id: crypto.randomUUID(),
            title: title,
            completed:false
        };

        const temp = [...todos]
        temp.unshift(newTodo)

        setTodos(temp);

        setTitle('')
    }

        const handleUpdate =(id,value)=>{
            const temp = [...todos];
            const item = temp.find(item => item.id === id);
            item.title = value;
            setTodos(temp)
        }

        const handleDelete = (id)=>{
            const temp = todos.filter(item => item.id !== id);

            setTodos(temp)
        }
    return(
    <div className="todoContainer">
         <form className="TodoCreateForm" onSubmit={handleSubmit}>
           <input onChange={handleChange} className="TodoInput" value={title}/>
           <input onClick={handleSubmit} type="submit" className="ButonCreate" value="Crear tarea"/>    
            </form>   
            <div className='todosContainer'>
                {
                    todos.map(item => (
                       <ToDo key={item.id} item={item} onUpdate={handleUpdate} onDelet={handleDelete}/>
                    ))
                }
            </div>
    </div>
    );
};

export default TodoApp