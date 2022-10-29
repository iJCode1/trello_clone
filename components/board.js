import List from "./list"
import Card from "./card"
import { useState } from 'react';
import { todoList, inProgressList, doneList } from './data'

function Board() {

  const [dragged, setDragged] = useState(null);

  function handleDrop(event) {
    const list = event.currentTarget.dataset.id
    console.log(dragged);
  }

  return (
    <div className="flex flex-col flex-1 p-4 bg-white/40">
      <div className="mb-4">
        <h1 className="text-2xl font-bold">Development</h1>
      </div>
      <main className="flex flex-1 gap-6">
        <List title="Todo" id="todo" handleDrop={handleDrop}>
          {
            todoList.map(item => (
              <Card {...item} key={item.id} setDragged={setDragged} />
            ))
          }
        </List>

        <List title="In Progress" id="in-progress" handleDrop={handleDrop}>
          {
            inProgressList.map(item => (
              <Card {...item} key={item.id} setDragged={setDragged} />
            ))
          }
        </List>

        <List title="Done" id="done" handleDrop={handleDrop}>
          {
            doneList.map(item => (
              <Card {...item} key={item.id} setDragged={setDragged} />
            ))
          }
        </List>

      </main>
    </div>
  )
}

export default Board