interface InputBoxProps {
    placeholder: string;
    reference?: any;
    startIcon?: React.ReactNode;
}

export function InputBox(props: InputBoxProps) {
    return <div >
        <input ref={props.reference}  placeholder={props.placeholder} type={"text"} className="px-4 w-6/4 py-2 border rounded m-2  " >
        </input>
        <div className="absolute  top-0 flex justify-center items-center  left-4/3 py-4 cursor-pointer hover:text-blue-600 rounded-full">
               {props.startIcon && <span>{props.startIcon}</span>}
        </div>
    </div>

}