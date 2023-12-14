// import { useEffect, useState } from "react";
// import fdata from "./dataFrcst.json";
// import TailH1 from "../ui/TailH1";
// import TailButton from "../ui/TailButton";
// export default function Frcst() {

//     const [frcst, setFrcst] = useState();
//     const [dt, setDt] = useState();
//     const [cn, setCn] = useState();
//     const dtKey = ["frcstOneDt", "frcstTwoDt", "frcstThreeDt", "frcstFourDt"];
//     const cnKey = ["frcstOneCn", "frcstTwoCn", "frcstThreeCn", "frcstFourCn"];

//     const getData = () => {
//         // const apikey = process.env.REACT_APP_FRCST;
//         // let date = "2023-11-30";
//         // let url = `https://apis.data.go.kr/B552584/ArpltnInforInqireSvc/getMinuDustWeekFrcstDspth?serviceKey=${apikey}&returnType=json&searchDate=${date}`;
//         // console.log(url);
//         // fetch(url)
//         //     .then(resp => resp.json())
//         //     .then(data => setFrcst(data.response.body.items[0]))
//         //     .catch(err => console.log(err));

//         setFrcst(fdata);
//     };

//     useEffect(() => {
//         getData()
//     }, []);

//     useEffect(() => {
//         if (frcst === undefined) return;
//         let tm = dtKey.map((k, idx) =>
//             // <div key={`dt${idx}`} onClick={() => handleDtClick(idx)}>{frcst[k]}</div>
//             <TailButton key={`dt${idx}`} caption={frcst[k]} bcolor={'sky'} handleClick={() => handleDtClick(idx)} />
//         );
//         setDt(tm);
//     }, [frcst]);

//     const handleDtClick = (idx) => {
//         let tlist = frcst[cnKey[idx]].split(",");
//         let tlist2 = tlist.map((text) => text.split(":"));
//         let tt = tlist2.map((text, idx) =>
//             <tr key={`tr${idx}`} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 hover:font-bold dark:hover:bg-gray-600">
//                 <td key={`td1${idx}`} className="text-gray-900 whitespace-nowrap dark:text-white text-center">
//                     {text[0]}
//                 </td>
//                 {text[0].trim()==="신뢰도"?
//                 <td key={`td2${idx}`} className="px-2 py-1 text-center text-black">
//                     {text[1]}
//                 </td>:
//                 (text[1].trim()==="낮음"?
//                 <td key={`td2${idx}`} className="px-2 py-1 text-center text-sky-600">
//                     😀{text[1]}
//                 </td>:
//                 (text[1].trim()==="보통"?
//                 <td key={`td2${idx}`} className="px-2 py-1 text-center">
//                 😑{text[1]}
//             </td>:
//              <td key={`td2${idx}`} className="px-2 py-1 text-center text-red-600">
//              😥{text[1]}
//          </td>
//                 ))}
//             </tr>);
//         setCn(tt);
//     };

//     return (
//         <div className="flex flex-col w-full max-w-screen-xl mx-auto h-screen overflow-y-auto">
//             <div className="flex justify-center items-center h-20">
//                 <TailH1 title="초미세먼지예보" />
//             </div>
//             <div className="flex flex-col justify-top">
//                 <div className="flex justify-center items-center p-10">
//                     {dt}
//                 </div>
//             </div>
//             <div className="flex justify-center items-center shadow-md sm:rounded-lg">
//                 <table className="w-1/2 text-sm text-left rtl:text-right text-gray-500 font-extrabold dark:text-gray-400">
//                     <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
//                         <tr>
//                             <th scope="col" className="px-2 py-1 text-center">
//                                 지역
//                             </th>
//                             <th scope="col" className="px-2 py-1 text-center">
//                                 미세먼지
//                             </th>
//                         </tr>
//                     </thead>
//                     <tbody>
//                         {cn}
//                     </tbody>
//                 </table>
//             </div>
//         </div>
//     )
// }
