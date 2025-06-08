import { Link } from "react-router-dom";
import { useEffect, useRef } from "react";
import Titulo from "../components/Titulos";
import Button from "../components/Button";
import ButtonDelete from "../components/ButtonDelete";
import useFetchProduct from "../hooks/users/useFetchProduct";
import useProductActions from "../hooks/users/useProductActions";

const Home = () => {
  const { products, getProducts } = useFetchProduct();
  const { deleteProduct, handleUpdateProducts } = useProductActions(getProducts);

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <Link
        to="/products"
        className="text-2xl font-bold text-gray-900 mb-4 bg-green-100 p-2 rounded w-full text-center hover:bg-green-200 transition-colors block mb-6"
      >
        Agregar Producto
      </Link>

      <Titulo titulo="Informacion de productos" />

      <p className="mt-1 text-sm text-gray-600 mb-4">
        Lista de Productos registrados.
      </p>

      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200 rounded-lg">
          <thead className="bg-gray-100 text-gray-700 text-left text-sm">
            <tr>
              <th className="px-4 py-2 border-b">ID</th>
              <th className="px-4 py-2 border-b">Nombre</th>
              <th className="px-4 py-2 border-b">Stock</th>
              <th className="px-4 py-2 border-b">Precio</th>
              <th className="px-4 py-2 border-b">Categoría</th>
              <th className="px-4 py-2 border-b">Acciones</th>
            </tr>
          </thead>
          <tbody>
  {products?.map((product) => (
    <tr
      key={product.id}
      className="border-b hover:bg-gray-50 transition-colors"
    >
      <td className="px-4 py-2">{product.id}</td>
      <td className="px-4 py-2">{product.nombre || "Sin nombre"}</td>
      <td className="px-4 py-2">{product.stock}</td>
      <td className="px-4 py-2">{product.precio}</td>
      <td className="px-4 py-2">{product.categoria}</td>
      <td className="px-4 py-2 flex gap-2">
        <Button
          text="Editar"
          onClick={() => handleUpdateProducts(product.id)}
        />
        <ButtonDelete
          text="Eliminar"
          onClick={() => deleteProduct(product.id)}
        />
      </td>
    </tr>
  ))}
</tbody>
        </table>
      </div>
    </div>
  );
};

export default Home;
