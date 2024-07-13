/* eslint-disable @typescript-eslint/no-explicit-any */
import { useForm } from "react-hook-form";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { RootState } from "../redux/store";
import { clearCart } from "../redux/features/cart/cartSlice";
import CheckoutForm from "../components/ui/checkout/CheckoutForm";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import orderApi from "../redux/features/order/orderApi";

const Checkout = () => {
  const navigate = useNavigate();
  //grab cart data from local state
  const cart = useAppSelector((state: RootState) => state.cart);
  const dispatch = useAppDispatch();

  const [createOrder] = orderApi.useCreateOrderMutation();
  const { register, handleSubmit } = useForm();

  const onSubmit = async (data: any) => {
    const order = {
      userDetails: data,
      cartItems: cart.items,
    };
    try {
      // creating order
      await createOrder(order);
      dispatch(clearCart());
      Swal.fire({
        icon: "success",
        title: "Successfully",
        text: "Order confirmed Successfully",
      });
      navigate("/products/success");
    } catch (err) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong!",
      });
      console.error("Failed to place the order:", err);
      alert("Failed to place the order. Please try again.");
    }
  };
  return (
    <>
      <CheckoutForm
        handleSubmit={handleSubmit}
        register={register}
        cart={cart}
        onSubmit={onSubmit}
      ></CheckoutForm>
    </>
  );
};

export default Checkout;
