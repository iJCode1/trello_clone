import List from "./list"
import Card from "./card"
import { useState } from 'react';
import { todoList, inProgressList, doneList } from './data'

function Board({ setModal, setDetails }) {

  const [dragged, setDragged] = useState(null)
  const [listOfList, setListOfList] = useState({
    todoList,
    inProgressList,
    doneList,
  })

  function handleDrop(event) {
    const list = event.currentTarget.dataset.id

    const listOfListClone = structuredClone(listOfList)

    const newList = listOfListClone[dragged.list].filter(item => {
      return dragged.data.id !== item.id
    })

    listOfListClone[dragged.list] = newList
    listOfListClone[list].push(dragged.data)

    setListOfList(listOfListClone)
  }

  return (
    <div className="flex flex-col flex-1 p-4 bg-white/40">
      <div className="mb-4">
        <h1 className="text-2xl font-bold">Development</h1>
      </div>
      <main className="flex flex-1 gap-6">
        <List title="Todo" id="todoList" handleDrop={handleDrop} listOfList={listOfList} setListOfList={setListOfList}>
          {
            listOfList.todoList.map(item => (
              <Card {...item} key={item.id} setDragged={setDragged} dataItem={item.id} setModal={setModal} listOfList={listOfList} setDetails={setDetails} />
            ))
          }
        </List>

        <List title="In Progress" id="inProgressList" handleDrop={handleDrop} listOfList={listOfList} setListOfList={setListOfList}>
          {
            listOfList.inProgressList.map(item => (
              <Card {...item} key={item.id} setDragged={setDragged} dataItem={item.id} setModal={setModal} listOfList={listOfList} setDetails={setDetails} />
            ))
          }
        </List>

        <List title="Done" id="doneList" handleDrop={handleDrop} listOfList={listOfList} setListOfList={setListOfList}>
          {
            listOfList.doneList.map(item => (
              <Card {...item} key={item.id} setDragged={setDragged} dataItem={item.id} setModal={setModal} listOfList={listOfList} setDetails={setDetails} />
            ))
          }
        </List>

      </main>
    </div>
  )
}

export default Board