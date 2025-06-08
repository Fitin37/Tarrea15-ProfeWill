import { Link, useParams } from "react-router-dom";
import Titulo from "../components/Titulos";
import InputText from "../components/InputText";
import SelectInput from "../components/SelectInput";
import Button from "../components/Button";
import { optionSelect } from '../utils/apiUrl';
import useDataProducts from '../hooks/users/UseDataProduct';
import { Plus } from "lucide-react";
import { useForm } from "react-hook-form";

const Users = () => {
  const { id } = useParams();
  const methods = useForm();
  const { register, handleSubmit, errors } = useDataProducts(methods);

  return (
    <div className="max-w-3xl mx-auto px-6 py-10">
      {/* Botón regresar */}
      <div className="mb-6">
        <Link
          to="/home"
          className="inline-block bg-green-100 text-green-900 font-semibold px-4 py-2 rounded-md hover:bg-green-200 transition"
        >
          ← Regresar al Dashboard
        </Link>
      </div>

      {/* Formulario */}
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-lg rounded-2xl px-8 py-10"
      >
        <Titulo titulo="Información del producto tecnológico" />
        <p className="text-sm text-gray-500 mb-6">
          Llena el formulario para registrar o actualizar un producto.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
          <InputText
            type="text"
            name="nombre"
            label="Nombre"
            placeholder="Nombre del producto"
            register={register}
            errors={errors}
          />

          <InputText
            type="number"
            name="stock"
            label="Stock"
            placeholder="Ej: 10"
            register={register}
            errors={errors}
          />

          <InputText
            type="number"
            name="precio"
            label="Precio"
            placeholder="Ej: 199.99"
            register={register}
            errors={errors}
          />

          <SelectInput
            label="Categoría"
            options={optionSelect}
            name="categoria"
            register={register}
            errors={errors}
          />
        </div>

        <div className="text-right">
        <Button type="submit" text="Guardar producto" icon={Plus} />
         </div>
      </form>
    </div>
  );
};

export default Users;
