import { IoMdStar, IoMdStarOutline } from "react-icons/io";
import { TProduct } from "../../../types";
import Rating from "react-rating";

type TProductDetailsProps = {
  product: TProduct;
  handleAddToCart: () => Promise<void>;
};

const ProductDetailsCard = ({
  product,
  handleAddToCart,
}: TProductDetailsProps) => {
  return (
    <>
      <div className="card card-side bg-base-100 shadow-xl mb-8">
        <figure>
          <img
            className="w-full md:h-96"
            src={product.image}
            alt={product.name}
          />
        </figure>
        <div className="card-body">
          <h3 className="text-xl font-bold mb-4">{product?.name}</h3>
          <h3 className="text-lg mb-2">Brand : {product?.brand}</h3>
          <h5 className="text-lg mb-2">
            Available Quantity: {product?.quantity}
          </h5>
          <h5 className="text-lg mb-2">Price: ${product?.price}</h5>

          <div className="flex gap-1 items-center ">
            <h5 className="text-lg mb-2">Rating: </h5>
            {/* @ts-expect-error: Type issue with Rating component */}
            <Rating
              className="text-yellow-500"
              initialRating={product?.rating}
              emptySymbol={<IoMdStarOutline className="text-2xl" />}
              fullSymbol={<IoMdStar className="text-2xl" />}
              fractions={2}
              readonly
            />
          </div>
          <h5 className="text-lg mb-2">Description: {product?.description}</h5>

          <div className="card-actions justify-end">
            <button
              className={`btn ${
                !product.quantity ? "btn-disabled" : "btn-primary"
              }`}
              onClick={handleAddToCart}
              disabled={product.quantity === 0}
            >
              {!product.quantity ? "Out of Stock" : "Add to Cart"}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetailsCard;
