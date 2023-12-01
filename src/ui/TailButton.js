export default function TailButton({caption,handleClick}) {
  return (
    <button className="inline-flex justify-center items-center p-5 rounded-md h-10 m-3 bg-sky-500 text-white hover:bg-sky-900 hover:cursor-pointer" onClick={handleClick}>{caption}</button>
  )
}
