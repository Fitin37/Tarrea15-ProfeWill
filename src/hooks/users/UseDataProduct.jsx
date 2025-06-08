import { useEffect } from "react";
import { url } from "../../utils/apiUrl"; 
import { toast } from "react-hot-toast";
import { useNavigate, useParams } from "react-router-dom";
import useFetchProduct from "./UseFetchProduct";

const useDataProduct = (methods) => {
  const { getProductById, getProducts } = useFetchProduct();
  const { id } = useParams();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = methods;

  const navigate = useNavigate();

  // Validación con reglas en register
  useEffect(() => {
    register("nombre", { required: "El nombre es obligatorio" });
    register("stock", { 
      required: "El stock es obligatorio",
      min: { value: 1, message: "El stock mínimo es 1" }
    });
    register("precio", { 
      required: "El precio es obligatorio",
      min: { value: 1, message: "El precio mínimo es 1" }
    });
    register("categoria", { required: "La categoría es obligatoria" });
  }, [register]);

  // Mostrar toast cuando hay errores
  useEffect(() => {
    if (Object.keys(errors).length > 0) {
      const firstErrorKey = Object.keys(errors)[0];
      toast.error(errors[firstErrorKey]?.message || "Error en el formulario");
    }
  }, [errors]);

  const saveProductForm = async (dataForm) => {
    try {
      const response = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(dataForm),
      });
      if (!response.ok) {
        toast.error("Error al agregar el producto");
        throw new Error("Error al agregar el producto");
      }
      toast.success("Producto agregado correctamente");
      navigate("/home");
    } catch (error) {
      console.log("Error al enviar:", error);
    } finally {
      reset();
      getProducts();
    }
  };

  const editProduct = async (dataForm) => {
    try {
      const response = await fetch(`${url}/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(dataForm),
      });
      if (!response.ok) {
        toast.error("Error al editar el producto");
        throw new Error("Error al editar el producto");
      }
      toast.success("Producto editado correctamente");
      navigate("/home");
    } catch (error) {
      console.error("Error al editar el producto:", error);
      toast.error("Error al editar el producto");
    } finally {
      reset();
      getProducts();
    }
  };

  const handleProductAction = (dataForm) => {
    if (id) {
      editProduct(dataForm);
    } else {
      saveProductForm(dataForm);
    }
  };

  const handleUpdateProduct = (id) => {
    navigate(`/products/${id}`);
  };

  const loadProduct = async () => {
    if (id) {
      const product = await getProductById(id);
      if (product) {
        reset({
          nombre: product?.nombre,
          stock: product?.stock,
          precio: product?.precio,
          categoria: product?.categoria,
        });
      }
    }
  };

  useEffect(() => {
    loadProduct();
  }, [id]);

  return {
    register,
    handleSubmit: handleSubmit(handleProductAction),
    errors,
    getProductById,
    handleUpdateProduct,
    loadProduct,
  };
};

export default useDataProduct;
