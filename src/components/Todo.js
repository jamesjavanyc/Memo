// 导入react文件
import React from 'react';

const Todo = ({text,todo,todos,setTodos})=>{
    const deleteHandler=() =>{
        setTodos(todos.filter((elem)=>elem.id !== todo.id))
    }
    const completeHandler=() =>{
        setTodos(todos.map((elem)=>{
            if (elem.id === todo.id){
                // ...elem:扩展运算符，展开对象。 后面是修改的属性
                return {...elem,completed:!elem.completed };
            }
            return elem;
        }));
    }
    return(
        <div className="todo">
            <li className={`todo-item ${todo.completed? "completed" : ""}`}>{text}</li>
            <button onClick={completeHandler} className="complete-btn">
                <i className="fas fa-check"></i>
            </button>
            <button onClick={deleteHandler} className="trash-btn">
                <i className="fas fa-trash"></i>
            </button>
        </div>
    )
}

export default Todo;