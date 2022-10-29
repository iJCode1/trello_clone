import Image from "next/image"


function Card({ title, photo }) {
  return (
    <div className="flex flex-col gap-4 p-2 bg-white rounded text-stone-600">
      <div className="flex justify-between">
        <p className="">{title}</p>
        <Image src="/pen.svg" alt="" width="20" height="20"/>
      </div>
      <div className="flex items-baseline justify-between">
        <Image src="/note.svg" alt="" width="20" height="20"/>
        <Image className="rounded-full" src={photo} alt="" width="32" height="32"/>
      </div>
    </div>
  )
}

export default Card