import { useSearchParams } from "react-router-dom"
export default function Rpage2() {
  const [sPrams] = useSearchParams();
  const itemList = {'사과':'🍎','바나나':'🍌','당근':'🥕'}
  return (
    <div>
      page2 : {sPrams.get('item1')&&itemList[sPrams.get('item1')]}{sPrams.get('item2')!==null?itemList[sPrams.get('item2')]:""}
    </div>
  )
}
