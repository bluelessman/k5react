
import TailH1 from "../ui/TailH1";
import TrafficNav from "./TrafficNav";
import { useState, useEffect } from "react";
// https://api.odcloud.kr/api/15070282/v1/uddi:00e5cb5a-ecdf-4190-a499-ba3a6b2a8db9?page=1&perPage=20&returnType=JSON&serviceKey=8HHz3IepRWWvY7QNxfN84iinMALdCLEZ6c36YiTczP%2Fxqlf3COjYZdrOw6YA4hszBLpx4bZl9OTKvXuJc%2BsQ1A%3D%3D
export default function Traffic() {
    const [tdata, setTdata] = useState([]);
    const [c1, setC1] = useState();
    const [c2, setC2] = useState();
    const [selC1, setSelC1] = useState();
    const [selC2, setSelC2] = useState();
    const [detail,setDetail] = useState();
    const detailKey = ['사고건수', '사망자수', '중상자수', '경상자수', '부상신고자수'] ;
    const getData = async () =>{
        const apiKey = process.env.REACT_APP_APIKEY;
        let url = `https://api.odcloud.kr/api/15070282/v1/uddi:00e5cb5a-ecdf-4190-a499-ba3a6b2a8db9?page=1&perPage=20&returnType=JSON&serviceKey=`;
        url = url + apiKey;
        const resp = await fetch(url);
        const data = await resp.json();
        setTdata(data.data);
    }
    useEffect(()=>{
        getData();
    },[])
    useEffect(()=>{
        let tm = tdata.map(item=>item['사고유형_대분류']);
        tm = new Set(tm);
        tm = [...tm];
        setC1(tm);
    },[tdata])

    useEffect(()=>{
        let tm = tdata.filter((item)=>item.사고유형_대분류===selC1)
        .map((item)=>item.사고유형_중분류);
        setC2(tm);
    },[selC1])

    useEffect(()=>{
        if (tdata  === undefined) return ;
        let tm = tdata.filter((item) => item.사고유형_대분류 === selC1 &&
                                        item.사고유형_중분류 === selC2)
        tm = tm[0] ;
        console.log("detail", tm)          
    
        if (tm === undefined) return ;
        tm = detailKey.map((k, idx) => <div className='flex flex-col' key={`d1${idx}`}>
                                        <div className='inline-flex 
                                                        justify-center 
                                                        items-center 
                                                        mx-2
                                                         bg-sky-900
                                                         text-white
                                                        p-2'>{k}</div>
                                        <div className='inline-flex 
                                                        justify-center 
                                                        items-center  
                                                        text-lg
                                                        mx-2
                                                        bg-sky-100
                                                         text-sky-900
                                                        p-2'>{parseInt(tm[k]).toLocaleString('ko-KR')}</div>
                                       </div>
                                        )
        setDetail(tm);
      }, [selC2]);

  return (
    <div className="container mx-auto h-screen">
        <div className="flex flex-col justify-top items-center w-full h-full my-8">
        <TailH1 title={"도로교통공단 사고유형별 교통사고 통계"}/>
        <div className="w-5/6 my-10">
            {c1&&<TrafficNav title={'대분류'} carr={c1} sel={selC1} setSel={setSelC1}/>}
        </div>
        <div className="w-5/6 my-10">
            {c1&&<TrafficNav title={'중분류'} carr={c2} sel={selC2} setSel={setSelC2}/>}
        </div>
        <div>
            {detail}
        </div>
        </div>

    </div>
  )
}
