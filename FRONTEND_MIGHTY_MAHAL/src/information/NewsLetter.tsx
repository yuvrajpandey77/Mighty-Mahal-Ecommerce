import { Button } from "../Ui/Button";
import { InputBox } from "../Ui/InputBox";

export default function NewsLetter() {
    return (
        <div className="flex justify-center text-1xl flex-col items-center">
            <div className="text-xl flex justify-center items-center">
                <h1 className="lg:text-2xl text-lg ">NewsLetter</h1>
            </div>
            <div className="lg:relative lg:w-70 w-50"><hr></hr></div>
            <div className="flex justify-center items-center">
                <InputBox placeholder="Enter your email" />
                <div className="flex justify-center relative left-7 items-center">
                    <Button variant="tertiary" size="small" text="Subscribe" />
                </div>
            </div>
            <div className="flex justify-center items-center">
                <p className="lg:text-lg text-sm ">Subscribe to our newsletter to get the latest news and updates.</p>
            </div>
        </div>
    )
}
