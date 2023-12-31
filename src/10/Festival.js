import TailH1 from '../ui/TailH1';
// import TailButton from '../ui/TailButton';
import TailCard from '../ui/TailCard';
import { FcPicture } from "react-icons/fc";
import { useState, useEffect} from 'react';
import TailSelect from '../ui/TailSelect';

export default function Festival() {
  //환경변수값 가져오기
  let apikey = process.env.REACT_APP_APIKEY;
  //fetch 데이터 저장
  const [tdata, setTdata] = useState([]);
  const [con, setCon] = useState();
  const [gu, setGu] = useState([]);

  const handleClick = (e)=>{
    setCon(tdata.filter((item) => item.GUGUN_NM===e.target.value)
    .map((item, idx) =>
      <TailCard imgSrc={item.MAIN_IMG_NORMAL}
        key={`card${idx}${item.GUGUN_NM}`}
        title={item.TITLE}
        subtitle={item.TRFC_INFO}
        tags={item.USAGE_DAY_WEEK_AND_TIME} />)
  );
  };

  useEffect(() => {
    const getData = async () => {
      let url = `https://apis.data.go.kr/6260000/FestivalService/getFestivalKr?`;
      url = `${url}serviceKey=${apikey}`;
      url = `${url}&pageNo=1`;
      url = `${url}&numOfRows=40`;
      url = `${url}&resultType=json`;
      const resp = await fetch(url);
      const data = await resp.json();
      setTdata(data.getFestivalKr.item);
    }
    getData();
  }, [apikey])

  useEffect(() => {
    setGu(Array.from(new Set(tdata.map(item => item.GUGUN_NM))).map(item=>item));
  }, [tdata])

  return (
    <div className="container mx-auto w-full h-screen">
      <div className="flex flex-col justify-top items-center w-full my-8">
        <div className='flex'>
          <TailH1 title={'부산축제정보'} />
          <FcPicture className='text-4xl mx-5' />
        </div>
        <form name="kform" className="my-8 w-4/5 flex justify-center items-center">
          <div className='w-1/2 mx-4'>
            <TailSelect opItem={gu} handleChange={(e)=>handleClick(e)} />
          </div>
        </form>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
          {con}
        </div>
      </div>
    </div>
  )
}
