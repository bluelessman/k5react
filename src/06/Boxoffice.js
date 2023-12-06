import { BiCameraMovie } from "react-icons/bi";
import TailH1 from "../ui/TailH1";
import { useEffect, useRef, useState } from "react";

export default function Boxoffice() {
  const [trs, setTrs] = useState();
  const [boxlist, setBoxlist] = useState([]);
  const [yesterday, setYesterday] = useState();
  const rfDate = useRef();
  const getFetchData = (date) => {
    const apikey = process.env.REACT_APP_BOXOFFICE;
    let url = `https://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=${apikey}&targetDt=${date}`;
    fetch(url)
      .then(resp => resp.json())
      .then(data => setBoxlist(data.boxOfficeResult.dailyBoxOfficeList))
      .catch(err => console.log(err))
  }
  const dateChange = () => {
    getFetchData(rfDate.current.value.replaceAll('-', ""));
  }
  useEffect(() => {
    let tmYesterDay = new Date();
    tmYesterDay.setDate(tmYesterDay.getDate() - 1);
    tmYesterDay = tmYesterDay.toISOString().slice(0, 10);
    setYesterday(tmYesterDay);
    // getFetchData(tmYesterDay.replaceAll('-', ""));
  }, [])
  useEffect(() => {
    (boxlist === undefined) ? setTrs(<tr><th></th><td></td><td></td><td></td></tr>) : setTrs(boxlist.map(movie =>
      <tr key={`tr${movie.rnum}`} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 hover:font-bold dark:hover:bg-gray-600">
        <td key={`th${movie.rnum}`} className="text-gray-900 whitespace-nowrap dark:text-white text-left">
          <span className="inline-flex justify-center text-center items-center w-5 h-5 m-2 bg-zinc-600 rounded-md text-white" >{movie.rank}</span>
          {movie.movieNm}
        </td>
        <td key={`td1${movie.rnum}`} className="px-6 py-4 text-right">
          {parseInt(movie.salesAcc).toLocaleString("ko-KR")}원
        </td>
        <td key={`td2${movie.rnum}`} className="px-6 py-4 text-right">
          {parseInt(movie.audiCnt).toLocaleString("ko-KR")}명
        </td>
        <td key={`td3${movie.rnum}`} className="px-6 py-4 text-center ">
          {parseInt(movie.rankInten) >= 0 ? parseInt(movie.rankInten) === 0 ? "-" : <span className="text-red-500">▲{movie.rankInten}</span> : <span className="text-blue-500">▼{Math.abs(parseInt(movie.rankInten))}</span>}
        </td>
      </tr>));;
  }, [boxlist])
  return (
    <div className="container mx-auto h-screen">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="flex m-2">
          <BiCameraMovie className="text-5xl text-sky-500" />
          <TailH1 title="박스오피스" />
        </div>
        <div className="flex m-4 w-full justify-center items-center">
            <label htmlFor="dt" className="inline-flex justify-center items-center mx-1 ">날짜선택</label>
            <input max={yesterday} type="date" id="dt" name="dt" onChange={() => dateChange()} ref={rfDate} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
          </div>
        <div className="relative overflow-x-auto w-3/4 shadow-md sm:rounded-lg">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3 text-center">
                  영화명
                </th>
                <th scope="col" className="px-6 py-3 text-center">
                  매출액
                </th>
                <th scope="col" className="px-6 py-3 text-center">
                  관객수
                </th>
                <th scope="col" className="px-6 py-3 text-center">
                  증감율
                </th>
              </tr>
            </thead>
            <tbody>
              {trs}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
