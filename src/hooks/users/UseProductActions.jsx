import { url } from "../../utils/apiUrl";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
 
const useProductsAction = (getProducts) => {
  const navigate = useNavigate();
 
  

  const deleteProduct = async (id) => {
    try {
      const response = await fetch(`${url}/${id}`, {
        method: "DELETE",
      });
      toast.success("Producto eliminado correctamente");
      console.log("Producto eliminado:", response);
      getProducts();
    } catch (error) {
      console.error("Error al eliminar el producto:", error);
      toast.error("Error al eliminar el producto");
    } finally {
      getProducts();
    }
  };
 
 
  
  const handleUpdateProducts = (id) => {
    navigate(`/products/${id}`);
  };
 
  return {
    deleteProduct,
    handleUpdateProducts,
  };
};
 
export default useProductsAction;