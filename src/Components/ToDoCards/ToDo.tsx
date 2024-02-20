
import { FaTrashAlt } from "react-icons/fa";
import { FaEdit } from "react-icons/fa";
import React, { useContext } from "react"; 
import { useNavigate } from "react-router-dom";
import { TodoContext } from "../../Store/TodoContext";
type Props = { 
  todoData: SingleTodoItem; 
};
export const ToDo = (props: Props) => { 
   const {deleteTodo}=useContext(TodoContext);    
  const navigate = useNavigate(); 
  const onclickEventhandler = () => { 
    navigate(`/edit/${props.todoData.id}`); 
  };
  const onclickDeletehandler=()=>{
     deleteTodo(props.todoData.id);
  }
  return (
    <>
      <div className="p-5 m-4 rounded-sm text-[#0F0F0F] shadow-[0_2px_5px_0_rgba(0,0,0,0.04)] border-solid border-2 border-[#EBEBEB] ">  
          <h1 className="flex justify-center">{props.todoData.task}</h1> 
          <span className="flex justify-center">
            <h2>Complete it by : {props.todoData.etime}</h2>
          </span >
          <span className="flex justify-center">
            <h3>Its {props.todoData.priority} in priority</h3>
          </span> 
          <div className="flex justify-center py-6">
            <div className="mx-3 cursor-pointer">
              <FaEdit onClick={onclickEventhandler} />
            </div>
            <div className="mx-6 cursor-pointer">
              <FaTrashAlt onClick={onclickDeletehandler} />
            </div>
          </div> 
      </div>
    </>
  );
}; 
