import React from "react";
type Props = {
    Head: string;
    onChangeEventListener: (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement>) => void
    value: string;
    id: string;
    name: string;
    placeholder: string;
}
const Textarea = (props: Props) => {
    return (
        <>
            <div className="m-3 w-full inline-block border-1 border-solid border-[#ccc] rounded-sm">
                <label className="mb-1">{props.Head}</label>
                <input 
                    onChange={props.onChangeEventListener}
                    value={props.value}
                    type="text"
                    id={props.id}
                    name={props.name}
                    placeholder={props.placeholder}
                    className="p-2 w-full"
                    ></input>
            </div>
        </>
    )
}
export default Textarea;