import Language from "../components/Language";
import Others from "../components/Others";
import Stacks from "../components/Stacks";


export default function Skills() {

    return (
        <div className="h-screen px-[10%] py-[5%]">

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
                <div className="space-y-10">
                    <h1 className="text-[5em] first-letter:text-[2em] font-semibold tracking-wider text-primary">Stacks</h1>
                    <Stacks />
                </div>
                <div className="space-y-10">
                    <div>
                        <h1 className="text-[3em] first-letter:text-[1.6em] font-semibold tracking-wider text-primary">Others</h1>
                        <Others />
                    </div>
                    <div>
                        <h1 className="text-[3em] first-letter:text-[1.6em] font-semibold tracking-wider text-primary">Language</h1>
                        <Language />
                    </div>
                </div>
            </div>
        </div>
    )
}
