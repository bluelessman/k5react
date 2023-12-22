// import codeData from "./getcode.json";
import xyData from "./getxy.json";
import TailSelect from "../ui/TailSelect";
import TailH1 from "../ui/TailH1";
import { useState } from "react";
import TailButton from "../ui/TailButton";
export default function FcstMain() {
    const area = xyData.map(item => item["1단계"]);
    const [day, setDay] = useState();
    const [sido, setSido] = useState();
    const handleClick = (e) => {
        setSido(e.target.value);
    };
    const dateChange = (e) => {
        setDay(e.target.value.replaceAll('-', ""));
    }
    const btClick = () => {
        console.log(day+sido);
    };

    return (
        <div className="container mx-auto w-full h-screen">
            <div className="flex flex-col justify-top items-center w-full my-8">
                <div className='flex'>
                    <TailH1 title={'단기예보 선택'} />
                </div>
                <form name="kform" className="my-8 w-4/5 flex justify-center items-center">
                    <div className='flex flex-row justify-center items-center w-2/3'>
                        <div className="w-1/2 mx-1">
                            <input type="date" id="dt" name="dt" onChange={(e) => dateChange(e)} className=" w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                        </div>
                        <div className="w-1/2 mx-1">
                            <TailSelect opItem={area} handleChange={(e) => handleClick(e)} />
                        </div>
                    </div>
                </form>
                <div className='flex flex-row justify-center items-center w-2/3'>
                <TailButton caption={'초단기예보'} bcolor={'sky'} handleClick={()=>btClick()}/>
                <TailButton caption={'단기예보'} bcolor={'sky'} handleClick={()=>btClick()}/>
                </div>
            </div>
        </div>
    )
}
