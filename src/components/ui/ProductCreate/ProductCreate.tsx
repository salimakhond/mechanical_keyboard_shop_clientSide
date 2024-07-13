/* eslint-disable @typescript-eslint/no-explicit-any */
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useCreateProductMutation } from "../../../redux/features/product/productApi";
import Swal from "sweetalert2";

const ProductCreate = () => {
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();
  const [createProduct, { isLoading, error }] = useCreateProductMutation();

  const onSubmit = async (data: any) => {
    const { image, name, brand, quantity, price, rating, description } = data;

    const product = {
      name,
      brand,
      price: parseFloat(price),
      quantity: parseInt(quantity),
      rating: parseFloat(rating),
      description,
      image,
    };

    try {
      await createProduct(product).unwrap();
      Swal.fire({
        icon: "success",
        title: "Success",
        text: "Product created successfully",
      });
      navigate("/products/management");
    } catch (err) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Failed to create product",
      });
      console.error(err);
    }
  };

  return (
    <div className="mb-8 p-4">
      <div className="md:w-3/4 md:mx-auto">
        <h1 className="text-3xl font-bold ml-6 mt-3">Create Product</h1>
        <div>
          <div className="bg-base-100 w-full h-full shadow-2xl">
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  {...register("name", { required: "Name is required" })}
                  className="w-full px-3 py-2 border rounded"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Brand</span>
                </label>
                <input
                  type="text"
                  {...register("brand", { required: "Brand is required" })}
                  className="w-full px-3 py-2 border rounded"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Price</span>
                </label>
                <input
                  type="number"
                  step="0.01"
                  {...register("price", { required: "Price is required" })}
                  className="w-full px-3 py-2 border rounded"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Quantity</span>
                </label>
                <input
                  type="number"
                  {...register("quantity", {
                    required: "Quantity is required",
                  })}
                  className="w-full px-3 py-2 border rounded"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Rating</span>
                </label>
                <input
                  type="number"
                  step="0.1"
                  {...register("rating", {
                    required: "Rating is required",
                    min: {
                      value: 1,
                      message: "Rating must be at least 1",
                    },
                    max: {
                      value: 5,
                      message: "Rating must be at most 5",
                    },
                  })}
                  className="w-full px-3 py-2 border rounded"
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Description</span>
                </label>
                <textarea
                  {...register("description", {
                    required: "Description is required",
                  })}
                  className="w-full px-3 py-2 border rounded"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Image URL</span>
                </label>
                <input
                  type="url"
                  {...register("image", { required: "Image URL is required" })}
                  className="w-full px-3 py-2 border rounded"
                />
              </div>
              <div className="form-control mt-6 w-1/4">
                <button className="btn btn-primary" disabled={isLoading}>
                  Create
                </button>
              </div>
              {error && (
                <p className="text-red-500 mt-4">Failed to create product</p>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCreate;
