import TextCard from "../Ui/TextCard";
import Refresh from "../Icons/Refresh";
import CallIcon from "../Icons/CallIcon";
import Money from "../Icons/Money";
export default function TextCards() {
    return (
        <div className="flex flex-row gap-30 relative bottom-40">
            <div className="w-80 h-30 rounded-2xl">
                <TextCard title='Money Back Guarantee' description='We return money within 30 days' icon={<Refresh />} />
            </div>
            <div className="w-80 h-30 rounded-2xl">
                <TextCard title='24/7 Customer Support' description='Friendly 24/7 customer support' icon={<CallIcon />} />
            </div>
            <div className="w-80 h-30 rounded-2xl">
                <TextCard title='Secure Online Payment' description='We posess SSL / Secure Certificate' icon={<Money />} />
            </div>
        </div>
    )
}   
