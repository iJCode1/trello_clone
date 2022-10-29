import Image from "next/image"

function List({ title, id, children, handleDrop }) {
  function handleDragOver(event) {
    event.preventDefault();
  }

  return (
    <div onDrop={handleDrop} onDragOver={handleDragOver} className="relative flex flex-1" data-id={id}>
      <div className="absolute inset-0 flex flex-col flex-1 gap-4 p-4 bg-indigo-300 rounded ">
        <div className="flex justify-between">
          <h2 className="font-bold">{title}</h2>
          <span className="leading-list">...</span>
        </div>
        <div className="flex flex-col flex-1 gap-4 overflow-auto">
          {children}
        </div>
        <div className="flex gap-1">
          <Image src="/add.svg" width="20" height="20" alt="" />
          <p className="text-indigo-900">Añada otra tarjeta</p>
        </div>
      </div>
    </div>
  )
}

export default List