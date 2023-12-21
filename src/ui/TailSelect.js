export default function TailSelect({opItem,handleChange}) {
    const ops = opItem.map((item,idx)=><option key={`op${idx}`} value={`${item}`}>{item}</option>);
  return (
    <select onChange={handleChange} className="shadow-sm 
    bg-gray-50 border border-gray-300
    text-gray-900 text-sm rounded-lg
    focus:ring-blue-500 focus:border-blue-500 
    block w-full p-2.5">
      <option value='default'>--선택--</option>
      {ops}
    </select>
  )
}
