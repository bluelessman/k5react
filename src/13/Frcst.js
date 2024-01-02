import TailButton from "../ui/TailButton";
import TailSelect from "../ui/TailSelect"
import getxy from './getxy.json'

import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Frcst() {
    const getArea = getxy.map(item => item["1단계"]);
    const ref = useRef();
    const [dt,setDt] = useState();
    const [sel,setSel] = useState();
    const navigate = useNavigate(); 

    const handleSelChange = (e) => {
        setSel(e.target.value);
    }

    const handleDt = (e) => {
        setDt(e.target.value.replaceAll('-',''));
    }

    return (
            <div className="flex flex-col justify-top items-center w-full my-8">
                <form name="kform" className="my-8 w-4/5 flex justify-center items-center">
                    <div className='flex justify-end items-center mx-2'>
                        <div className="relative max-w-sm">
                            <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                                <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                                </svg>
                            </div>
                            <input ref={ref} type="date" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                            placeholder="Select date" onChange={(e)=>handleDt(e)}/>
                        </div>
                    </div>
                    <div className='relative max-w-sm mx-2'>
                        <TailSelect opItem={getArea} handleChange={(e)=>handleSelChange(e)} />
                    </div>
                </form>
                <div className='flex flex-row justify-center items-center'>
                <TailButton id="bt1" caption={'초단기예보'} bcolor={'sky'} handleClick={()=>navigate(`./detail?gubun=${1}&dt=${dt}&area=${sel}`)}/>
                <TailButton id="bt2" caption={'단기예보'} bcolor={'sky'} handleClick={()=>navigate(`./detail?gubun=${2}&dt=${dt}&area=${sel}`)}/>
                </div>
            </div>
    )
}
