import { useParams } from "react-router-dom"
export default function Rpage1() {
  const item = useParams().item;
  const itemList = {'사과':'🍎','바나나':'🍌','당근':'🥕'}
  return (
    <div>
      page1 : {itemList[item]}
    </div>
  )
}
