interface Card1Props {
    title: string;
    startIcon?: React.ReactNode;
    image?: string;
}


export default function Cards2(props: Card1Props) {
    return (
        <div className="flex flex-row items-center relative   ">
            <div className="text-2xl relative  font-semibold">
                <div className="relative top-30 left-18 z-1 ">
                          {props.title}
                </div>
                {props.image && (
                    <div className="flex items-center  relative left-10 justify-center">
                        <a href="#" className="overflow-hidden  rounded-xl">
                            <img className="  h-52 relative  hover:scale-105 transition-all duration-300" src={props.image} alt="product image" />
                        </a>
                    </div>
                )}
            </div>
        </div>
    )
}
