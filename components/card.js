import Image from "next/image"


function Card({ id, title, user, comments = [], setDragged }) {
  function handleDragStart(event) {
    setDragged(
      {
        list: event.target.closest("[data-id]").dataset.id,
        data: {
          id,
          title,
          user,
          comments,
        }
      }
    )
  }
  return (
    <div draggable onDragStart={handleDragStart} className="flex flex-col gap-4 p-2 bg-white rounded text-stone-600">
      <div className="flex justify-between">
        <p className="">{title}</p>
        <Image src="/pen.svg" alt="" width="20" height="20" />
      </div>
      <div className="flex items-baseline justify-between">
        <div className="flex gap-1">
          <Image src="/note.svg" alt="" width="20" height="20" />
          {comments.length > 0 ? <span>{comments.length}</span> : null}
        </div>
        <Image className="rounded-full" src={user.avatar} alt="" width="32" height="32" />
      </div>
    </div>
  )
}

export default Card