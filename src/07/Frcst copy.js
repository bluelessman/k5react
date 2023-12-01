import { useEffect, useState } from "react";
import TailH1 from "../ui/TailH1";
import TailBlueButton from "../ui/TailBlueButton";
import data from "./dataFrcst.json";
export default function FrcstCopy() {
    const [dtTags, setDtTags] = useState();
    const  dtKey = ["frcstOneDt","frcstTwoDt","frcstThreeDt","frcstFourDt"];
    const  cnKey = ["frcstOneCn","frcstTwoCn","frcstThreeCn","frcstFourCn"];
    let dtcn = {};
    let text;
    for(let i=0;i<dtKey.length;i++){
        dtcn[data[dtKey[i]]] = data[cnKey[i]]
    };

    useEffect(()=>{
        setDtTags(dtKey.map((k,idx)=><TailBlueButton key={`bt${idx}`} caption={data[k]} onClick={()=>handleClick(data[k])}/>))
    },[]);

    const handleClick = (bt)=>{
        text = text + bt;
    };

    return (
        <div className="container mx-auto h-screen">
            <div className="flex justify-center items-center h-1/6 bg-slate-100">
                <TailH1 title={"초미세먼지 주간예보"} />
            </div>
            <div className="grow flex flex-col justify-center items-center">
                <div className="flex justify-center items-center p-5">
                {dtTags}
                </div>
                <div>
                    {text}
                </div>
            </div>
        </div>
    )
}
