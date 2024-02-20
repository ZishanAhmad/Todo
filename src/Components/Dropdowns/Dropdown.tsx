import React from "react" 
type Props = {
    Head: string;
    onChangeEventListener: (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement>) => void
    value: string;
    id: string;
    name: string;
}
const Dropdown = (props: Props) => {
    let currentValue = props.value || "DEFAULT";
    return (
        <div className="m-3 inline-block w-full border-1 border-solid border-[#ccc] rounded-sm">
            <label>{props.Head}</label>
            <select
                className="p-2 w-full" 
                onChange={props.onChangeEventListener}
                value={currentValue}
                id={props.id}
                name={props.name}  
            >
                <option value="DEFAULT" disabled>Choose a priority ...</option>
                <option value="High">High</option>
                <option value="Medium">Medium</option>
                <option value="Low">Low</option>
            </select>
        </div>
    )
}
export default Dropdown;