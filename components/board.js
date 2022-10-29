import List from "./list"

function Board() {
  return (
    <div className="flex flex-col flex-1 p-4 bg-white/40">
      <div className="mb-4">
        <h1 className="text-2xl font-bold">Development</h1>
      </div>
      <main className="flex flex-1 gap-6">
        <List />
        <List />
        <List />
      </main>
    </div>
  )
}

export default Board