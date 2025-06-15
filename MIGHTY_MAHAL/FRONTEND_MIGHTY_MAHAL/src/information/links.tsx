import { Button } from "../Ui/Button";

export default function Links() {
    return (
        <div className="flex justify-center text-1xl flex-col">
            <div className="text-xl flex justify-center lg:max-h-2 min-h-2 lg:items-center lg:relative ">
                <div className="lg:text-2xl lg:relative lg:top-4 text-lg">Useful Links</div>
            </div>
            <div className=" lg:w-50 lg:absolute lg:left-15 relative lg:top-10 w-50"><hr></hr></div>
            <div>
                <br></br>
                <div className="lg:flex lg:flex-col lg:relative lg:bottom-10">
                    <div className="lg:flex lg:flex-col flex flex-col lg:relative lg:top-21 relative ">
                    <Button fontStyle='sans' variant='links' text='Faq' size='large' />
                    </div>
                    <div className="lg:flex lg:flex-col lg:relative lg:top-14 top-14">
                    <Button fontStyle='sans' variant='links' text='About us' size='large' />
                    </div>
                    <div className="lg:flex lg:flex-col lg:relative lg:top-7 top-7">
                    <Button fontStyle='sans' variant='links' text='Privacy Policy' size='large' />
                    </div>
                    <div className="lg:flex lg:flex-col lg:relative lg:bottom-0 bottom-0">
                    <Button fontStyle='sans' variant='links' text='Terms of Service' size='large' />
                    </div>
                    <div className="lg:flex lg:flex-col lg:relative lg:bottom-7 bottom-7">
                    <Button fontStyle='sans' variant='links' text='Return Policy' size='large' />
                    </div>
                    <div className="lg:flex lg:flex-col lg:relative lg:bottom-14 bottom-14">
                    <Button fontStyle='sans' variant='links' text='How it works' size='large' />
                    </div>
                </div>
            </div>
        </div>
    )
}
