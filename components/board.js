import List from "./list"
import Card from "./card"
import {todoList, inProgressList, doneList} from './data'

function Board() {
  return (
    <div className="flex flex-col flex-1 p-4 bg-white/40">
      <div className="mb-4">
        <h1 className="text-2xl font-bold">Development</h1>
      </div>
      <main className="flex flex-1 gap-6">
        <List title="Todo">
          {
            todoList.map(item => (
              <Card {...item} key={item.id}/>  
            ))
          }
        </List>

        <List title="In Progress">
          {
            inProgressList.map(item => (
              <Card {...item} key={item.id}/>
            ))
          }
        </List>

        <List title="Done">
          {
            doneList.map(item => (
              <Card {...item} key={item.id}/>  
            ))
          }
        </List>

      </main>
    </div>
  )
}

export default Board