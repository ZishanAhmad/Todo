import React, { useContext, useState } from "react";
import Textarea from "../InputTexts/Textarea";
import Dropdown from "../Dropdowns/Dropdown"; 
import { useNavigate, useParams } from "react-router-dom";
import { TodoContext } from "../../Store/TodoContext";
const emptyForm = {
  task: "",
  etime: "",
  priority: "",
  id: ""
};
const placeholders = {
  task: "Enter the ToDo",
  etime: "Enter the deadline",
  priority: "",
};
const Form = () => {
  const { todoList, editTodo, addTodo } = useContext(TodoContext);
  const [formData, setFormData] = useState<SingleTodoItem>(emptyForm);
  const navigate = useNavigate();
  const params = useParams();
  const index = params.id;

  const defaultData = todoList.filter((toDoitem) => {
    return (toDoitem.id === index);
  })

  if (index !== undefined && !isNaN(+index)) {
    if (JSON.stringify(emptyForm) === JSON.stringify(formData)) {
      setFormData(defaultData[0]);
    }
  }


  const onChangeEventListener = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmitFormEventListener = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (index !== undefined && !isNaN(+index)) {
      editTodo(formData);
    }
    else {
      addTodo({ ...formData, id: (Math.random() * 1000).toString() });
    }
    navigate("/");
  };

  const goBackNavigator = () => {
    navigate("/");
  };

  return (
    <div className=" p-4 text-sm xl:px-96 md:text-md">
      <form className="w-5/6 md:p-16" onSubmit={onSubmitFormEventListener}>
        <div>
          <Textarea
            Head={"Task"}
            onChangeEventListener={onChangeEventListener}
            value={formData.task}
            id={"task"}
            name={"task"}
            placeholder={
              formData.task === "" ? placeholders.task : formData.task
            }
          />
        </div>
        <div>
          <Textarea
            Head={"End Time"}
            onChangeEventListener={onChangeEventListener}
            value={formData.etime}
            id={"etime"}
            name={"etime"}
            placeholder={
              formData.etime === "" ? placeholders.etime : formData.etime
            }
          />
        </div>
        <div>
          <Dropdown
            Head={"Priority"}
            onChangeEventListener={onChangeEventListener}
            value={formData.priority}
            id={"priority"}
            name={"priority"}
          />
        </div>
        <div className="flex justify-center">
          <input 
            type="submit"
            value="Go Back"
            className="cursor-pointer bg-[#4caf50] hover:bg-[#45a049] text-sm md:text-md p-3 mx-3 text-white text-center rounded-md"
            onClick={goBackNavigator}
            
          ></input>
          <input type="submit" value="Submit" className="cursor-pointer bg-[#4caf50] hover:bg-[#45a049] text-sm md:text-md  p-3 mx-3 text-white text-center rounded-md"></input>
        </div>
      </form>
    </div>
  );
};
export default Form;
