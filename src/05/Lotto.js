import { useState } from 'react';
import Style from './Lotto.module.css'
export default function Lotto() {
    const [tags,setTags]=useState();
    const handleClick = (e)=>{
        e.preventDefault();
        setTags(Math.random());
    }
  return (
        <main className={Style.m}>
      <section className={Style.sec}>
            <form className={Style.fm}>
                <div className={Style.fdiv}>
                    <div className={Style.div1} id="d1">
                        {tags}
                    </div>
                </div>
                <div className={Style.fdiv}>
                    <div className={Style.div2} id="d2">
                        <button className={Style.bt} onClick={handleClick}>로또번호생성</button>
                    </div>
                </div>
            </form>
        </section>
    </main>
  )
}
