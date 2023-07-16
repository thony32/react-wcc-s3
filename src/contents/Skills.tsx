import Language from "../components/Language";
import Others from "../components/Others";
import Stacks from "../components/Stacks";


export default function Skills() {

    return (
        <div className="lg:h-full px-[10%] lg:px-[5%] 2xl:px-[10%] py-[5%]" id="skills">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
                <div className="space-y-10">
                    <h1 className="text-2xl first-letter:text-4xl text-center lg:text-left lg:text-[3em] lg:first-letter:text-[1.6em] font-semibold tracking-wider text-primary">Stacks</h1>
                    <Stacks />
                </div>
                <div className="flex items-center ">
                    <div className="space-y-16 w-full">
                        <div className="space-y-5">
                            <h1 className="text-2xl first-letter:text-4xl text-center lg:text-left lg:text-[3em] lg:first-letter:text-[1.6em] font-semibold tracking-wider text-primary">Others</h1>
                            <Others />
                        </div>
                        <div className="space-y-5">
                            <h1 className="text-2xl first-letter:text-4xl text-center lg:text-left lg:text-[3em] lg:first-letter:text-[1.6em] font-semibold tracking-wider text-primary">Language</h1>
                            <Language />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
