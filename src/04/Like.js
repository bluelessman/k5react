import { useState,useEffect } from 'react'
import style from './Like.module.css'



export default function Like() {

  const [cnt, setCnt] = useState(0);
  useEffect(()=>{
    console.log("Like 생성")
  },[]);
  useEffect(()=>{
    console.log("like 업데이트",cnt)
  },[cnt]);
  const handleUp = () =>{
    setCnt(cnt+1);
    console.log("up",cnt);
  }
  const handleDown = () =>{
    cnt===0?setCnt(cnt):setCnt(cnt-1);
    console.log("down",cnt);
  }
  return (
    <div className={style.likediv}>
      <span onClick={handleUp}>😋</span>
      <span>{cnt}</span>
      <span onClick={handleDown}>😡</span>
    </div>
  )
}

