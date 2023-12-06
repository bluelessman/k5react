import { useState, useRef } from "react";
import TailButton from "../ui/TailButton";
import TailH1 from "../ui/TailH1";
import TailInput from "../ui/TailInput";

export default function RefTest() {
    let cnt = 0;
    const [stCnt, setStCnt] = useState(0);
    const rfCnt = useRef(0);
    const rfNum1 = useRef();
    const rfNum2 = useRef();
    const rfNum3 = useRef();

    const handleCntUp = () => {
        cnt++;
        console.log("cnt = " + cnt);
    }

    const handleStCntUp = () => {
        setStCnt(stCnt + 1);
        console.log("stCnt = " + stCnt);
    }

    const handleRfCntUp = () => {
        rfCnt.current = rfCnt.current + 1;
        console.log("rfCnt = " + rfCnt.current);
    }

    const handleSum = () => {
        let n1 = parseInt(rfNum1.current.value);
        let n2 = parseInt(rfNum2.current.value);
        rfNum3.current.value = n1 + n2;
    }

    return (
        <div className="flex flex-col w-full max-w-screen-xl mx-auto h-screen overflow-y-scroll">
            <div className="flex justify-center items-center h-20">
                <TailH1 title={"useRef Hook"} />
            </div>
            <div className="flex justify-center items-center h-20">
                <div>cnt={cnt}</div>
                <TailButton caption={`cnt 증가`} handleClick={() => handleCntUp()} />
            </div>
            <div className="flex justify-center items-center h-20">
                <div>stCnt={stCnt}</div>
                <TailButton caption={`stCnt 증가`} handleClick={() => handleStCntUp()} />
            </div>
            <div className="flex justify-center items-center h-20">
                <div>rfCnt={rfCnt.current}</div>
                <TailButton caption={`rfCnt 증가`} handleClick={() => handleRfCntUp()} />
            </div>
            <div className="flex justify-center flex-row items-center">
                <div>
                    {/* <input type="number" id="num1" name="num1"
                        ref={rfNum1} /> */}
                    <TailInput type={"number"} id={`num1`} rf={rfNum1} isOnly={false}/>
                </div>
                <div>+</div>
                <div>
                    <TailInput type={"number"} id={`num2`} rf={rfNum2} isOnly={false}/>
                </div>
                <div>
                    <TailButton caption={`=`} handleClick={() => handleSum()} />
                </div>

                <div>
                    <TailInput type={"number"} id={`num3`} rf={rfNum3} isOnly={true}/>
                </div>
            </div>

        </div>
    )
}
