import { Link } from "react-router-dom"

export default function Products() {
  return (
    <>
     <div className="flex justify-between">
        <h2 className="text-4xl font-black text-slate-500">Productos</h2>
        <Link to="productos/nuevo" className="rounded-md bg-purple-600 p-3 text-sm font-bold text-white shadow-sm hover:bg-purple-500">Agregar Producto</Link>
     </div>
    </>
  )
}
 