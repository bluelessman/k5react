
import TailButton from "../ui/TailButton";
export default function TrafficNav({title,carr,sel,setSel}) {
    const btHandleClick = (data) => {
        setSel(data);
    }
    const bts = carr.map((data,idx)=><TailButton caption={data} key={`bt${idx}`} bcolor={data===sel?'orange':'sky'} handleClick={()=>btHandleClick(data)}/>);
  return (
    <div className="flex w-full bg-slate-200 p-2">
      <div className="flex justify-center items-center text-xl font-bold w-1/6">
        {title}
      </div>
      <div className="flex justify-end w-5/6 items-center">
        {bts}
      </div>
    </div>
  )
}
