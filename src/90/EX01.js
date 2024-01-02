import { useEffect, useRef, useState } from "react";
import MyButton from "./MyButton";

export default function EX01() {
  const arr = ["안녕하세요","반갑습니다","추워요"];
  const arrColor = ['red','lime','orange'];
  const [tagMsg, setTagMsg] =useState();
  const inRef = useRef();
  const tagArr = arr.map((item,idx)=>{
    return <MyButton key={`mb${idx}`} bcolor={arrColor[idx]} handleOnClick = {()=>handleClick(item)} caption={item}/>
  });
  const handleClick = (msg) => {
    setTagMsg(`${inRef.current.value}님${msg}`);
  }

  useEffect(()=>{
    console.log(tagMsg);
  },[tagMsg])
  return (
    <div className="container mx-auto px-4">
    <h1 className="bg-slate-200 h-10 flex items-center justify-center text-2xl m-5 p-5">리액트</h1>
    <div className="flex justify-center items-center w-full">
    <form className="y-2.5 px-5 me-2 mb-2 flex justify-center items-center">
    <input type="text" ref={inRef} className="shadow-sm 
    bg-gray-50 border border-gray-300
    text-gray-900 text-sm rounded-lg
    focus:ring-blue-500 focus:border-blue-500 
    block w-full p-2.5"/>
    </form>
      {tagArr}
    </div>
    <div className="bg-lime-200 h-10 flex items-center justify-center text-2xl m-5 p-5">
      {tagMsg}
    </div>
    </div>
  )
}
