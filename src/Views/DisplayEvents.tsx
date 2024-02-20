import React, { useContext } from "react"; 
import { ToDo } from "../Components/ToDoCards/ToDo";
import { useNavigate } from "react-router-dom";
import { TodoContext } from "../Store/TodoContext";
function DisplayEvents() {
  const { todoList } = useContext(TodoContext);
  const navigate = useNavigate();
  const clickEventListener = () => {
    navigate('/addtask');
  }
  return (
    <>
      <div className="w-[90dvw] p-3 "> 
          <div className="flex justify-end cursor-pointer mx-1">    
              <button className=" bg-[#2263F5] hover:bg-[#1756E3] text-sm md:text-md py-4 px-3 text-white text-center rounded-md" onClick={clickEventListener}>
                Add a ToDo
             </button> 
          </div>  
      </div>
      <div className="h-[calc(100vh-7.5rem)] overflow-y-auto">
        {todoList.map((IndividualTodo) => {
          return (
            <div key={IndividualTodo.id}>
              <ToDo
                todoData={IndividualTodo}
              />
            </div>
          );
        })
        }
      </div>
    </>
  );
}
export default DisplayEvents;
