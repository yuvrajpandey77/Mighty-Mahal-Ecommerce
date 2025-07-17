import Card1 from "../Ui/Card1";

export default function MiddleCards() {
    return (
        <div>
            <div className="flex flex-row bottom-50 right-0 justify-center items-center relative w-340  rounded-2xl ">
                    <div className="flex flex-row  top-87   h-52 w-12/2 rounded-2xl ">
                        <Card1 title="Phone" image="https://www.mightymahal.com/assets/images/16365336393.jpg" />
                    </div>
                    <div className="flex flex-row  top-90   w-12/2 h-52  rounded-2xl ">
                        <Card1 title="Watch" image="https://www.mightymahal.com/assets/images/16365336391.jpg" />
                    </div>

                    <div className="flex flex-row  top-90    w-12/2 h-52  rounded-2xl ">
                        <Card1 title="Drone" image="https://www.mightymahal.com/assets/images/16365336392.jpg" />
                    </div>
                </div>
        </div>
    )
}
