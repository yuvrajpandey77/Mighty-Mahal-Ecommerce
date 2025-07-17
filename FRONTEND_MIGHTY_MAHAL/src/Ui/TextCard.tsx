interface TextCardProps {
    title: string;
    description: string;
    icon?: React.ReactNode;
}



export default function TextCard( props: TextCardProps) {
    return (
        <div className="w-100 p-6 h-27 bg-white border border-gray-200 rounded-lg shadow-sm  ">
            {props.icon && <div className="flex justify-center absolute py-5 top-5 items-center">{props.icon}</div>}
        <div className="flex flex-col relative left-10 bottom-2">
            <a href="#">
                <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 ">{props.title}</h5>
            </a>
            <p className="mb-2 font-normal text-gray-500 ">{props.description}</p>
        </div>
        </div>
    )
}




