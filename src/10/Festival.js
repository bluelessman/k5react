import TailH1 from '../ui/TailH1';
import TailButton from '../ui/TailButton';
import TailCard from '../ui/TailCard';
import { FcPicture } from "react-icons/fc";
import { useState, useEffect,useRef } from 'react';

export default function Festival() {
  //환경변수값 가져오기
  let apikey = process.env.REACT_APP_APIKEY;
  let dataList;
  let tm;
  //fetch 데이터 저장
  const [tdata, setTdata] = useState();
  const [guList,setGuList] = useState([]);
  const [con, setCon] = useState();
  const [opt, setOpt] = useState();
  const sel = useRef();


  const handleResetData = (e) => {
    e.preventDefault();
    sel.current.value = "default";
  };

  const handleGetData = (e) => {
    e.preventDefault();
    setCon(tdata.filter((item)=>item.key.indexOf(sel.current.value)!==-1));
    console.log(dataList);
  }

  //tdata변경
  useEffect(() => {
    async function getData() {
      let url = `https://apis.data.go.kr/6260000/FestivalService/getFestivalKr?`;
      url = `${url}serviceKey=${apikey}`;
      url = `${url}&pageNo=1`;
      url = `${url}&numOfRows=40`;
      url = `${url}&resultType=json`;
      console.log(url);
      const resp = await fetch(url);
      const data = await resp.json();
      dataList = await data.getFestivalKr.item;
      console.log(dataList);
      setGuList(new Set(dataList.map(item=>item.GUGUN_NM)));
      let dset = Array.from(guList);
      let guSel = dset.map((item,idx)=>
      <option value={item} key={`sel${idx}`}>{item}</option>
      );
      setOpt(guSel);
      console.log(dset);
      tm = dataList.map((item,idx)=>    
      <TailCard imgSrc={item.MAIN_IMG_NORMAL}
      key={`card${idx}${item.GUGUN_NM}`}
              title={item.TITLE}
              subtitle={item.TRFC_INFO}
              tags={item.USAGE_DAY_WEEK_AND_TIME} />);
      setTdata(tm);
    };
    getData();
  }, []);


  return (
    <div className="container mx-auto w-full h-screen">
      <div className="flex flex-col justify-top items-center w-full my-8">
        <div className='flex'>
          <TailH1 title={'부산축제정보'} />
          <FcPicture className='text-4xl mx-5' />
        </div>
        <form name="kform" className="my-8 w-4/5 flex justify-center items-center">
          <div className='w-1/2 mx-4'>
            <select ref={sel} className="shadow-sm 
                                                   bg-gray-50 border border-gray-300
                                                   text-gray-900 text-sm rounded-lg
                                                   focus:ring-blue-500 focus:border-blue-500 
                                                   block w-full p-2.5">
                                                    <option key='default' value="default">--지역선택--</option>
                                                    {opt}
          </select>
          </div>
          <TailButton caption=' 확 인 ' bcolor='sky' handleClick={(e) => handleGetData(e)} />
          <TailButton caption=' 취 소 ' bcolor='sky' handleClick={(e) => handleResetData(e)} />
        </form>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
        {con}
      </div>
      </div>
    </div>
  )
}
