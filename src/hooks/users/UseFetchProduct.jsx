import { useEffect, useState } from "react";
import { url } from "../../utils/apiUrl";
import { toast } from "react-hot-toast";
import useProductAction from "./UseProductActions";

const useFetchProducts = () => {

    const [products, setProducts] = useState([]);
    const {deleteProducts, handleUpdateProducts} = useProductAction();


    const getProducts = async () => {
        try {

            const response = await fetch(url);
            if (!response.ok) {
                throw new Error("Error fetching products");
            }
            const data = await response.json();
            setProducts(data);

        } catch (error) {
            console.error("Error fetching products:", error);
            toast.error("Error fetching products");

        }
    }

    const getProductById = async (id) => {

        try {

          const response = await fetch(`${url}/${id}`);
          if (!response.ok) {
            console.log("Failed to fetch product");
            throw new Error("Failed to fetch product");
          }
          const data = await response.json();
          return data;

        } catch (error) {
          console.error("Error fetching product:", error);
          console.log("Failed to fetch product");
          return null;
        }
      };

    useEffect(() => {
        getProducts();
    }, []);

    return {
        products,
        getProducts,
        getProductById

    }
}

export default useFetchProducts;