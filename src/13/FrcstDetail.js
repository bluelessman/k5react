import { useSearchParams } from "react-router-dom"
import getxy from './getxy.json'
import { useEffect, useState } from "react";
export default function FrcstDetail() {
    const [tag, setTag] = useState();
    const [sParams] = useSearchParams();
    const gubun = sParams.get('gubun');
    const dt = sParams.get('dt');
    const area = sParams.get('area');

    let apikey = process.env.REACT_APP_APIKEY;
    let tm = getxy.filter(item => item['1단계'] === area);
    let nx = tm[0]['격자 X'];
    let ny = tm[0]['격자 Y'];

    let url = "http://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/"
    if (gubun === '1') {
        url += "getUltraSrtFcst";
        url += `?serviceKey=${apikey}&numOfRows=60&pageNo=1&dataType=JSON&base_date=${dt}&base_time=0630&nx=${nx}&ny=${ny}`
    } else {
        url += "getVilageFcst";
        url += `?serviceKey=${apikey}&numOfRows=60&pageNo=1&dataType=JSON&base_date=${dt}&base_time=0500&nx=${nx}&ny=${ny}`
    }

    const getData = async (url) => {
        const resp = await fetch(url);
        const data = await resp.json();
        let tm = data.response.body.items.item;
        setTag(tm.map((item, idx) => <div key={`d${idx}`}>
            <div>{item['category']}</div>
            <div>{item['fcstTime']}</div>
            <div>{item['fcstValue']}</div>
        </div>))
        console.log(data.response.body.items.item);
    }

    useEffect(() => {
        console.log(url);
        getData(url);
    }, [url])

    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-10 gap-1'>
            {tag}
        </div>
    )
}
