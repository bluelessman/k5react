
export default function TailBlueButton({caption,onClick}) {
  return (
    <button className="inline-flex m-1 p-5 h-10 rounded-md justify-center items-center bg-blue-600 text-white hover:bg-blue-800"
    onClick={onClick}
    >
        {caption}
    </button>
  )
}
