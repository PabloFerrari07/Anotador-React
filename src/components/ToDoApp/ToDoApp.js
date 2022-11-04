import {useState} from 'react';

const TodoApp = ()=>{

    const [title,setTitle] = useState("titulo");
    const [todos, setTodos] = useState([]);


    const handleClick = (e)=>{
        e.preventDefault();

    }

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
    }
    return(
    <div className="todoContainer">
         <form className="TodoCreateForm" onSubmit={handleSubmit}>
           <input onChange={handleChange} className="TodoInput" value={title}/>
           <input onClick={handleSubmit} type="submit" className="ButonCreate" value="create todo"/>    
            </form>   
            <div className='todosContainer'>
                {
                    todos.map(item => (
                        <div>
                            {item.title}
                        </div>
                    ))
                }
            </div>
    </div>
    );
};

export default TodoApp