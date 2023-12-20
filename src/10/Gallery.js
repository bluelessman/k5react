import TailH1 from '../ui/TailH1';
import TailButton from '../ui/TailButton';
import TailCard from '../ui/TailCard';
import { FcPicture } from "react-icons/fc";
import { useState, useEffect, useRef } from 'react';

export default function Gallery() {
  //환경변수값 가져오기
  let apikey = process.env.REACT_APP_APIKEY;

  //fetch 데이터 저장
  const [tdata, setTdata] = useState([]);
  const [tags, setTags] = useState([]);
  //키워드 입력
  const kwInput = useRef();

  const handleGetData = async (e) => {
    if (e.key !== "Enter") e.preventDefault();
    //키워드 인코딩
    let enkw = encodeURI(kwInput.current.value);
    if (enkw === '') {
      alert('키워드를 입력하세요.') ;
      kwInput.current.focus();
      return;
    };

    let url = `https://apis.data.go.kr/B551011/PhotoGalleryService1/gallerySearchList1?`;
    url = `${url}serviceKey=${apikey}`
    url = `${url}&numOfRows=10`;
    url = `${url}&pageNo=1`;
    url = `${url}&MobileOS=ETC`;
    url = `${url}&MobileApp=AppTest`;
    url = `${url}&arrange=A`;
    url = `${url}&keyword=${enkw}`;
    url = `${url}&_type=json`;

    console.log(url)

    const resp = await fetch(url);
    const data = await resp.json();

    //console.log(data.response.body.items.item)
    setTdata(data.response.body.items.item);
  };

  const handleResetData = (e) => {
    e.preventDefault();
    kwInput.current.value = '';
  };

  const handleEnter = (e) => {
    if (e.key === "Enter") handleGetData(e);
  };

  //tdata변경
  useEffect(() => {
    console.log("tdata=", tdata);
    let tm = tdata.map((item,idx)=>
    <TailCard imgSrc={item.galWebImageUrl.replace('http','https')}
    key={`card${idx}`}
            title={item.galTitle}
            subtitle={item.galPhotographyLocation}
            tags={item.galSearchKeyword} />
    );
    setTags(tm);
  }, [tdata]);

  return (
    <div className="container mx-auto w-full h-screen">
      <div className="flex flex-col justify-top items-center w-full my-8">
        <div className='flex'>
          <TailH1 title={'한국관광공사 사진정보'} />
          <FcPicture className='text-4xl mx-5' />
        </div>
        <form name="kform" className="my-8 w-4/5 flex justify-center items-center">
          <div className='w-1/2 mx-4'>
            <input type="text" ref={kwInput} id="txt1" className="shadow-sm 
                                                   bg-gray-50 border border-gray-300
                                                   text-gray-900 text-sm rounded-lg
                                                   focus:ring-blue-500 focus:border-blue-500 
                                                   block w-full p-2.5"
              onKeyDown={handleEnter}
              placeholder="키워드입력" required />
          </div>
          <TailButton caption=' 확 인 ' bcolor='sky' handleClick={(e) => handleGetData(e)} />
          <TailButton caption=' 취 소 ' bcolor='sky' handleClick={(e) => handleResetData(e)} />
        </form>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
          {tags}
        </div>
      </div>

    </div>
  )
}
