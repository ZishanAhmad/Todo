export const sortTodoList = (todoList: TodosItemList) => {
  const modifiedList = [...todoList];  
  modifiedList.sort((a: SingleTodoItem, b: SingleTodoItem) => {
    let fir = a.etime;
    let sec = b.etime;
    if (
      fir.substring(fir.length - 2, fir.length - 1) === "p" ||
      fir.substring(fir.length - 2, fir.length - 1) === "P"
    ) {
      fir = "PM" + fir.substring(0, fir.length - 2);
    } else {
      fir = "AM" + fir.substring(0, fir.length - 2);
    }
    if (
      sec.substring(sec.length - 2, sec.length - 1) === "p" ||
      sec.substring(sec.length - 2, sec.length - 1) === "P"
    ) {
      sec = "PM" + sec.substring(0, sec.length - 2);
    } else {
      sec = "AM" + sec.substring(0, sec.length - 2);
    }
    return fir.localeCompare(sec);
  });
  return modifiedList;
};
export const getRandomid=()=>{ 
    const uniqueid=Math.random()*1000
    return uniqueid.toString();
}