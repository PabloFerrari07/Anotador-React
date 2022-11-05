import { useState } from "react"
import "./todo.css"

const ToDo = ({item, onUpdate, onDelet})=>{
    const [isEdit,setIsedit]= useState(false);

    
    const Formedit = (e)=>{
        const [newValue, setNewvalue] = useState(item.title)

        const handleChange = (e)=>{
            e.preventDefault();
    
            const value = e.target.value;
    
            setNewvalue(value)
        }
        const handleSubmit = (e)=>{
            e.preventDefault();
    
        }

        const handleClick = ()=>{
            onUpdate(item.id,newValue)
            setIsedit(false)
        }
    
        return(
            <form onSubmit={handleSubmit} className="formInputs">
                <input type="text" onChange={handleChange} value={newValue} className="textChange"/>
                <button onClick={handleClick} className="inputChange">cambiar</button>
            </form>
        )
    }

    const TodoElement = ()=>{
        return(
            <div className="TodoInfo">
                <div >
                {item.title}
                <button onClick={()=>{setIsedit(true)}} className="inputInfo">Editar</button>
                <button onClick={(e)=> onDelet(item.id)} className="inputInfo">eliminar</button>
                </div>
           </div>
        )
    }

    return(
        <div className="toDo">
            {
                isEdit ? <Formedit/> :<TodoElement/>
            }
        </div>
    )
}

export default ToDo