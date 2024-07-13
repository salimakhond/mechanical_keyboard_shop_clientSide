import { useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { RootState } from "../redux/store";
import { setToCart } from "../redux/features/cart/cartSlice";
import ProductDetailsCard from "../components/ui/ProductDetailsPage/ProductDetailsCard";
import { useGetSingleProductQuery } from "../redux/features/product/productApi";
import ProgressBar from "../components/ui/ProgressBar";
import ErrorPage from "../components/ui/ErrorPage";
import Swal from "sweetalert2";

const ProductDetails = () => {
  const { id } = useParams();
  const { data, isLoading, error } = useGetSingleProductQuery(id);
  // destructure single product
  const product = data?.data;
  const dispatch = useAppDispatch();
  const cart = useAppSelector((state: RootState) => state.cart);

  if (isLoading) {
    return <ProgressBar></ProgressBar>;
  }

  if (error) {
    return <ErrorPage></ErrorPage>;
  }

  // find matching cart item
  const cartItem = cart.items.find((item) => item._id === product._id);
  //check is the product out of stock or not
  const isProductOutOfStock = cartItem
    ? cartItem.quantity >= product.quantity
    : false;

  const handleAddToCart = async () => {
    if (!isProductOutOfStock) {
      dispatch(setToCart(product));
      Swal.fire({
        icon: "success",
        title: "Successfully",
        text: "Successfully added product in cart!",
      });
    }
  };

  return (
    <>
      <ProductDetailsCard
        product={product}
        handleAddToCart={handleAddToCart}
      ></ProductDetailsCard>
    </>
  );
};

export default ProductDetails;
