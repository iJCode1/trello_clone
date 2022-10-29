import List from "./list"
import Card from "./card"

function Board() {
  return (
    <div className="flex flex-col flex-1 p-4 bg-white/40">
      <div className="mb-4">
        <h1 className="text-2xl font-bold">Development</h1>
      </div>
      <main className="flex flex-1 gap-6">
        <List title="Todo">
          <Card title="Responder comentarios del curso" photo="/photo-1.png"/>
          <Card title="Añadir el diseño correcto a la lista" photo="/photo-3.png"/>
          <Card title="Crear ruta para el nuevo curso" photo="/photo-2.png"/>
          <Card title="Actualizar imágenes de usuarios" photo="/photo-4.png"/>
          <Card title="Terminar el taller de Trello" photo="/photo-3.png"/>
          <Card title="Mandar a producción la versión b" photo="/photo-2.png"/>
          <Card title="Revisar proyectos de estudiantes" photo="/photo-3.png"/>
          <Card title="Mandar a revisión el clon de Trello" photo="/photo-4.png"/>
          <Card title="Grabar clases pendientes del curso" photo="/photo-1.png"/>
          <Card title="Dar soporte a Julieta" photo="/photo-3.png"/>
        </List>
        <List title="In Progress" />
        <List title="Done" />
      </main>
    </div>
  )
}

export default Board