import ImageCorousel from "../Ui/ImageCorousel"
import Card1 from "../Ui/Card1"


export default function Frontfirst() {
    return (
        <div className="flex justify-center items-center w-full h-screen flex-col bg-[#F8F5E9]">
            <div className="flex justify-center  rounded-4xl relative right-49 bottom-30  items-center w-200 ">
                <ImageCorousel />
                <div className="flex flex-col absolute bottom-95 right-70 text-white pl-4 gap-4  rounded-2xl ">
                    <div className="flex flex-row relative top-90 left-180 h-52 w-2/2 rounded-2xl ">
                        <Card1 title="Webcam" image="https://www.mightymahal.com/assets/images/ONMF222.jpg" />
                    </div>
                    <div className="flex flex-row relative top-90  left-180  w-2/2 h-52  rounded-2xl ">
                        <Card1 title="Speaker" image="https://www.mightymahal.com/assets/images/24gX1111.jpg" />
                    </div>
                </div>
            </div>

        </div>
    )
}
