import LogoP from "../01/LogoP"
import Styles from "./Lotto.module.css"
import { useState,useEffect } from "react";
export default function Lotto() {
    const [tags,setTags] = useState();
    const handleCheck = (n)=>{
        let lottoNum = [];
        while(lottoNum.length<7){
            let n = Math.floor(Math.random()*45)+1;
            if(!lottoNum.includes(n)){
                lottoNum.push(n);
            }
        }
        lottoNum.splice(6,0,"+");

        let tmTags = lottoNum.map((item,idx)=>
        <span key={`sp${idx}`} className={Styles[`sp${Math.floor(parseInt(item)/10)}`]}>{item}</span>
        );
        console.log(tmTags);
        setTags(tmTags);

    };
    useEffect(()=>{
        setTags("Lotto번호 생성기")
    },[]);
    return (
        <div className={Styles.divLotto}>
            <div className={Styles.d1}>
                <p className={Styles.divp}>{tags}</p>
            </div>
            <div className={Styles.d2}>
                <button className={Styles.bt} onClick={handleCheck}>로또번호생성</button>
            </div>
        </div>
    );
}
